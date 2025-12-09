<template>
  <button
    class="w-btn"
    :class="[
      `w-btn--${color}`,
      `w-btn--${size}`,
      { 'w-btn--loading': loading, 'w-btn--disabled': disabled }
    ]"
    :disabled="disabled || loading"
    :type="type"
    role="button"
    :aria-disabled="disabled || loading"
    :aria-busy="loading"
    @click="handleClick"
  >
    <span v-if="!loading"><slot /></span>
    <span v-else class="w-btn__loader"></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineOptions({
  name: "WButton"
});

const props = defineProps({
  color: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: Boolean,
  loading: Boolean,
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  }
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }

  emit('click', event)
}
</script>

<script lang="ts">
export default {
  name: 'WButton'
}
</script>

<style scoped>
.w-btn {
  border: none;
  border-radius: var(--w-radius);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s, opacity 0.2s, transform 0.1s;
}

.w-btn:active:not(.w-btn--disabled):not(.w-btn--loading) {
  transform: scale(0.97);
}

.w-btn--sm { font-size: 0.8rem; padding: 0.3rem 0.7rem; }
.w-btn--md { font-size: 1rem; }
.w-btn--lg { font-size: 1.2rem; padding: 0.7rem 1.3rem; }

.w-btn--primary { background: var(--w-primary); color: white; }
.w-btn--secondary { background: var(--w-secondary); color: white; }
.w-btn--success { background: var(--w-success); color: white; }
.w-btn--warning { background: var(--w-warning); color: black; }
.w-btn--error { background: var(--w-error); color: white; }

.w-btn--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.w-btn--loading {
  opacity: 0.8;
  cursor: progress;
}

.w-btn__loader {
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
