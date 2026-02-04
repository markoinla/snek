// animations.ts — Lightweight frame-based tween system
// No external dependencies. Driven by deltaTime from the main render loop.

// ---------------------------------------------------------------------------
// Easing functions  (t ∈ [0,1] → [0,1])
// ---------------------------------------------------------------------------

export const ease = {
    linear: (t: number): number => t,

    outQuad: (t: number): number => t * (2 - t),

    inOutCubic: (t: number): number =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,

    outElastic: (t: number): number => {
        if (t === 0 || t === 1) return t;
        return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
    },

    outBounce: (t: number): number => {
        const n1 = 7.5625;
        const d1 = 2.75;
        if (t < 1 / d1) return n1 * t * t;
        if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
        if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
        return n1 * (t -= 2.625 / d1) * t + 0.984375;
    },
} as const;

export type EasingFn = (t: number) => number;

// ---------------------------------------------------------------------------
// Tween types
// ---------------------------------------------------------------------------

type Vec3Property = 'position' | 'rotation' | 'scale';
type Axis = 'x' | 'y' | 'z';

interface ActiveTween {
    /** The Three.js object (or any object with position/rotation/scale sub-objects) */
    target: any;
    /** Which vector property to animate */
    property: Vec3Property;
    /** Which axis within that property */
    axis: Axis;
    /** Starting value */
    from: number;
    /** Ending value */
    to: number;
    /** Total duration in seconds */
    duration: number;
    /** Easing function */
    easing: EasingFn;
    /** Elapsed time in seconds */
    elapsed: number;
    /** Optional callback when tween completes */
    onComplete?: () => void;
    /** Optional tag for batch cancellation */
    tag?: string;
}

// ---------------------------------------------------------------------------
// Active tween storage
// ---------------------------------------------------------------------------

const activeTweens: ActiveTween[] = [];

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Animate a single axis of a vec3 property (position, rotation, or scale).
 *
 * @example
 *   tween(mesh, 'scale', 'y', 0.7, 1.0, 0.15, ease.outElastic);
 */
export function tween(
    target: any,
    property: Vec3Property,
    axis: Axis,
    from: number,
    to: number,
    duration: number,
    easing: EasingFn = ease.linear,
    onComplete?: () => void,
    tag?: string,
): void {
    // Set the property immediately to the start value
    target[property][axis] = from;

    activeTweens.push({
        target,
        property,
        axis,
        from,
        to,
        duration,
        easing,
        elapsed: 0,
        onComplete,
        tag,
    });
}

/**
 * Animate all three axes of a vec3 property uniformly (same from/to on x, y, z).
 * Useful for uniform scale tweens.
 *
 * @example
 *   tweenUniform(mesh, 'scale', 1.3, 1.0, 0.15, ease.outElastic);
 */
export function tweenUniform(
    target: any,
    property: Vec3Property,
    from: number,
    to: number,
    duration: number,
    easing: EasingFn = ease.linear,
    onComplete?: () => void,
    tag?: string,
): void {
    const axes: Axis[] = ['x', 'y', 'z'];
    axes.forEach((axis, i) => {
        // Only fire onComplete on the last axis tween
        tween(
            target,
            property,
            axis,
            from,
            to,
            duration,
            easing,
            i === 2 ? onComplete : undefined,
            tag,
        );
    });
}

/**
 * Cancel all active tweens on a specific target.
 * If property is specified, only cancel tweens on that property.
 * If tag is specified, only cancel tweens with that tag.
 */
export function cancelTween(
    target: any,
    property?: Vec3Property,
    tag?: string,
): void {
    for (let i = activeTweens.length - 1; i >= 0; i--) {
        const t = activeTweens[i];
        if (t.target !== target) continue;
        if (property && t.property !== property) continue;
        if (tag && t.tag !== tag) continue;
        activeTweens.splice(i, 1);
    }
}

/**
 * Cancel all tweens with a given tag, regardless of target.
 */
export function cancelTweensByTag(tag: string): void {
    for (let i = activeTweens.length - 1; i >= 0; i--) {
        if (activeTweens[i].tag === tag) {
            activeTweens.splice(i, 1);
        }
    }
}

/**
 * Advance all active tweens by deltaTime (in seconds).
 * Call once per render frame from main.ts.
 */
export function updateAnimations(deltaTime: number): void {
    for (let i = activeTweens.length - 1; i >= 0; i--) {
        const tw = activeTweens[i];
        tw.elapsed += deltaTime;

        const rawT = Math.min(tw.elapsed / tw.duration, 1);
        const easedT = tw.easing(rawT);
        tw.target[tw.property][tw.axis] = tw.from + (tw.to - tw.from) * easedT;

        if (rawT >= 1) {
            // Ensure final value is exact
            tw.target[tw.property][tw.axis] = tw.to;
            activeTweens.splice(i, 1);
            tw.onComplete?.();
        }
    }
}

/**
 * Number of currently active tweens (useful for debugging / stats).
 */
export function getActiveTweenCount(): number {
    return activeTweens.length;
}
