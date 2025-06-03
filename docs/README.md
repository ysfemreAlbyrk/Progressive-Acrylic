# Progressive Acrylic Documentation

Welcome to the complete documentation for Progressive Acrylic - the advanced layered acrylic glass and progressive blur effects library for web elements.

## 📚 Documentation Index

### Getting Started
- **[Installation Guide](installation.md)** - How to install and set up Progressive Acrylic
- **[Quick Start Tutorial](getting-started.md)** - Build your first acrylic effect in minutes

### API Reference
- **[API Reference](api-reference.md)** - Complete function and options documentation

### Examples & Tutorials
- **[Code Examples](examples.md)** - Ready-to-use code snippets
- **[Custom Effects](custom-effects.md)** - Creating your own unique effects

## 🎯 What is Progressive Acrylic?

Progressive Acrylic is a JavaScript library that brings sophisticated acrylic glass effects to web interfaces. It implements both iOS-style progressive blur and Windows Acrylic design principles using a powerful 4-layer system:

1. **Blur Layer** - Progressive gaussian blur with customizable curves
2. **Luminosity Layer** - Brightness, contrast, and saturation adjustments
3. **Tint Layer** - Color overlays with solid colors or gradients
4. **Noise Layer** - Texture and grain effects for realism

## 🚀 Quick Example

```javascript
progressiveAcrylic(document.getElementById('myElement'), {
  blur: {
    enabled: true,
    direction: 'bottom',
    height: '50%',
    maxBlur: 200
  },
  tint: {
    enabled: true,
    color: '#ffffff',
    opacity: 0.1
  }
});
```

## 🌟 Key Features

- **4-Layer Architecture** - Blur, Luminosity, Tint, and Noise layers
- **Cross-Platform Design** - iOS and Windows acrylic styles
- **High Performance** - CSS backdrop-filter optimization
- **Flexible API** - Extensive customization options
- **Modern Browser Support** - Chrome 76+, Firefox 103+, Safari 14+, Edge 79+

## 📖 Learning Path

If you're new to Progressive Acrylic, we recommend following this learning path:

1. Start with the **[Installation Guide](installation.md)**
2. Follow the **[Quick Start Tutorial](getting-started.md)**
3. Explore **[Code Examples](examples.md)** for your use case
4. Dive into **[API Reference](api-reference.md)** for advanced customization
5. Create **[Custom Effects](custom-effects.md)** for unique designs

## 💡 Need Help?

- **Issues**: Check common solutions in the documentation
- **Custom Effects**: Follow [Custom Effects Tutorial](custom-effects.md)
- **Browser Issues**: Review browser support in [Installation Guide](installation.md)

## 🔗 External Resources

- **[GitHub Repository](https://github.com/your-username/progressive-acrylic)**
- **[NPM Package](https://www.npmjs.com/package/progressive-acrylic)**
- **[Live Demo](https://progressive-acrylic-demo.com)**
- **[Interactive Editor](../acrylic-editor.html)**

---

*Last updated: January 2025* 