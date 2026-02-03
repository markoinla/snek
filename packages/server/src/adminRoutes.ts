import { Router, type Request, type Response, type NextFunction } from 'express';
import crypto from 'crypto';
import {
  getCurrentConfig,
  getOverrides,
  applyConfigUpdate,
  resetConfig,
} from './configManager.ts';
import { getDefaults } from '../../client/src/config.js';
import { renderAdminHTML } from './adminPanel.html.ts';

function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const apiKey = process.env.ADMIN_API_KEY;
  if (!apiKey) {
    res.status(403).json({ error: 'Admin panel disabled (ADMIN_API_KEY not set)' });
    return;
  }

  const provided = (req.headers['x-api-key'] as string) || (req.query.key as string) || '';
  if (!provided) {
    res.status(401).json({ error: 'Missing API key' });
    return;
  }

  const keyBuf = Buffer.from(apiKey, 'utf-8');
  const providedBuf = Buffer.from(provided, 'utf-8');

  if (keyBuf.length !== providedBuf.length || !crypto.timingSafeEqual(keyBuf, providedBuf)) {
    res.status(401).json({ error: 'Invalid API key' });
    return;
  }

  next();
}

export function createAdminRouter(): Router {
  const router = Router();

  router.use('/admin', authMiddleware);

  router.get('/admin', (req: Request, res: Response) => {
    const key = (req.headers['x-api-key'] as string) || (req.query.key as string) || '';
    res.type('html').send(renderAdminHTML(key));
  });

  router.get('/admin/api/config', (_req: Request, res: Response) => {
    res.json({
      config: getCurrentConfig(),
      defaults: getDefaults(),
      overrides: getOverrides(),
    });
  });

  router.patch('/admin/api/config', async (req: Request, res: Response) => {
    const { patch } = req.body || {};
    if (!patch || typeof patch !== 'object') {
      res.status(400).json({ ok: false, errors: ['Missing or invalid "patch" object in body'] });
      return;
    }
    const result = await applyConfigUpdate(patch);
    res.json(result);
  });

  router.post('/admin/api/config/reset', async (_req: Request, res: Response) => {
    await resetConfig();
    res.json({ ok: true });
  });

  return router;
}
