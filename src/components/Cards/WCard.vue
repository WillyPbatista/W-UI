<template>
  <div
    class="w-card"
    :class="[
      `w-card--${variant}`,
      `w-card--${size}`,
      { 'w-card--hover': hover, 'w-card--shadow': shadow, 'w-card--bordered': bordered }
    ]"
  >
    <div v-if="$slots.header" class="w-card__header">
      <slot name="header" />
    </div>

    <div v-if="$slots.media" class="w-card__media">
      <slot name="media" />
    </div>

    <img v-else-if="imgUrl" :src="imgUrl" alt="" class="w-card__image-prop" />

    <div class="w-card__body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="w-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "WCard",
});

const props = defineProps({
  variant: {
    type: String,
    default: "flat", // flat | filled | outlined
  },
  size: {
    type: String,
    default: "md", // sm | md | lg
  },
  hover: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },

  imgUrl: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
.w-card {
  border-radius: 16px;
  background: white;
  transition: box-shadow 0.2s ease, border 0.2s ease;
  overflow: hidden;
  border: 1px solid transparent;
}

/* Variants */
.w-card--flat {
  background: #fff;
}

.w-card--filled {
  background: var(--w-primary-light, #eef2ff);
}

.w-card--outlined {
  border: 1px solid #ddd;
}

/* Hover effect */
.w-card--hover:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* Permanent shadow (prop: shadow) */
.w-card--shadow {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* Bordered style (prop: bordered) */
.w-card--bordered {
  border: 1px solid #e5e7eb;
}

/* Sizes */
.w-card--sm {
  padding: 12px;
}

.w-card--md {
  padding: 20px;
}

.w-card--lg {
  padding: 32px;
}

/* Header, body, footer */
.w-card__header {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.w-card__body {
  font-size: 0.95rem;
}

.w-card__footer {
  margin-top: 16px;
  opacity: 0.8;
  font-size: 0.85rem;
}
/* NUEVO: Contenedor para el slot 'media' */
.w-card__media {
  /* Asegura que cualquier cosa puesta en el slot de media se ajuste bien */
  display: block;
}

/* NUEVO: Estilo para la imagen pasada por prop (imgUrl) */
.w-card__image-prop {
  width: 100%;
  /* Usa los mismos bordes redondeados que la card */
  border-radius: 16px 16px 0 0; 
  /* Asegura que no haya espacio extra que pueda causar problemas */
  display: block;
}

/* ... (Resto de estilos) ... */

/* Sizes (Actualizados: Se debe quitar el padding del body si hay media) */
.w-card--sm {
  /* Se quita el padding del .w-card y se deja que el body lo maneje */
  padding: 0;
}

.w-card--md {
  padding: 0;
}

.w-card--lg {
  padding: 0;
}

/* Header, body, footer (Ahora manejan el padding) */
.w-card__header,
.w-card__body,
.w-card__footer {
  padding-left: 20px;
  padding-right: 20px;
}

/* Re-aplicar padding vertical para body/header/footer */
.w-card--sm .w-card__header, .w-card--sm .w-card__body, .w-card--sm .w-card__footer {
    padding-left: 12px;
    padding-right: 12px;
}
.w-card--md .w-card__header, .w-card--md .w-card__body, .w-card--md .w-card__footer {
    padding-left: 20px;
    padding-right: 20px;
}
.w-card--lg .w-card__header, .w-card--lg .w-card__body, .w-card--lg .w-card__footer {
    padding-left: 32px;
    padding-right: 32px;
}

.w-card__header {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0;
  padding-top: 20px; /* Padding superior */
}

.w-card__body {
  font-size: 0.95rem;
  padding-top: 20px;
  padding-bottom: 20px;
}

.w-card__footer {
  margin-top: 0;
  opacity: 0.8;
  font-size: 0.85rem;
  padding-bottom: 20px; /* Padding inferior */
}

/* Ajustes de espaciado si hay header/media/footer */

/* Si hay Header o Media, el Body no necesita padding superior extra */
.w-card__media + .w-card__body {
  padding-top: 20px; 
}
.w-card__header + .w-card__body {
  padding-top: 12px; /* Reducido si ya hay header */
}
/* ... y ajustes para sm/lg si es necesario ... */

/* Si el footer existe, el body no necesita padding inferior extra */
.w-card__body:has(+ .w-card__footer) {
  padding-bottom: 12px;
}

/* Ajustar el padding vertical general para las secciones */
.w-card--md .w-card__header { padding-top: 20px; }
.w-card--md .w-card__body { padding-top: 20px; padding-bottom: 20px; }
.w-card--md .w-card__footer { padding-bottom: 20px; }

/* Ajuste de márgenes/paddings para mejorar la separación */
.w-card__header {
    margin-bottom: 0;
    padding-bottom: 0;
}
.w-card__media {
    margin-bottom: 0;
}
</style>
