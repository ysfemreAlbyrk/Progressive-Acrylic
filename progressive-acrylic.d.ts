/**
 * Progressive Acrylic - TypeScript Definitions
 * Advanced layered acrylic glass effects for web elements
 */

export interface BlurLayerOptions {
  enabled?: boolean;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  height?: string;
  layers?: number;
  maxBlur?: number;
  startOpacity?: number;
  endOpacity?: number;
  position?: 'top' | 'bottom';
  curve?: [number, number, number, number];
}

export interface LuminosityLayerOptions {
  enabled?: boolean;
  brightness?: number;
  contrast?: number;
  saturate?: number;
  opacity?: number;
  blendMode?: string;
}

export interface GradientColor {
  color: string;
  stop: number;
  opacity: number;
}

export interface GradientOptions {
  direction: string;
  colors: GradientColor[];
}

export interface TintLayerOptions {
  enabled?: boolean;
  color?: string;
  gradient?: GradientOptions | null;
  opacity?: number;
  blendMode?: string;
}

export interface NoiseLayerOptions {
  enabled?: boolean;
  opacity?: number;
  blendMode?: string;
}

export interface AcrylicOptions {
  blur?: BlurLayerOptions;
  luminosity?: LuminosityLayerOptions;
  tint?: TintLayerOptions;
  noise?: NoiseLayerOptions;
}

export interface AcrylicInstance {
  update: (newOptions: Partial<AcrylicOptions>) => void;
  destroy: () => void;
}

/**
 * Creates a progressive acrylic effect on the specified element
 * @param target - The DOM element to apply the effect to
 * @param options - Configuration options for the acrylic effect
 * @returns An instance with update and destroy methods
 */
export declare function progressiveAcrylic(
  target: HTMLElement,
  options?: AcrylicOptions
): AcrylicInstance;

export default progressiveAcrylic; 