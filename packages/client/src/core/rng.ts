export type Rng = {
  nextFloat: () => number;
  nextInt: (maxExclusive: number) => number;
  seed: number;
};

export function createRng(seed: number): Rng {
  let t = seed >>> 0;

  const nextFloat = () => {
    // Mulberry32
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };

  const nextInt = (maxExclusive: number) => {
    if (maxExclusive <= 0) return 0;
    return Math.floor(nextFloat() * maxExclusive);
  };

  return { nextFloat, nextInt, seed };
}
