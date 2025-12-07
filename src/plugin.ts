import type { App, Component } from "vue";

export default {
  install(app: App) {
    const modules = import.meta.glob("/src/components/**/*.vue", {
      eager: true
    }) as Record<string, { default: Component }>;
    console.log("Cargando componentes:", Object.keys(modules));

    Object.values(modules).forEach((m) => {
      const component = m.default;

      if (component && (component as any).name) {
        app.component((component as any).name, component);
      }
    });
  }
};
