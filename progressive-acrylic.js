/**
 * Created by: @ysfemrealbyrk a.k.a. Yusuf Emre Albayrak
 * 
 * Progressive Acrylic - Advanced layered blur effects
 * Creates iOS/Windows-style acrylic glass effects with customizable layers
 * 
 * Layer Stack (bottom to top):
 * 1. Blur Layer (progressive blur)
 * 2. Luminosity Layer (brightness/contrast/saturation)  
 * 3. Tint Layer (color overlay with blend modes)
 * 4. Noise Layer (texture/grain)
 */

function progressiveAcrylic(target, options = {}) {
  const defaults = {
    // Blur Layer Settings
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
    
    // Luminosity Layer Settings  
    luminosity: {
      enabled: false,
      brightness: 1.1,
      contrast: 1.05,
      saturate: 1.2,
      opacity: 0.8,
      blendMode: 'normal'
    },
    
    // Tint Layer Settings - Enhanced with gradient support
    tint: {
      enabled: false,
      color: '#ffffff',        // Solid color
      gradient: null,          // Linear gradient object
      opacity: 0.1,
      blendMode: 'overlay'
    },
    
    // Noise Layer Settings
    noise: {
      enabled: false,
      opacity: 0.3,
      blendMode: 'multiply'
    }
  };
  
  const config = deepMerge(defaults, options);
  
  // Clear any existing acrylic layers
  clearAcrylicLayers(target);
  
  // Create layer container
  const layerContainer = document.createElement('div');
  layerContainer.className = 'acrylic-container';
  layerContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  `;
  
  // Generate progressive mask settings that all layers will use
  const maskSettings = generateProgressiveMask(config.blur);
  
  // Layer 1: Blur Layer (bottom)
  if (config.blur.enabled) {
    const blurLayer = createBlurLayer(config.blur, maskSettings);
    layerContainer.appendChild(blurLayer);
  }
  
  // Layer 2: Luminosity Layer
  if (config.luminosity.enabled) {
    const luminosityLayer = createLuminosityLayer(config.luminosity, maskSettings);
    layerContainer.appendChild(luminosityLayer);
  }
  
  // Layer 3: Tint Layer
  if (config.tint.enabled) {
    const tintLayer = createTintLayer(config.tint, maskSettings);
    layerContainer.appendChild(tintLayer);
  }
  
  // Layer 4: Noise Layer (top)
  if (config.noise.enabled) {
    const noiseLayer = createNoiseLayer(config.noise, maskSettings);
    layerContainer.appendChild(noiseLayer);
  }
  
  target.appendChild(layerContainer);
  
  return {
    update: (newOptions) => progressiveAcrylic(target, deepMerge(config, newOptions)),
    destroy: () => clearAcrylicLayers(target)
  };
}

function generateProgressiveMask(blurConfig) {
  const direction = blurConfig.direction;
  const height = blurConfig.height;
  const position = blurConfig.position;
  
  // Direction = where the blur fades TO (blur direction)
  // Position = where the blur area is positioned in container
  
  let gradientDir;
  switch(direction) {
    case 'top': gradientDir = 'to top'; break;      // Fades upward 
    case 'bottom': gradientDir = 'to bottom'; break; // Fades downward
    case 'left': gradientDir = 'to left'; break;     // Fades leftward
    case 'right': gradientDir = 'to right'; break;   // Fades rightward
    default: gradientDir = 'to bottom';
  }
  
  // Calculate positioning based on position parameter
  const positioning = {
    top: position === 'top' ? '0' : 'auto',
    bottom: position === 'bottom' ? '0' : 'auto',
    left: (direction === 'left' || direction === 'right') ? '0' : '0',
    right: (direction === 'left' || direction === 'right') ? '0' : '0', 
    width: (direction === 'left' || direction === 'right') ? height : '100%',
    height: (direction === 'top' || direction === 'bottom') ? height : '100%'
  };
  
  // For horizontal directions, position differently
  if (direction === 'left') {
    positioning.left = '0';
    positioning.right = 'auto';
  } else if (direction === 'right') {
    positioning.left = 'auto';
    positioning.right = '0';
  }
  
  // Generate progressive mask stops
  const maskStops = [];
  const layers = blurConfig.layers || 8;
  
  for(let i = 0; i < layers; i++) {
    const progress = i / (layers - 1);
    const curveProgress = applyCurve(progress, blurConfig.curve);
    const opacity = blurConfig.startOpacity + (blurConfig.endOpacity - blurConfig.startOpacity) * curveProgress;
    maskStops.push(`rgba(0,0,0,${opacity}) ${progress * 100}%`);
  }
  
  const maskGradient = `linear-gradient(${gradientDir}, ${maskStops.join(', ')})`;
  
  return {
    gradientDir,
    positioning,
    maskGradient,
    layers: blurConfig.layers || 8,
    curve: blurConfig.curve
  };
}

function createBlurLayer(blurConfig, maskSettings) {
  const blurContainer = document.createElement('div');
  blurContainer.className = 'acrylic-blur-container';
  blurContainer.style.cssText = `
    position: absolute;
    top: ${maskSettings.positioning.top};
    bottom: ${maskSettings.positioning.bottom};
    left: ${maskSettings.positioning.left};
    right: ${maskSettings.positioning.right};
    width: ${maskSettings.positioning.width};
    height: ${maskSettings.positioning.height};
    z-index: 1;
  `;
  
  // Create multiple blur divs like progressive-blur.js
  const layers = maskSettings.layers;
  const maxBlur = blurConfig.maxBlur;
  
  // Generate exponential blur values
  const blurValues = Array.from({ length: layers }, (_, i) => {
    const step = maxBlur / (layers - 1);
    return Math.pow(2, i) * (step / Math.pow(2, layers - 1));
  });
  
  // Create gradient steps with curve
  const gradientSteps = Array.from({ length: layers }, (_, i) => {
    const t = i / (layers - 1);
    const curvedT = applyCurve(t, blurConfig.curve);
    const start = curvedT * 100;
    const nextT = (i + 1) / (layers - 1);
    const curvedNextT = applyCurve(Math.min(nextT, 1), blurConfig.curve);
    const end = curvedNextT * 100;
    return { start, end };
  });
  
  // Create each blur layer div
  blurValues.forEach((blur, i) => {
    const blurDiv = document.createElement('div');
    blurDiv.className = `acrylic-blur-layer-${i}`;
    
    // Calculate opacity for this layer
    const t = i / (layers - 1);
    const curvedT = applyCurve(t, blurConfig.curve);
    const opacity = blurConfig.startOpacity + (blurConfig.endOpacity - blurConfig.startOpacity) * curvedT;
    
    // Gradient mask for this specific layer
    const maskImage = `linear-gradient(
      ${maskSettings.gradientDir},
      rgba(0, 0, 0, ${blurConfig.startOpacity}) ${gradientSteps[i].start}%,
      rgba(0, 0, 0, ${blurConfig.endOpacity}) ${gradientSteps[i].end}%
    )`;
    
    blurDiv.style.cssText = `
      position: absolute;
      inset: 0;
      backdrop-filter: blur(${blur}px);
      -webkit-backdrop-filter: blur(${blur}px);
      mask: ${maskImage};
      -webkit-mask: ${maskImage};
      z-index: ${i + 1};
    `;
    
    blurContainer.appendChild(blurDiv);
  });
  
  return blurContainer;
}

function createLuminosityLayer(lumConfig, maskSettings) {
  const lumLayer = document.createElement('div');
  lumLayer.className = 'acrylic-luminosity-layer';
  lumLayer.style.cssText = `
    position: absolute;
    top: ${maskSettings.positioning.top};
    bottom: ${maskSettings.positioning.bottom};
    left: ${maskSettings.positioning.left};
    right: ${maskSettings.positioning.right};
    width: ${maskSettings.positioning.width};
    height: ${maskSettings.positioning.height};
    z-index: 2;
    backdrop-filter: brightness(${lumConfig.brightness}) contrast(${lumConfig.contrast}) saturate(${lumConfig.saturate});
    opacity: ${lumConfig.opacity};
    mix-blend-mode: ${lumConfig.blendMode};
    mask: ${maskSettings.maskGradient};
    -webkit-mask: ${maskSettings.maskGradient};
  `;
  
  return lumLayer;
}

function createTintLayer(tintConfig, maskSettings) {
  const tintLayer = document.createElement('div');
  tintLayer.className = 'acrylic-tint-layer';
  
  // Determine background style - gradient or solid color
  let backgroundStyle;
  if (tintConfig.gradient) {
    // Linear gradient support with individual opacity
    const { direction, colors } = tintConfig.gradient;
    const gradientColors = colors.map((color, i) => {
      if (typeof color === 'string') {
        return color;
      } else if (color.color && color.stop !== undefined) {
        // Convert hex to rgba if opacity is specified
        if (color.opacity !== undefined) {
          const hex = color.color.replace('#', '');
          const r = parseInt(hex.substr(0, 2), 16);
          const g = parseInt(hex.substr(2, 2), 16);
          const b = parseInt(hex.substr(4, 2), 16);
          return `rgba(${r}, ${g}, ${b}, ${color.opacity}) ${color.stop}%`;
        } else {
          return `${color.color} ${color.stop}%`;
        }
      }
      return color;
    }).join(', ');
    
    backgroundStyle = `linear-gradient(${direction || 'to bottom'}, ${gradientColors})`;
  } else {
    // Solid color
    backgroundStyle = tintConfig.color;
  }
  
  tintLayer.style.cssText = `
    position: absolute;
    top: ${maskSettings.positioning.top};
    bottom: ${maskSettings.positioning.bottom};
    left: ${maskSettings.positioning.left};
    right: ${maskSettings.positioning.right};
    width: ${maskSettings.positioning.width};
    height: ${maskSettings.positioning.height};
    z-index: 3;
    background: ${backgroundStyle};
    opacity: ${tintConfig.opacity};
    mix-blend-mode: ${tintConfig.blendMode};
    mask: ${maskSettings.maskGradient};
    -webkit-mask: ${maskSettings.maskGradient};
  `;
  
  return tintLayer;
}

function createNoiseLayer(noiseConfig, maskSettings) {
  const noiseLayer = document.createElement('div');
  noiseLayer.className = 'acrylic-noise-layer';
  
  // Noise patterns - base64 encoded PNGs
  const noisePatterns = {
    default: 'data:image/png;base64,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'
  };
  
  const selectedPattern = noisePatterns.default;
  
  noiseLayer.style.cssText = `
    position: absolute;
    top: ${maskSettings.positioning.top};
    bottom: ${maskSettings.positioning.bottom};
    left: ${maskSettings.positioning.left};
    right: ${maskSettings.positioning.right};
    width: ${maskSettings.positioning.width};
    height: ${maskSettings.positioning.height};
    z-index: 4;
    background-image: url(${selectedPattern});
    opacity: ${noiseConfig.opacity};
    mix-blend-mode: ${noiseConfig.blendMode};
    mask: ${maskSettings.maskGradient};
    -webkit-mask: ${maskSettings.maskGradient};
    pointer-events: none;
  `;
  
  return noiseLayer;
}

function applyCurve(progress, curve) {
  if (Array.isArray(curve) && curve.length === 4) {
    return cubicBezier(progress, curve[0], curve[1], curve[2], curve[3]);
  }
  
  switch(curve) {
    case 'ease-in': return progress * progress;
    case 'ease-out': return 1 - Math.pow(1 - progress, 2);
    case 'ease-in-out': return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    case 'exponential': return Math.pow(progress, 3);
    default: return progress; // linear
  }
}

function cubicBezier(t, x1, y1, x2, y2) {
  // Simplified cubic bezier implementation
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  
  function sampleCurveX(t) {
    return ((ax * t + bx) * t + cx) * t;
  }
  
  function sampleCurveY(t) {
    return ((ay * t + by) * t + cy) * t;
  }
  
  function solveCurveX(x) {
    let t0, t1, t2, x2, d2;
    for (t2 = x, t0 = 0, t1 = 1; t0 < t1;) {
      x2 = sampleCurveX(t2);
      if (Math.abs(x2 - x) < 0.000001) return t2;
      if (x > x2) t0 = t2;
      else t1 = t2;
      t2 = (t1 - t0) * 0.5 + t0;
    }
    return t2;
  }
  
  return sampleCurveY(solveCurveX(t));
}

function clearAcrylicLayers(target) {
  const existing = target.querySelector('.acrylic-container');
  if (existing) {
    existing.remove();
  }
}

function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Preset configurations
const acrylicPresets = {
  'ios-default': {
    blur: { enabled: true, maxBlur: 40, layers: 8 },
    luminosity: { enabled: true, brightness: 1.1, contrast: 1.05, saturate: 1.2, opacity: 0.8 },
    tint: { enabled: true, color: '#ffffff', opacity: 0.1, blendMode: 'overlay' },
    noise: { enabled: false, opacity: 0.2, blendMode: 'multiply' }
  },
  
  'windows-acrylic': {
    blur: { enabled: true, maxBlur: 30, layers: 6 },
    luminosity: { enabled: true, brightness: 1.05, contrast: 1.1, saturate: 1.1, opacity: 0.9 },
    tint: { enabled: true, color: '#ffffff', opacity: 0.15, blendMode: 'normal' },
    noise: { enabled: true, opacity: 0.15, blendMode: 'multiply' }
  },
  
  'glass-morphism': {
    blur: { enabled: true, maxBlur: 25, layers: 8 },
    luminosity: { enabled: true, brightness: 1.2, contrast: 1.1, saturate: 1.3, opacity: 0.7 },
    tint: { enabled: true, color: '#ffffff', opacity: 0.2, blendMode: 'overlay' },
    noise: { enabled: true, opacity: 0.25, blendMode: 'overlay' }
  },
  
  'gradient-tint': {
    blur: { enabled: true, maxBlur: 40, layers: 8 },
    luminosity: { enabled: true, brightness: 1.1, contrast: 1.05, saturate: 1.2, opacity: 0.8 },
    tint: { 
      enabled: true, 
      gradient: {
        direction: 'to bottom',
        colors: ['rgba(255, 255, 255, 0.3)', 'rgba(100, 149, 237, 0.2)']
      },
      opacity: 1, 
      blendMode: 'overlay' 
    },
    noise: { enabled: true, opacity: 0.3, blendMode: 'multiply' }
  }
};

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { progressiveAcrylic, acrylicPresets };
} 