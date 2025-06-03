# Custom Effects Guide

Learn how to create unique and advanced acrylic effects with Progressive Acrylic. This guide covers advanced techniques, custom styling, and creative implementations.

## Table of Contents

- [Understanding Layer Combinations](#understanding-layer-combinations)
- [Advanced Curve Techniques](#advanced-curve-techniques)
- [Creative Gradient Effects](#creative-gradient-effects)
- [Dynamic Effects](#dynamic-effects)
- [Interactive Animations](#interactive-animations)
- [Platform-Specific Styles](#platform-specific-styles)
- [Performance Optimization](#performance-optimization)

## Understanding Layer Combinations

### Layer Stacking Order

Progressive Acrylic layers are stacked from bottom to top in this order:

1. **Blur Layer** (foundation)
2. **Luminosity Layer** (color enhancement)
3. **Tint Layer** (color overlay)
4. **Noise Layer** (texture on top)

Understanding this order is crucial for creating the right visual effect.

### Minimal Glass Effect

Create a subtle, modern glass look with minimal layers:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 80,
        height: '100%',
        direction: 'bottom',
        layers: 4,
        startOpacity: 1,
        endOpacity: 1
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.05,
        blendMode: 'normal'
    }
});
```

### Heavy Acrylic Material

Create a more pronounced, Microsoft Windows-style acrylic:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 300,
        height: '100%',
        direction: 'bottom',
        layers: 12,
        startOpacity: 1,
        endOpacity: 1
    },
    luminosity: {
        enabled: true,
        brightness: 1.2,
        contrast: 1.1,
        saturate: 1.3,
        opacity: 1
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.15,
        blendMode: 'overlay'
    },
    noise: {
        enabled: true,
        opacity: 0.8,
        blendMode: 'overlay'
    }
});
```

### Frosted Glass Extreme

Create an ultra-frosted appearance:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 500,
        height: '100%',
        direction: 'bottom',
        layers: 16,
        startOpacity: 1,
        endOpacity: 1
    },
    luminosity: {
        enabled: true,
        brightness: 1.4,
        contrast: 0.8,
        saturate: 0.7,
        opacity: 0.9
    },
    tint: {
        enabled: true,
        color: '#f8f9fa',
        opacity: 0.3,
        blendMode: 'normal'
    }
});
```

## Advanced Curve Techniques

### Custom Bezier Curves

Create unique blur distribution patterns using cubic-bezier curves:

#### Sharp Edge Effect
```javascript
blur: {
    enabled: true,
    maxBlur: 200,
    height: '60%',
    direction: 'bottom',
    curve: [0.12, 0, 0.39, 0] // Sharp start, linear end
}
```

#### Bounce Effect
```javascript
blur: {
    enabled: true,
    maxBlur: 200,
    height: '60%',
    direction: 'bottom',
    curve: [0.68, -0.55, 0.265, 1.55] // Overshoot and settle
}
```

#### S-Curve Effect
```javascript
blur: {
    enabled: true,
    maxBlur: 200,
    height: '60%',
    direction: 'bottom',
    curve: [0.37, 0, 0.63, 1] // Smooth S-curve
}
```

#### Extreme Ease-In
```javascript
blur: {
    enabled: true,
    maxBlur: 200,
    height: '60%',
    direction: 'bottom',
    curve: [0.9, 0.03, 0.69, 0.22] // Very slow start
}
```

### Multi-Stage Curves

Create complex blur patterns by combining multiple elements:

```javascript
// Top element with sharp curve
progressiveAcrylic(topElement, {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '40%',
        direction: 'top',
        position: 'top',
        curve: [0.12, 0, 0.39, 0]
    }
});

// Bottom element with smooth curve
progressiveAcrylic(bottomElement, {
    blur: {
        enabled: true,
        maxBlur: 200,
        height: '40%',
        direction: 'bottom',
        position: 'bottom',
        curve: [0.25, 0.46, 0.45, 0.94]
    }
});
```

## Creative Gradient Effects

### Rainbow Gradient Tint

Create colorful, vibrant effects:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 200,
        height: '80%',
        direction: 'bottom'
    },
    tint: {
        enabled: true,
        gradient: {
            direction: 'to bottom right',
            colors: [
                { color: '#ff6b6b', stop: 0, opacity: 0.4 },
                { color: '#4ecdc4', stop: 25, opacity: 0.3 },
                { color: '#45b7d1', stop: 50, opacity: 0.3 },
                { color: '#f9ca24', stop: 75, opacity: 0.3 },
                { color: '#f0932b', stop: 100, opacity: 0.4 }
            ]
        },
        opacity: 1,
        blendMode: 'overlay'
    }
});
```

### Sunset Gradient

Create warm, atmospheric effects:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 250,
        height: '70%',
        direction: 'bottom'
    },
    tint: {
        enabled: true,
        gradient: {
            direction: 'to bottom',
            colors: [
                { color: '#ff7675', stop: 0, opacity: 0.5 },
                { color: '#fd79a8', stop: 30, opacity: 0.4 },
                { color: '#fdcb6e', stop: 70, opacity: 0.3 },
                { color: '#e84393', stop: 100, opacity: 0.6 }
            ]
        },
        opacity: 1,
        blendMode: 'multiply'
    },
    luminosity: {
        enabled: true,
        brightness: 1.1,
        contrast: 1.2,
        saturate: 1.4,
        opacity: 0.8
    }
});
```

### Ocean Depth Effect

Create cool, deep water-like effects:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 300,
        height: '90%',
        direction: 'bottom',
        layers: 10
    },
    tint: {
        enabled: true,
        gradient: {
            direction: 'to bottom',
            colors: [
                { color: '#74b9ff', stop: 0, opacity: 0.2 },
                { color: '#0984e3', stop: 40, opacity: 0.4 },
                { color: '#2d3436', stop: 80, opacity: 0.6 },
                { color: '#000000', stop: 100, opacity: 0.8 }
            ]
        },
        opacity: 1,
        blendMode: 'multiply'
    },
    luminosity: {
        enabled: true,
        brightness: 0.9,
        contrast: 1.3,
        saturate: 1.2,
        opacity: 0.9
    }
});
```

### Holographic Effect

Create iridescent, holographic-style effects:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '60%',
        direction: 'bottom'
    },
    tint: {
        enabled: true,
        gradient: {
            direction: '45deg',
            colors: [
                { color: '#ff0080', stop: 0, opacity: 0.3 },
                { color: '#00ff80', stop: 20, opacity: 0.2 },
                { color: '#8000ff', stop: 40, opacity: 0.3 },
                { color: '#ff8000', stop: 60, opacity: 0.2 },
                { color: '#0080ff', stop: 80, opacity: 0.3 },
                { color: '#ff0040', stop: 100, opacity: 0.3 }
            ]
        },
        opacity: 1,
        blendMode: 'screen'
    },
    luminosity: {
        enabled: true,
        brightness: 1.3,
        contrast: 1.4,
        saturate: 2.0,
        opacity: 0.7
    }
});
```

## Dynamic Effects

### Time-Based Color Shifting

Create effects that change over time:

```javascript
let hue = 0;
const element = document.getElementById('dynamic-element');

function updateDynamicEffect() {
    hue = (hue + 1) % 360;
    const color = `hsl(${hue}, 70%, 60%)`;
    
    progressiveAcrylic(element, {
        blur: {
            enabled: true,
            maxBlur: 200,
            height: '60%',
            direction: 'bottom'
        },
        tint: {
            enabled: true,
            color: color,
            opacity: 0.3,
            blendMode: 'overlay'
        }
    });
}

// Update every 100ms for smooth animation
setInterval(updateDynamicEffect, 100);
```

### Breathing Effect

Create a "breathing" blur intensity:

```javascript
let intensity = 100;
let increasing = true;
const element = document.getElementById('breathing-element');

function breathingEffect() {
    if (increasing) {
        intensity += 2;
        if (intensity >= 300) increasing = false;
    } else {
        intensity -= 2;
        if (intensity <= 100) increasing = true;
    }
    
    const acrylic = progressiveAcrylic(element, {
        blur: {
            enabled: true,
            maxBlur: intensity,
            height: '60%',
            direction: 'bottom'
        },
        tint: {
            enabled: true,
            color: '#ffffff',
            opacity: intensity / 1000, // Opacity changes with blur
            blendMode: 'overlay'
        }
    });
}

setInterval(breathingEffect, 50);
```

### Mouse-Responsive Effects

Create effects that respond to mouse position:

```javascript
const container = document.getElementById('responsive-container');
const element = document.getElementById('responsive-element');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Convert mouse position to blur intensity
    const maxBlur = 100 + (x * 200); // 100-300 based on X
    const opacity = 0.1 + (y * 0.4); // 0.1-0.5 based on Y
    
    progressiveAcrylic(element, {
        blur: {
            enabled: true,
            maxBlur: maxBlur,
            height: '60%',
            direction: 'bottom'
        },
        tint: {
            enabled: true,
            color: `hsl(${x * 360}, 70%, 60%)`, // Hue based on X
            opacity: opacity,
            blendMode: 'overlay'
        }
    });
});
```

## Interactive Animations

### Hover State Transitions

Create smooth transitions on hover:

```javascript
const element = document.getElementById('hover-element');
let acrylicInstance = null;

// Initial state
acrylicInstance = progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 100,
        height: '40%',
        direction: 'bottom'
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.1,
        blendMode: 'overlay'
    }
});

// Hover state
element.addEventListener('mouseenter', () => {
    acrylicInstance.update({
        blur: { maxBlur: 250, height: '70%' },
        tint: { opacity: 0.3 },
        luminosity: {
            enabled: true,
            brightness: 1.2,
            contrast: 1.1,
            saturate: 1.3,
            opacity: 0.8
        }
    });
});

// Leave state
element.addEventListener('mouseleave', () => {
    acrylicInstance.update({
        blur: { maxBlur: 100, height: '40%' },
        tint: { opacity: 0.1 },
        luminosity: { enabled: false }
    });
});
```

### Click Ripple Effect

Create expanding blur effects on click:

```javascript
const element = document.getElementById('ripple-element');
let baseEffect = null;

// Base effect
baseEffect = progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '50%',
        direction: 'bottom'
    }
});

element.addEventListener('click', () => {
    // Temporary intense effect
    baseEffect.update({
        blur: { maxBlur: 400, height: '90%' },
        luminosity: {
            enabled: true,
            brightness: 1.5,
            contrast: 1.3,
            saturate: 1.5,
            opacity: 1
        }
    });
    
    // Return to normal after 300ms
    setTimeout(() => {
        baseEffect.update({
            blur: { maxBlur: 150, height: '50%' },
            luminosity: { enabled: false }
        });
    }, 300);
});
```

### Scroll-Based Effects

Create effects that change based on scroll position:

```javascript
const element = document.getElementById('scroll-element');
let acrylicInstance = null;

acrylicInstance = progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 50,
        height: '30%',
        direction: 'bottom'
    }
});

window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const maxBlur = 50 + (scrollPercent * 250); // 50-300 based on scroll
    const height = 30 + (scrollPercent * 50); // 30%-80% based on scroll
    
    acrylicInstance.update({
        blur: {
            maxBlur: maxBlur,
            height: `${height}%`
        },
        tint: {
            enabled: true,
            color: '#000000',
            opacity: scrollPercent * 0.4, // Darker as you scroll
            blendMode: 'multiply'
        }
    });
});
```

## Platform-Specific Styles

### iOS 15+ Style

Modern iOS interface style:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 200,
        height: '50%',
        direction: 'bottom',
        layers: 8,
        curve: [0.25, 0.46, 0.45, 0.94]
    },
    luminosity: {
        enabled: true,
        brightness: 1.1,
        contrast: 1.05,
        saturate: 1.2,
        opacity: 0.8,
        blendMode: 'normal'
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.1,
        blendMode: 'overlay'
    }
});
```

### Windows 11 Acrylic

Modern Windows acrylic material:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 200,
        height: '100%',
        direction: 'bottom',
        layers: 10,
        startOpacity: 1,
        endOpacity: 1
    },
    luminosity: {
        enabled: true,
        brightness: 1.1,
        contrast: 1.0,
        saturate: 1.2,
        opacity: 1,
        blendMode: 'normal'
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.05,
        blendMode: 'normal'
    },
    noise: {
        enabled: true,
        opacity: 1,
        blendMode: 'overlay'
    }
});
```

### macOS Big Sur Style

Clean macOS interface style:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 180,
        height: '100%',
        direction: 'bottom',
        layers: 6,
        startOpacity: 1,
        endOpacity: 1
    },
    luminosity: {
        enabled: true,
        brightness: 1.15,
        contrast: 1.02,
        saturate: 1.1,
        opacity: 0.9,
        blendMode: 'normal'
    },
    tint: {
        enabled: true,
        color: '#f5f5f7',
        opacity: 0.2,
        blendMode: 'normal'
    }
});
```

### Android Material You

Google's Material You design:

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 120,
        height: '60%',
        direction: 'bottom',
        layers: 5,
        curve: [0.4, 0, 0.2, 1] // Material motion curve
    },
    luminosity: {
        enabled: true,
        brightness: 1.05,
        contrast: 1.1,
        saturate: 1.3,
        opacity: 0.85,
        blendMode: 'normal'
    },
    tint: {
        enabled: true,
        color: '#1976d2', // Material blue
        opacity: 0.15,
        blendMode: 'overlay'
    }
});
```

## Performance Optimization

### Reduced Layer Count

For better performance on lower-end devices:

```javascript
// Instead of this (heavy)
blur: {
    enabled: true,
    maxBlur: 300,
    layers: 15,
    height: '80%'
}

// Use this (optimized)
blur: {
    enabled: true,
    maxBlur: 200,
    layers: 5,
    height: '60%'
}
```

### Conditional Effects

Apply different effects based on device capabilities:

```javascript
const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isLowEnd = navigator.hardwareConcurrency < 4;

const optimizedOptions = {
    blur: {
        enabled: true,
        maxBlur: isMobile ? 100 : 200,
        layers: isLowEnd ? 3 : 8,
        height: '50%',
        direction: 'bottom'
    },
    luminosity: {
        enabled: !isLowEnd, // Disable on low-end devices
        brightness: 1.1,
        contrast: 1.05,
        saturate: 1.1,
        opacity: 0.8
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: isMobile ? 0.05 : 0.1, // Less opacity on mobile
        blendMode: 'overlay'
    },
    noise: {
        enabled: !isMobile // Disable noise on mobile
    }
};

progressiveAcrylic(element, optimizedOptions);
```

### Debounced Updates

Optimize dynamic effects with debouncing:

```javascript
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedUpdate = debounce((element, options) => {
    progressiveAcrylic(element, options);
}, 16); // ~60fps

// Use debounced function for smooth animations
window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / document.body.scrollHeight;
    debouncedUpdate(element, {
        blur: { maxBlur: 100 + scrollPercent * 100 }
    });
});
```

---

*Ready to experiment? Try the [Interactive Editor](../acrylic-editor.html) to test these custom effects in real-time.* 