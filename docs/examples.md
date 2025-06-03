# Code Examples

Ready-to-use code snippets and implementation examples for Progressive Acrylic effects.

## Table of Contents

- [Basic Examples](#basic-examples)
- [Navigation Bars](#navigation-bars)
- [Cards and Panels](#cards-and-panels)
- [Modal Dialogs](#modal-dialogs)
- [Hero Sections](#hero-sections)
- [Mobile Interfaces](#mobile-interfaces)
- [Creative Effects](#creative-effects)
- [Framework Examples](#framework-examples)

## Basic Examples

### Simple Blur Overlay

```html
<div class="container">
    <div class="blur-overlay" id="simple-blur"></div>
    <div class="content">
        <h2>Simple Blur Effect</h2>
        <p>Clean and minimal progressive blur.</p>
    </div>
</div>
```

```css
.container {
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url('your-image.jpg');
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

.content {
    position: relative;
    z-index: 10;
    padding: 40px;
    color: white;
}
```

```javascript
progressiveAcrylic(document.getElementById('simple-blur'), {
    blur: {
        enabled: true,
        maxBlur: 120,
        height: '50%',
        direction: 'bottom'
    }
});
```

### iOS-Style Glass Effect

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

### Windows Acrylic Material

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
        opacity: 0.6,
        blendMode: 'overlay'
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.05,
        blendMode: 'normal'
    }
});
```

## Navigation Bars

### iOS-Style Navigation Bar

```html
<nav class="ios-navbar">
    <div class="navbar-blur" id="navbar-blur"></div>
    <div class="navbar-content">
        <button class="back-button">‹ Back</button>
        <h1 class="navbar-title">Settings</h1>
        <button class="action-button">Done</button>
    </div>
</nav>
```

```css
.ios-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 44px;
    z-index: 1000;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
}

.navbar-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.navbar-content {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 16px;
    color: #007AFF;
    font-weight: 600;
}

.navbar-title {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    color: #000;
}

.back-button, .action-button {
    background: none;
    border: none;
    color: #007AFF;
    font-size: 17px;
    cursor: pointer;
}
```

```javascript
progressiveAcrylic(document.getElementById('navbar-blur'), {
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
        brightness: 1.2,
        contrast: 1.0,
        saturate: 1.1,
        opacity: 0.9
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.8,
        blendMode: 'normal'
    }
});
```

### Modern Web Navigation

```html
<header class="modern-nav">
    <div class="nav-blur" id="nav-blur"></div>
    <div class="nav-content">
        <div class="logo">Brand</div>
        <nav class="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
</header>
```

```css
.modern-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    z-index: 1000;
    backdrop-filter: none; /* Will be handled by Progressive Acrylic */
}

.nav-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.nav-content {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: white;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;
}

.nav-links a:hover {
    opacity: 0.8;
}
```

```javascript
progressiveAcrylic(document.getElementById('nav-blur'), {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '100%',
        direction: 'bottom',
        startOpacity: 1,
        endOpacity: 1
    },
    tint: {
        enabled: true,
        color: '#000000',
        opacity: 0.3,
        blendMode: 'multiply'
    }
});
```

## Cards and Panels

### Glass Card

```html
<div class="card-container">
    <div class="glass-card">
        <div class="card-blur" id="card-blur"></div>
        <div class="card-content">
            <h3>Glass Card</h3>
            <p>Beautiful transparent card with acrylic background.</p>
            <button class="card-button">Learn More</button>
        </div>
    </div>
</div>
```

```css
.card-container {
    padding: 40px;
    background-image: url('your-background.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
}

.glass-card {
    position: relative;
    width: 350px;
    padding: 30px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.card-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.card-content {
    position: relative;
    z-index: 10;
    color: white;
}

.card-content h3 {
    margin: 0 0 15px 0;
    font-size: 24px;
    font-weight: 600;
}

.card-content p {
    margin: 0 0 20px 0;
    opacity: 0.9;
    line-height: 1.5;
}

.card-button {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.card-button:hover {
    background: rgba(255, 255, 255, 0.3);
}
```

```javascript
progressiveAcrylic(document.getElementById('card-blur'), {
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
        contrast: 1.05,
        saturate: 1.1,
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

### Dashboard Panel

```html
<div class="dashboard">
    <div class="panel">
        <div class="panel-blur" id="panel-blur"></div>
        <div class="panel-content">
            <h2>Analytics Overview</h2>
            <div class="stats">
                <div class="stat">
                    <span class="value">1,234</span>
                    <span class="label">Visitors</span>
                </div>
                <div class="stat">
                    <span class="value">89%</span>
                    <span class="label">Conversion</span>
                </div>
                <div class="stat">
                    <span class="value">$5,678</span>
                    <span class="label">Revenue</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

```css
.dashboard {
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.panel {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.panel-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.panel-content {
    position: relative;
    z-index: 10;
    padding: 30px;
    color: white;
}

.panel-content h2 {
    margin: 0 0 25px 0;
    font-size: 28px;
    font-weight: 600;
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.stat {
    text-align: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.value {
    display: block;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
}

.label {
    font-size: 14px;
    opacity: 0.8;
}
```

```javascript
progressiveAcrylic(document.getElementById('panel-blur'), {
    blur: {
        enabled: true,
        maxBlur: 250,
        height: '100%',
        direction: 'bottom',
        startOpacity: 1,
        endOpacity: 1
    },
    luminosity: {
        enabled: true,
        brightness: 1.0,
        contrast: 1.1,
        saturate: 1.0,
        opacity: 0.9
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.1,
        blendMode: 'overlay'
    }
});
```

## Modal Dialogs

### Confirmation Modal

```html
<div class="modal-overlay" id="modal-overlay">
    <div class="modal">
        <div class="modal-blur" id="modal-blur"></div>
        <div class="modal-content">
            <h3>Confirm Action</h3>
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            <div class="modal-actions">
                <button class="btn-cancel">Cancel</button>
                <button class="btn-confirm">Delete</button>
            </div>
        </div>
    </div>
</div>
```

```css
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.modal {
    position: relative;
    width: 400px;
    max-width: 90vw;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.modal-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modal-content {
    position: relative;
    z-index: 10;
    padding: 30px;
    color: white;
    text-align: center;
}

.modal-content h3 {
    margin: 0 0 15px 0;
    font-size: 20px;
    font-weight: 600;
}

.modal-content p {
    margin: 0 0 25px 0;
    opacity: 0.9;
    line-height: 1.5;
}

.modal-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.btn-cancel, .btn-confirm {
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-cancel {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-confirm {
    background: #ff4757;
    color: white;
}

.btn-cancel:hover {
    background: rgba(255, 255, 255, 0.2);
}

.btn-confirm:hover {
    background: #ff3742;
}
```

```javascript
progressiveAcrylic(document.getElementById('modal-blur'), {
    blur: {
        enabled: true,
        maxBlur: 300,
        height: '100%',
        direction: 'bottom',
        startOpacity: 1,
        endOpacity: 1
    },
    luminosity: {
        enabled: true,
        brightness: 1.1,
        contrast: 1.1,
        saturate: 1.0,
        opacity: 0.9
    },
    tint: {
        enabled: true,
        color: '#2c3e50',
        opacity: 0.3,
        blendMode: 'multiply'
    }
});
```

## Hero Sections

### Landing Page Hero

```html
<section class="hero">
    <div class="hero-blur" id="hero-blur"></div>
    <div class="hero-content">
        <h1>Welcome to the Future</h1>
        <p>Experience cutting-edge design with beautiful acrylic effects</p>
        <button class="cta-button">Get Started</button>
    </div>
</section>
```

```css
.hero {
    position: relative;
    height: 100vh;
    background-image: url('hero-background.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-content {
    position: relative;
    z-index: 10;
    max-width: 600px;
    padding: 0 20px;
    color: white;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin: 0 0 20px 0;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-content p {
    font-size: 1.3rem;
    margin: 0 0 30px 0;
    opacity: 0.9;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}

.cta-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 16px 32px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
    transform: translateY(-2px);
}
```

```javascript
progressiveAcrylic(document.getElementById('hero-blur'), {
    blur: {
        enabled: true,
        maxBlur: 100,
        height: '80%',
        direction: 'bottom',
        layers: 6
    },
    luminosity: {
        enabled: true,
        brightness: 0.8,
        contrast: 1.2,
        saturate: 1.1,
        opacity: 0.7
    },
    tint: {
        enabled: true,
        color: '#000000',
        opacity: 0.4,
        blendMode: 'multiply'
    }
});
```

## Mobile Interfaces

### iOS Control Center

```html
<div class="control-center">
    <div class="control-blur" id="control-blur"></div>
    <div class="control-grid">
        <div class="control-item">
            <div class="control-icon">📶</div>
            <span>Cellular Data</span>
        </div>
        <div class="control-item">
            <div class="control-icon">📶</div>
            <span>WiFi</span>
        </div>
        <div class="control-item">
            <div class="control-icon">🔵</div>
            <span>Bluetooth</span>
        </div>
        <div class="control-item">
            <div class="control-icon">✈️</div>
            <span>Airplane Mode</span>
        </div>
    </div>
</div>
```

```css
.control-center {
    position: relative;
    width: 300px;
    margin: 40px auto;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.control-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.control-grid {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: rgba(255, 255, 255, 0.1);
}

.control-item {
    padding: 30px 20px;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease;
    cursor: pointer;
}

.control-item:hover {
    background: rgba(255, 255, 255, 0.1);
}

.control-icon {
    font-size: 24px;
    margin-bottom: 8px;
}

.control-item span {
    font-size: 12px;
    font-weight: 500;
}
```

```javascript
progressiveAcrylic(document.getElementById('control-blur'), {
    blur: {
        enabled: true,
        maxBlur: 250,
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
        opacity: 0.9
    },
    tint: {
        enabled: true,
        color: '#ffffff',
        opacity: 0.15,
        blendMode: 'overlay'
    },
    noise: {
        enabled: true,
        opacity: 0.1,
        blendMode: 'multiply'
    }
});
```

## Creative Effects

### Gradient Tint Effect

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 200,
        height: '70%',
        direction: 'bottom'
    },
    tint: {
        enabled: true,
        gradient: {
            direction: 'to bottom',
            colors: [
                { color: '#ff6b6b', stop: 0, opacity: 0.3 },
                { color: '#4ecdc4', stop: 50, opacity: 0.2 },
                { color: '#45b7d1', stop: 100, opacity: 0.4 }
            ]
        },
        opacity: 1,
        blendMode: 'overlay'
    }
});
```

### Dynamic Curve Effect

```javascript
progressiveAcrylic(element, {
    blur: {
        enabled: true,
        maxBlur: 300,
        height: '40%',
        direction: 'bottom',
        curve: [0.68, -0.55, 0.265, 1.55] // Bounce curve
    },
    luminosity: {
        enabled: true,
        brightness: 1.3,
        contrast: 1.2,
        saturate: 1.4,
        opacity: 0.8
    }
});
```

### Multi-Direction Blur

```javascript
// Top blur
progressiveAcrylic(topElement, {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '30%',
        direction: 'top',
        position: 'top'
    }
});

// Bottom blur
progressiveAcrylic(bottomElement, {
    blur: {
        enabled: true,
        maxBlur: 150,
        height: '30%',
        direction: 'bottom',
        position: 'bottom'
    }
});
```

## Framework Examples

### React Hook Example

```jsx
import { useEffect, useRef } from 'react';
import { progressiveAcrylic } from 'progressive-acrylic';

function useProgressiveAcrylic(options) {
    const ref = useRef(null);
    const instanceRef = useRef(null);
    
    useEffect(() => {
        if (ref.current) {
            instanceRef.current = progressiveAcrylic(ref.current, options);
        }
        
        return () => {
            if (instanceRef.current) {
                instanceRef.current.destroy();
            }
        };
    }, []);
    
    const updateOptions = (newOptions) => {
        if (instanceRef.current) {
            instanceRef.current.update(newOptions);
        }
    };
    
    return { ref, updateOptions };
}

// Usage
function AcrylicCard() {
    const { ref, updateOptions } = useProgressiveAcrylic({
        blur: { enabled: true, maxBlur: 200 }
    });
    
    return (
        <div className="card">
            <div ref={ref} className="card-blur" />
            <div className="card-content">
                <h3>Acrylic Card</h3>
                <button onClick={() => updateOptions({ blur: { maxBlur: 300 } })}>
                    Increase Blur
                </button>
            </div>
        </div>
    );
}
```

### Vue Composition API

```vue
<template>
    <div class="container">
        <div ref="acrylicRef" class="blur-overlay"></div>
        <div class="content">
            <h2>Vue Acrylic Effect</h2>
            <button @click="toggleEffect">Toggle Effect</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { progressiveAcrylic } from 'progressive-acrylic';

const acrylicRef = ref(null);
let acrylicInstance = null;

const defaultOptions = {
    blur: { enabled: true, maxBlur: 200 },
    tint: { enabled: true, color: '#ffffff', opacity: 0.1 }
};

onMounted(() => {
    acrylicInstance = progressiveAcrylic(acrylicRef.value, defaultOptions);
});

onUnmounted(() => {
    if (acrylicInstance) {
        acrylicInstance.destroy();
    }
});

const toggleEffect = () => {
    if (acrylicInstance) {
        acrylicInstance.update({
            blur: { enabled: !defaultOptions.blur.enabled }
        });
        defaultOptions.blur.enabled = !defaultOptions.blur.enabled;
    }
};
</script>
```

### Angular Component

```typescript
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { progressiveAcrylic } from 'progressive-acrylic';

@Component({
  selector: 'app-acrylic-panel',
  template: `
    <div class="panel">
      <div #acrylicElement class="blur-overlay"></div>
      <div class="panel-content">
        <h2>Angular Acrylic Panel</h2>
        <button (click)="updateEffect()">Update Effect</button>
      </div>
    </div>
  `,
  styleUrls: ['./acrylic-panel.component.css']
})
export class AcrylicPanelComponent implements AfterViewInit, OnDestroy {
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

  updateEffect() {
    if (this.acrylicInstance) {
      this.acrylicInstance.update({
        blur: { maxBlur: Math.random() * 300 + 100 }
      });
    }
  }
}
```

---

*For more advanced techniques and customizations, see the [Custom Effects Guide](custom-effects.md) and [API Reference](api-reference.md).* 