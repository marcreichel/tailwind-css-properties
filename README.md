<h1 align="center">
    Tailwind CSS Color Properties
</h1>

<p align="center">
    A Tailwind CSS plugin that exports theme colors as css custom properties.
</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/@marcreichel/tailwind-css-properties" alt="version">
    <img src="https://img.shields.io/bundlephobia/min/@marcreichel/tailwind-css-properties" alt="npm bundle size">
    <img src="https://img.shields.io/bundlephobia/minzip/@marcreichel/tailwind-css-properties" alt="npm bundle size">
    <img src="https://img.shields.io/npm/dt/@marcreichel/tailwind-css-properties" alt="downloads">
    <img src="https://img.shields.io/npm/l/@marcreichel/tailwind-css-properties" alt="license">
</p>

## 🤔 Motivation

Sometimes it is not possible to use Tailwind color classes directly. For example when configuring colors for some third party packages (via JavaScript).

## 🪄 Usage

After setting up this package your entire Tailwind color palette is available via CSS custom properties and can be referenced like so:

In HTML:

```html
<div style="color: var(--color-indigo-500);">
    Text color using custom CSS property 🎉
</div>
```

In JavaScript:

```javascript
module.exports = {
    config: {
        color: 'var(--color-indigo-500)',
    },
};
```

## 🚀 Installing

```
npm install @marcreichel/tailwind-css-properties
```

or

```
yarn add @marcreichel/tailwind-css-properties
```

Require it in your Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
    /* ... */
    plugins: [
        require('@marcreichel/tailwind-css-properties')
    ]
}
```

## 📄 License

Copyright (c) 2022 Marc Reichel and contributors.

Licensed under the MIT license, see [LICENSE](LICENSE) for details.
