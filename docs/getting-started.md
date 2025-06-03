# Getting Started Guide

Welcome to Progressive Acrylic! This guide will walk you through creating your first acrylic effect from scratch.

## 🎯 What You'll Learn

- How to set up the basic HTML structure
- Create your first acrylic effect
- Understand the layer system
- Customize effects for different styles
- Common patterns and best practices

## 📋 Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A modern browser (Chrome 76+, Firefox 103+, Safari 14+, Edge 79+)
- Progressive Acrylic installed ([Installation Guide](installation.md))

## 🚀 Your First Acrylic Effect

### Step 1: HTML Structure

Create a basic HTML file with the required structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Acrylic Effect</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f0f0f0;
        }
        
        .demo-container {
            position: relative;
            width: 600px;
            height: 400px;
            margin: 0 auto;
            background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop');
            background-size: cover;
            background-position: center;
            border-radius: 12px;
            overflow: hidden;
        }
        
        .blur-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .content {
            position: relative;
            z-index: 10;
            padding: 30px;
            color: white;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
    </style>
</head>
<body>
    <h1>Progressive Acrylic Demo</h1>
    
    <div class="demo-container">
        <div class="blur-overlay" id="acrylicEffect"></div>
        <div class="content">
            <h2>Beautiful Acrylic Effect</h2>
            <p>This text sits on top of a progressive blur background.</p>
        </div>
    </div>
    
    <script src="progressive-acrylic.js"></script>
    <script>
        // Your JavaScript code will go here
    </script>
</body>
</html>
```

### Step 2: Basic Acrylic Effect

Add this JavaScript to create your first acrylic effect:

```javascript
// Get the element
const acrylicElement = document.getElementById('acrylicEffect');

// Create a basic acrylic effect
progressiveAcrylic(acrylicElement, {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '60%',
        direction: 'bottom'
    }
});
```

🎉 **Congratulations!** You now have a working acrylic effect.

### Step 3: Add Color Tinting

Enhance your effect with a color tint:

```javascript
progressiveAcrylic(acrylicElement, {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '60%',
        direction: 'bottom'
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.15,
        blendMode: 'overlay'
    }
});
```

### Step 4: Add Luminosity Enhancement

Make the effect more vibrant with luminosity adjustments:

```javascript
progressiveAcrylic(acrylicElement, {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '60%',
        direction: 'bottom'
    },
    luminosity: {
        enabled: true,
        brightness: 1.2,
        contrast: 1.1,
        saturate: 1.3,
        opacity: 0.8
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.15,
        blendMode: 'overlay'
    }
});
```

## 🎨 Understanding the Layer System

Progressive Acrylic uses a 4-layer system stacked from bottom to top:

### 1. Blur Layer (Foundation)
```javascript
blur: {
    enabled: true,        // Turn on/off
    maxBlur: 150,        // Blur intensity (0-1000px)
    height: '60%',       // Area coverage
    direction: 'bottom', // Fade direction
    layers: 8,           // Smoothness (3-20)
    curve: [0.25, 0.46, 0.45, 0.94] // Feathering curve
}
```

### 2. Luminosity Layer (Color Enhancement)
```javascript
luminosity: {
    enabled: true,
    brightness: 1.2,     // Brightness boost
    contrast: 1.1,       // Contrast enhancement
    saturate: 1.3,       // Color saturation
    opacity: 0.8,        // Layer strength
    blendMode: 'normal'  // How it mixes
}
```

### 3. Tint Layer (Color Overlay)
```javascript
tint: {
    enabled: true,
    color: '#ffffff',    // Overlay color
    opacity: 0.15,       // Transparency
    blendMode: 'overlay' // Blending mode
}
```

### 4. Noise Layer (Texture)
```javascript
noise: {
    enabled: true,
    opacity: 0.3,        // Texture visibility
    blendMode: 'multiply' // How texture blends
}
```

## 🎯 Common Patterns

### iOS-Style Effect
```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 200,
        height: '50%',
        direction: 'bottom',
        curve: [0.25, 0.46, 0.45, 0.94] // iOS curve
    },
    luminosity: {
        enabled: true,
        brightness: 1.1,
        contrast: 1.05,
        saturate: 1.2,
        opacity: 0.8
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.1,
        blendMode: 'overlay'
    }
});
```

### Windows Acrylic Style
```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 200,
        height: '100%',
        direction: 'bottom',
        startOpacity: 1,
        endOpacity: 1
    },
    luminosity: {
        enabled: true,
        brightness: 1.1,
        contrast: 1.0,
        saturate: 1.2,
        opacity: 1
    },
    noise: {
        enabled: true,
        opacity: 1,
        blendMode: 'overlay'
    }
});
```

### Glass Morphism Effect
```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 300,
        height: '33%',
        direction: 'bottom',
        layers: 3,
        curve: [0.09, 0.93, 0.7, 0.01]
    }
});
```

## 🎛️ Interactive Controls

Create a simple control panel to experiment with settings:

```html
<div class="controls">
    <label>
        Blur Amount: 
        <input type="range" id="blurRange" min="0" max="300" value="150">
        <span id="blurValue">150</span>px
    </label>
    
    <label>
        Height: 
        <input type="range" id="heightRange" min="10" max="100" value="60">
        <span id="heightValue">60</span>%
    </label>
    
    <label>
        Tint Color: 
        <input type="color" id="tintColor" value="#ffffff">
    </label>
</div>
```

```javascript
let acrylicInstance = progressiveAcrylic(acrylicElement, {
    blur: { enabled: true, maxBlur: 150, height: '60%' },
    tint: { enabled: true, color: '#ffffff', opacity: 0.15 }
});

// Update blur amount
document.getElementById('blurRange').addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    document.getElementById('blurValue').textContent = value;
    
    acrylicInstance.update({
        blur: { maxBlur: value }
    });
});

// Update height
document.getElementById('heightRange').addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    document.getElementById('heightValue').textContent = value;
    
    acrylicInstance.update({
        blur: { height: `${value}%` }
    });
});

// Update tint color
document.getElementById('tintColor').addEventListener('input', (e) => {
    acrylicInstance.update({
        tint: { color: e.target.value }
    });
});
```

## 🔧 Customization Tips

### 1. Adjusting Blur Intensity
- **Light blur**: `maxBlur: 50-100`
- **Medium blur**: `maxBlur: 100-200`
- **Heavy blur**: `maxBlur: 200-400`

### 2. Controlling Coverage Area
- **Small overlay**: `height: '20-30%'`
- **Medium overlay**: `height: '40-60%'`
- **Full overlay**: `height: '80-100%'`

### 3. Direction and Position
```javascript
// Top blur (like iOS navigation bar)
{ direction: 'top', position: 'top', height: '25%' }

// Bottom blur (like iOS tab bar)
{ direction: 'bottom', position: 'bottom', height: '30%' }

// Side blur
{ direction: 'left', height: '100%' }
```

### 4. Curve Customization
```javascript
// Gentle curve
curve: [0.25, 0.46, 0.45, 0.94]

// Sharp transition
curve: [0.7, 0, 0.84, 0]

// Bounce effect
curve: [0.68, -0.55, 0.265, 1.55]
```

## 🚨 Common Issues and Solutions

### Issue: Blur not appearing
**Solution**: Check browser support and element positioning
```javascript
// Check support
if (!CSS.supports('backdrop-filter', 'blur(1px)')) {
    console.log('Backdrop-filter not supported');
}

// Check positioning
const element = document.getElementById('acrylicEffect');
const styles = getComputedStyle(element.parentElement);
console.log('Parent position:', styles.position); // Should not be 'static'
```

### Issue: Poor performance
**Solution**: Reduce layer count and blur amount
```javascript
// Instead of this (heavy)
blur: { layers: 15, maxBlur: 500 }

// Use this (optimized)
blur: { layers: 6, maxBlur: 200 }
```

### Issue: Effect too subtle
**Solution**: Increase contrast and opacity
```javascript
luminosity: {
    enabled: true,
    brightness: 1.3,
    contrast: 1.2,
    opacity: 1.0
},
tint: {
    enabled: true,
    opacity: 0.25  // Increase from 0.1
}
```

## 📱 Responsive Design

Make your acrylic effects work on all devices:

```css
.demo-container {
    width: 100%;
    max-width: 600px;
    height: 400px;
}

@media (max-width: 768px) {
    .demo-container {
        height: 300px;
        margin: 0 10px;
    }
    
    .content {
        padding: 20px;
    }
}
```

```javascript
// Adjust blur for smaller screens
const isMobile = window.innerWidth < 768;

progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: isMobile ? 100 : 200,  // Less blur on mobile
        layers: isMobile ? 4 : 8,       // Fewer layers on mobile
        height: '50%'
    }
});
```

## ✅ Next Steps

Now that you've mastered the basics, explore these advanced topics:

- **[API Reference](api-reference.md)** - Complete function documentation
- **[Examples Gallery](examples.md)** - More complex implementations
- **[Custom Effects](custom-effects.md)** - Create unique styles

## 🎮 Interactive Demo

Try the [Live Editor](../acrylic-editor.html) to experiment with all settings in real-time and copy the generated code for your projects.

---

*Having trouble? Check our documentation or see the [API Reference](api-reference.md) for detailed options.* 