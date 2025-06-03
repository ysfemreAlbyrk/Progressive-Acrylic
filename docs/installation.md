# Installation Guide

This guide covers all the ways you can install and set up Progressive Acrylic in your project.

## 📦 Installation Methods

### NPM Installation (Recommended)

```bash
npm install progressive-acrylic
```

### Yarn Installation

```bash
yarn add progressive-acrylic
```

### CDN Installation

For quick prototyping or simple projects, you can include Progressive Acrylic directly from a CDN:

```html
<!-- Latest version -->
<script src="https://unpkg.com/progressive-acrylic@latest/progressive-acrylic.js"></script>

<!-- Specific version (recommended for production) -->
<script src="https://unpkg.com/progressive-acrylic@2.0.0/progressive-acrylic.js"></script>
```

### Download & Host Yourself

1. Download the latest release from [GitHub Releases](https://github.com/your-username/progressive-acrylic/releases)
2. Extract the files to your project directory
3. Include the script in your HTML:

```html
<script src="path/to/progressive-acrylic.js"></script>
```

## 🔧 Setup & Basic Usage

### HTML Structure

Progressive Acrylic requires a specific HTML structure to work properly:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progressive Acrylic Demo</title>
    <style>
        .container {
            position: relative;
            width: 100%;
            height: 400px;
            background-image: url('your-background-image.jpg');
            background-size: cover;
            background-position: center;
        }
        
        .blur-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="blur-overlay" id="acrylicElement"></div>
        <!-- Your content here -->
    </div>
    
    <script src="progressive-acrylic.js"></script>
    <script>
        progressiveAcrylic(document.getElementById('acrylicElement'), {
            blur: {
                enabled: true,
                maxBlur: 200,
                height: '50%'
            }
        });
    </script>
</body>
</html>
```

### Module Import (ES6)

If you're using a module bundler like Webpack, Rollup, or Vite:

```javascript
import { progressiveAcrylic } from 'progressive-acrylic';

// Apply effect
progressiveAcrylic(document.getElementById('myElement'), {
    blur: { enabled: true, maxBlur: 150 }
});
```

### CommonJS Import (Node.js)

```javascript
const { progressiveAcrylic } = require('progressive-acrylic');

progressiveAcrylic(element, options);
```

## ⚙️ Framework Integration

### React Integration

```jsx
import React, { useEffect, useRef } from 'react';
import { progressiveAcrylic } from 'progressive-acrylic';

function AcrylicComponent() {
    const acrylicRef = useRef(null);
    
    useEffect(() => {
        if (acrylicRef.current) {
            const acrylic = progressiveAcrylic(acrylicRef.current, {
                blur: { enabled: true, maxBlur: 200 },
                tint: { enabled: true, color: '#ffffff', opacity: 0.1 }
            });
            
            // Cleanup on unmount
            return () => acrylic.destroy();
        }
    }, []);
    
    return (
        <div className="container">
            <div ref={acrylicRef} className="blur-overlay" />
            <h1>Content with acrylic background</h1>
        </div>
    );
}
```

### Vue 3 Integration

```vue
<template>
    <div class="container">
        <div ref="acrylicElement" class="blur-overlay"></div>
        <h1>Content with acrylic background</h1>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { progressiveAcrylic } from 'progressive-acrylic';

const acrylicElement = ref(null);
let acrylicInstance = null;

onMounted(() => {
    acrylicInstance = progressiveAcrylic(acrylicElement.value, {
        blur: { enabled: true, maxBlur: 200 },
        tint: { enabled: true, color: '#ffffff', opacity: 0.1 }
    });
});

onUnmounted(() => {
    if (acrylicInstance) {
        acrylicInstance.destroy();
    }
});
</script>
```

### Angular Integration

```typescript
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { progressiveAcrylic } from 'progressive-acrylic';

@Component({
  selector: 'app-acrylic',
  template: `
    <div class="container">
      <div #acrylicElement class="blur-overlay"></div>
      <h1>Content with acrylic background</h1>
    </div>
  `
})
export class AcrylicComponent implements AfterViewInit, OnDestroy {
  @ViewChild('acrylicElement') acrylicElement!: ElementRef;
  private acrylicInstance: any;

  ngAfterViewInit() {
    this.acrylicInstance = progressiveAcrylic(this.acrylicElement.nativeElement, {
      blur: { enabled: true, maxBlur: 200 },
      tint: { enabled: true, color: '#ffffff', opacity: 0.1 }
    });
  }

  ngOnDestroy() {
    if (this.acrylicInstance) {
      this.acrylicInstance.destroy();
    }
  }
}
```

## 🎯 CSS Requirements

### Essential CSS

These CSS properties are required for Progressive Acrylic to work:

```css
/* Container element */
.acrylic-container {
    position: relative;
    background-image: url('your-image.jpg');
    background-size: cover;
    background-position: center;
}

/* Blur overlay element */
.blur-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

### Optional Enhancements

```css
/* Smooth transitions */
.blur-overlay {
    transition: opacity 0.3s ease;
}

/* Better visual integration */
.acrylic-container {
    border-radius: 8px;
    overflow: hidden;
}

/* Responsive design */
@media (max-width: 768px) {
    .acrylic-container {
        height: 300px;
    }
}
```

## 🌐 Browser Support

### Supported Browsers

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 76+ | Full support |
| Firefox | 103+ | Full support |
| Safari | 14+ | Full support |
| Edge | 79+ | Full support |

### Feature Detection

Progressive Acrylic automatically detects browser support and provides fallbacks:

```javascript
// Check if backdrop-filter is supported
if (CSS.supports('backdrop-filter', 'blur(1px)')) {
    // Apply full acrylic effect
    progressiveAcrylic(element, options);
} else {
    // Apply fallback styles
    element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
}
```

## 🔍 Verification

After installation, verify everything is working:

```javascript
// Check if library is loaded
if (typeof progressiveAcrylic !== 'undefined') {
    console.log('Progressive Acrylic loaded successfully!');
    
    // Test basic functionality
    const testElement = document.createElement('div');
    document.body.appendChild(testElement);
    
    try {
        const acrylic = progressiveAcrylic(testElement, {
            blur: { enabled: true, maxBlur: 50 }
        });
        console.log('Progressive Acrylic is working!');
        acrylic.destroy();
    } catch (error) {
        console.error('Progressive Acrylic error:', error);
    }
    
    document.body.removeChild(testElement);
} else {
    console.error('Progressive Acrylic not loaded');
}
```

## 🚨 Common Installation Issues

### Issue: "progressiveAcrylic is not defined"

**Solution**: Make sure the script is loaded before you try to use it:

```html
<!-- Wrong order -->
<script>progressiveAcrylic(element, options);</script>
<script src="progressive-acrylic.js"></script>

<!-- Correct order -->
<script src="progressive-acrylic.js"></script>
<script>progressiveAcrylic(element, options);</script>
```

### Issue: Blur effects not appearing

**Solution**: Check browser support and CSS requirements:

```javascript
// Check backdrop-filter support
console.log('Backdrop-filter supported:', CSS.supports('backdrop-filter', 'blur(1px)'));

// Check element positioning
const element = document.getElementById('yourElement');
const styles = getComputedStyle(element);
console.log('Position:', styles.position); // Should not be 'static'
```

### Issue: Performance problems

**Solution**: Reduce layer count or blur amount:

```javascript
// Instead of this (heavy)
progressiveAcrylic(element, {
    blur: { layers: 20, maxBlur: 500 }
});

// Use this (optimized)
progressiveAcrylic(element, {
    blur: { layers: 6, maxBlur: 200 }
});
```

## ✅ Next Steps

Now that you have Progressive Acrylic installed, check out:

- **[Getting Started Tutorial](getting-started.md)** - Build your first effect
- **[API Reference](api-reference.md)** - Explore all options
- **[Code Examples](examples.md)** - Ready-to-use snippets

---

*Need help? Check our documentation or [open an issue](https://github.com/your-username/progressive-acrylic/issues).* 