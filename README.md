# w-ui

⭐ Repository Description (GitHub short description)
A lightweight, customizable Vue 3 UI component library built with TypeScript. Includes global component registration, reusable design tokens, and clean, minimal components.

📘 README.md (Full, professional, in English)
# w-ui

**w-ui** is a lightweight and customizable UI component library for **Vue 3**, built completely with **TypeScript** and designed for scalability, clarity, and modern development workflows.

This library includes a global plugin for auto-registering components, design tokens, and a clean foundation for building a full UI system.

---

## 🚀 Features

- ⚡ **Vue 3 + Vite + TypeScript**
- 📦 **Automatic Global Component Registration**
- 🎨 **Theme-ready via CSS Variables**
- 🧩 **Modular Component Structure**
- ♿ **Accessible Component Patterns**
- 🔧 **Fully customizable**
- 📐 **Production-ready architecture**

---

## 📁 Project Structure



src/
components/
buttons/
WButton.vue
styles/
base.css
plugin.ts
index.ts
App.vue
main.ts


---

## 📦 Installation (future npm publishing)

Once published to npm:

```bash
npm install w-ui

🔧 Usage
import { createApp } from 'vue'
import App from './App.vue'
import WUI from 'w-ui'

createApp(App).use(WUI).mount('#app')


Now you can use any component globally:

<WButton color="primary">Click me</WButton>

🧩 Available Components
✔ WButton

A customizable button component that supports:

Variants (primary, success, warning, etc.)

Sizes (sm, md, lg)

Loading state

Disabled state

Accessibility attributes

Typed click event

Button types (button, submit, reset)

Example:

<WButton @click="save" color="success" size="lg">
  Save
</WButton>

🎨 Styling & Design Tokens

w-ui uses CSS variables for themes and styling flexibility.

Example variables:

:root {
  --w-primary: #3b82f6;
  --w-success: #22c55e;
  --w-warning: #facc15;
  --w-error: #ef4444;
  --w-secondary: #64748b;
  --w-radius: 6px;
}


You can override these in your app theme.

📚 Roadmap

⬜ WInput

⬜ WCard

⬜ WAlert

⬜ Dropdown & Menu

⬜ Dialog / Modal

⬜ Form Components

⬜ Light & Dark Theme Support

⬜ Full Icon System

⬜ Publish to npm

🤝 Contributing

Contributions, ideas, discussions, and pull requests are welcome.

📄 License

MIT License © William Javier Perez Batista
