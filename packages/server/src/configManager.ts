import { promises as fs } from 'fs';
import path from 'path';
import CONFIG, { getDefaults } from '../../client/src/config';

const CONFIG_FILE_PATH = process.env.CONFIG_FILE_PATH
  ?? path.join(import.meta.dirname, '..', 'config-overrides.json');

// Simple deep-assign (reimplemented locally since config.js doesn't export it)
function deepAssign(target: any, source: any): void {
  for (const key of Object.keys(source)) {
    if (
      source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) &&
      target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])
    ) {
      deepAssign(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

// Promise-chain mutex for write concurrency
let writeChain = Promise.resolve();

function computeOverrides(): Record<string, any> {
  const defaults = getDefaults();
  const diff: Record<string, any> = {};
  for (const key of Object.keys(defaults)) {
    if (JSON.stringify((CONFIG as any)[key]) !== JSON.stringify((defaults as any)[key])) {
      diff[key] = (CONFIG as any)[key];
    }
  }
  return diff;
}

export async function loadConfigOverrides(): Promise<void> {
  try {
    const raw = await fs.readFile(CONFIG_FILE_PATH, 'utf-8');
    const overrides = JSON.parse(raw);
    deepAssign(CONFIG, overrides);
    console.log(`Loaded config overrides from ${CONFIG_FILE_PATH}`);
  } catch (e: any) {
    if (e.code === 'ENOENT') {
      // No overrides file — start with defaults
      return;
    }
    console.warn('Failed to load config overrides:', e.message);
  }
}

export async function saveConfigOverrides(): Promise<void> {
  const job = async () => {
    const overrides = computeOverrides();
    if (Object.keys(overrides).length === 0) {
      // No overrides — delete file if exists
      try {
        await fs.unlink(CONFIG_FILE_PATH);
      } catch (e: any) {
        if (e.code !== 'ENOENT') throw e;
      }
      return;
    }
    const tmpPath = CONFIG_FILE_PATH + '.tmp';
    await fs.writeFile(tmpPath, JSON.stringify(overrides, null, 2), 'utf-8');
    await fs.rename(tmpPath, CONFIG_FILE_PATH);
  };
  writeChain = writeChain.then(job, job);
  return writeChain;
}

export function validateConfigPatch(patch: Record<string, any>): string[] {
  const defaults = getDefaults() as Record<string, any>;
  const errors: string[] = [];

  for (const key of Object.keys(patch)) {
    if (!(key in defaults)) {
      errors.push(`Unknown config key: "${key}"`);
      continue;
    }
    const defaultVal = defaults[key];
    const patchVal = patch[key];

    if (defaultVal !== null && patchVal !== null) {
      if (typeof defaultVal === 'object' && !Array.isArray(defaultVal)) {
        if (typeof patchVal !== 'object' || Array.isArray(patchVal)) {
          errors.push(`"${key}" must be an object`);
          continue;
        }
        // Validate nested keys
        for (const subKey of Object.keys(patchVal)) {
          if (!(subKey in defaultVal)) {
            errors.push(`Unknown key: "${key}.${subKey}"`);
          } else if (typeof patchVal[subKey] !== typeof defaultVal[subKey]) {
            errors.push(`"${key}.${subKey}" must be ${typeof defaultVal[subKey]}, got ${typeof patchVal[subKey]}`);
          }
        }
      } else if (typeof patchVal !== typeof defaultVal) {
        errors.push(`"${key}" must be ${typeof defaultVal}, got ${typeof patchVal}`);
      }
    }
  }

  return errors;
}

export async function applyConfigUpdate(patch: Record<string, any>): Promise<{
  ok: boolean;
  applied?: Record<string, any>;
  overrides?: Record<string, any>;
  errors?: string[];
}> {
  const errors = validateConfigPatch(patch);
  if (errors.length > 0) {
    return { ok: false, errors };
  }

  deepAssign(CONFIG, patch);
  await saveConfigOverrides();

  return {
    ok: true,
    applied: patch,
    overrides: computeOverrides(),
  };
}

export async function resetConfig(): Promise<void> {
  const defaults = getDefaults();
  deepAssign(CONFIG, defaults);
  try {
    await fs.unlink(CONFIG_FILE_PATH);
  } catch (e: any) {
    if (e.code !== 'ENOENT') throw e;
  }
}

export function getCurrentConfig(): Record<string, any> {
  return { ...CONFIG } as Record<string, any>;
}

export function getOverrides(): Record<string, any> {
  return computeOverrides();
}
