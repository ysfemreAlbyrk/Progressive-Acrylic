# API Reference

Complete reference for Progressive Acrylic functions, parameters, and configuration options.

## Table of Contents

- [Main Function](#main-function)
- [Configuration Object](#configuration-object)
- [Layer Options](#layer-options)
- [Return Object](#return-object)
- [Utility Functions](#utility-functions)
- [Type Definitions](#type-definitions)

## Main Function

### `progressiveAcrylic(target, options)`

Creates a layered acrylic effect on the specified element.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `target` | `HTMLElement` | ✅ | The DOM element to apply the acrylic effect to |
| `options` | `Object` | ❌ | Configuration object for customizing the effect |

#### Returns

Returns an object with control methods:

```typescript
{
  update: (newOptions: Object) => void,
  destroy: () => void
}
```

#### Example

```javascript
const element = document.getElementById('myElement');
const acrylic = progressiveAcrylic(element, {
  blur: {
    enabled: true,
    maxBlur: 200,
    height: '50%'
  }
});
```

## Configuration Object

The configuration object follows this structure:

```typescript
interface AcrylicOptions {
  blur?: BlurLayerOptions;
  luminosity?: LuminosityLayerOptions;
  tint?: TintLayerOptions;
  noise?: NoiseLayerOptions;
}
```

### Default Configuration

```javascript
const defaultOptions = {
  blur: {
    enabled: true,
    direction: 'bottom',
    height: '60%',
    layers: 8,
    maxBlur: 40,
    startOpacity: 0,
    endOpacity: 1,
    position: 'bottom',
    curve: [0.25, 0.46, 0.45, 0.94]
  },
  luminosity: {
    enabled: false,
    brightness: 1.1,
    contrast: 1.05,
    saturate: 1.2,
    opacity: 0.8,
    blendMode: 'normal'
  },
  tint: {
    enabled: false,
    color: '#ffffff',
    gradient: null,
    opacity: 0.1,
    blendMode: 'overlay'
  },
  noise: {
    enabled: false,
    opacity: 0.3,
    blendMode: 'multiply'
  }
};
```

## Layer Options

### Blur Layer Options

| Property | Type | Default | Range/Values | Description |
|----------|------|---------|--------------|-------------|
| `enabled` | `boolean` | `true` | `true` \| `false` | Enable/disable the blur layer |
| `direction` | `string` | `'bottom'` | `'top'` \| `'bottom'` \| `'left'` \| `'right'` | Direction of blur fade |
| `height` | `string` | `'60%'` | `'10%'` - `'100%'` | Height of blur area |
| `layers` | `number` | `8` | `3` - `20` | Number of blur layers |
| `maxBlur` | `number` | `40` | `0` - `1000` | Maximum blur amount in pixels |
| `startOpacity` | `number` | `0` | `0` - `1` | Starting opacity of gradient |
| `endOpacity` | `number` | `1` | `0` - `1` | Ending opacity of gradient |
| `position` | `string` | `'bottom'` | `'top'` \| `'bottom'` | Vertical position of blur area |
| `curve` | `number[]` | `[0.25, 0.46, 0.45, 0.94]` | Cubic-bezier values | Distribution curve for layers |

#### Blur Layer Example

```javascript
blur: {
  enabled: true,
  direction: 'top',
  height: '40%',
  layers: 6,
  maxBlur: 150,
  startOpacity: 0,
  endOpacity: 0.9,
  position: 'top',
  curve: [0.62, 0.123, 0.92, 0.002]
}
```

#### Direction Values

- **`'top'`**: Blur fades upward from the bottom
- **`'bottom'`**: Blur fades downward from the top
- **`'left'`**: Blur fades leftward from the right
- **`'right'`**: Blur fades rightward from the left

#### Position Values

- **`'top'`**: Places blur area at the top of the container
- **`'bottom'`**: Places blur area at the bottom of the container

#### Curve Values

Accepts either an array of cubic-bezier values `[x1, y1, x2, y2]` or predefined strings:

- **`[0.25, 0.46, 0.45, 0.94]`**: iOS-style smooth curve
- **`[0.68, -0.55, 0.265, 1.55]`**: Bounce effect
- **`[0.16, 1, 0.3, 1]`**: Extreme ease-out
- **`[0.7, 0, 0.84, 0]`**: Sharp start, smooth end

### Luminosity Layer Options

| Property | Type | Default | Range/Values | Description |
|----------|------|---------|--------------|-------------|
| `enabled` | `boolean` | `false` | `true` \| `false` | Enable/disable the luminosity layer |
| `brightness` | `number` | `1.1` | `0` - `2` | Brightness adjustment |
| `contrast` | `number` | `1.05` | `0` - `2` | Contrast adjustment |
| `saturate` | `number` | `1.2` | `0` - `3` | Saturation adjustment |
| `opacity` | `number` | `0.8` | `0` - `1` | Layer opacity |
| `blendMode` | `string` | `'normal'` | CSS blend modes | Mix blend mode |

#### Luminosity Layer Example

```javascript
luminosity: {
  enabled: true,
  brightness: 1.2,
  contrast: 1.1,
  saturate: 1.3,
  opacity: 0.9,
  blendMode: 'overlay'
}
```

#### Blend Mode Values

Common blend modes for luminosity layer:

- **`'normal'`**: Standard blending (default)
- **`'overlay'`**: Enhances contrast
- **`'screen'`**: Lightens the result
- **`'multiply'`**: Darkens the result
- **`'lighten'`**: Shows lighter pixels
- **`'darken'`**: Shows darker pixels

### Tint Layer Options

| Property | Type | Default | Range/Values | Description |
|----------|------|---------|--------------|-------------|
| `enabled` | `boolean` | `false` | `true` \| `false` | Enable/disable the tint layer |
| `color` | `string` | `'#ffffff'` | Hex color | Solid color overlay |
| `gradient` | `object` \| `null` | `null` | Gradient object | Linear gradient configuration |
| `opacity` | `number` | `0.1` | `0` - `1` | Layer opacity |
| `blendMode` | `string` | `'overlay'` | CSS blend modes | Mix blend mode |

#### Tint Layer Example (Solid Color)

```javascript
tint: {
  enabled: true,
  color: '#3498db',
  opacity: 0.2,
  blendMode: 'overlay'
}
```

#### Tint Layer Example (Gradient)

```javascript
tint: {
  enabled: true,
  gradient: {
    direction: 'to bottom',
    colors: [
      { color: '#ffffff', stop: 0, opacity: 0.3 },
      { color: '#000000', stop: 50, opacity: 0.1 },
      { color: '#3498db', stop: 100, opacity: 0.5 }
    ]
  },
  opacity: 1,
  blendMode: 'overlay'
}
```

#### Gradient Object Structure

```typescript
interface GradientOptions {
  direction: string;  // CSS gradient direction
  colors: Array<{
    color: string;    // Hex color value
    stop: number;     // Position (0-100)
    opacity: number;  // Individual opacity (0-1)
  }>;
}
```

#### Gradient Direction Values

- **`'to bottom'`**: Top to bottom
- **`'to top'`**: Bottom to top
- **`'to right'`**: Left to right
- **`'to left'`**: Right to left
- **`'to bottom right'`**: Diagonal to bottom-right
- **`'to top left'`**: Diagonal to top-left
- Custom angles: `'45deg'`, `'90deg'`, etc.

### Noise Layer Options

| Property | Type | Default | Range/Values | Description |
|----------|------|---------|--------------|-------------|
| `enabled` | `boolean` | `false` | `true` \| `false` | Enable/disable the noise layer |
| `opacity` | `number` | `0.3` | `0` - `1` | Layer opacity |
| `blendMode` | `string` | `'multiply'` | CSS blend modes | Mix blend mode |

#### Noise Layer Example

```javascript
noise: {
  enabled: true,
  opacity: 0.4,
  blendMode: 'overlay'
}
```

#### Noise Blend Mode Values

Recommended blend modes for noise texture:

- **`'multiply'`**: Darkens with noise pattern (default)
- **`'overlay'`**: Balanced contrast enhancement
- **`'screen'`**: Lightens with noise pattern
- **`'darken'`**: Shows darker noise pixels only
- **`'lighten'`**: Shows lighter noise pixels only

## Return Object

The `progressiveAcrylic()` function returns an object with control methods:

### `update(newOptions)`

Updates the acrylic effect with new configuration options.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `newOptions` | `Object` | ✅ | Partial configuration object with new options |

#### Example

```javascript
const acrylic = progressiveAcrylic(element, initialOptions);

// Update only blur settings
acrylic.update({
  blur: { maxBlur: 300, height: '70%' }
});

// Update multiple layers
acrylic.update({
  blur: { maxBlur: 200 },
  tint: { color: '#ff3498', opacity: 0.3 },
  noise: { enabled: true }
});
```

### `destroy()`

Completely removes the acrylic effect and cleans up all layers.

#### Example

```javascript
const acrylic = progressiveAcrylic(element, options);

// Later, when component unmounts or effect is no longer needed
acrylic.destroy();
```

## Utility Functions

### Built-in Presets

You can use predefined configurations for common styles:

```javascript
// iOS-style acrylic
progressiveAcrylic(element, acrylicPresets['ios-default']);

// Windows acrylic
progressiveAcrylic(element, acrylicPresets['windows-acrylic']);

// Glass morphism
progressiveAcrylic(element, acrylicPresets['glass-morphism']);
```

### Feature Detection

```javascript
// Check if backdrop-filter is supported
const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)');

if (supportsBackdropFilter) {
  progressiveAcrylic(element, options);
} else {
  // Apply fallback styles
}
```

## Type Definitions

Here are TypeScript type definitions for better IDE support:

```typescript
interface AcrylicOptions {
  blur?: {
    enabled?: boolean;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    height?: string;
    layers?: number;
    maxBlur?: number;
    startOpacity?: number;
    endOpacity?: number;
    position?: 'top' | 'bottom';
    curve?: [number, number, number, number];
  };
  luminosity?: {
    enabled?: boolean;
    brightness?: number;
    contrast?: number;
    saturate?: number;
    opacity?: number;
    blendMode?: string;
  };
  tint?: {
    enabled?: boolean;
    color?: string;
    gradient?: {
      direction: string;
      colors: Array<{
        color: string;
        stop: number;
        opacity: number;
      }>;
    } | null;
    opacity?: number;
    blendMode?: string;
  };
  noise?: {
    enabled?: boolean;
    opacity?: number;
    blendMode?: string;
  };
}

interface AcrylicInstance {
  update: (newOptions: Partial<AcrylicOptions>) => void;
  destroy: () => void;
}

declare function progressiveAcrylic(
  target: HTMLElement,
  options?: AcrylicOptions
): AcrylicInstance;
```

## Error Handling

Progressive Acrylic includes built-in error handling:

```javascript
try {
  const acrylic = progressiveAcrylic(element, options);
} catch (error) {
  console.error('Progressive Acrylic Error:', error.message);
  
  // Common error types:
  // - Invalid target element
  // - Unsupported browser
  // - Invalid configuration values
}
```

## Performance Considerations

### Optimization Guidelines

1. **Layer Count**: Use 6-8 layers for optimal performance
2. **Blur Amount**: Keep maxBlur under 300px for better performance
3. **Multiple Effects**: Limit simultaneous acrylic areas
4. **Update Frequency**: Avoid rapid successive updates

### Performance Monitoring

```javascript
const startTime = performance.now();
const acrylic = progressiveAcrylic(element, options);
const endTime = performance.now();

console.log(`Acrylic creation took ${endTime - startTime} milliseconds`);
```

---

*For more examples and tutorials, see the [Examples Guide](examples.md) and [Custom Effects](custom-effects.md).* 