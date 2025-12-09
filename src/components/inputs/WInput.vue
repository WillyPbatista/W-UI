<template>
  <div class="w-input__wrapper">
    <label v-if="label" class="w-input__label">{{ label }}</label>

    <div
      class="w-input"
      :class="[
        `w-input--${size}`,
        {
          'w-input--error': error,
          'w-input--disabled': disabled,
        },
      ]"
    >
      <!-- Icono izquierdo -->
      <span class="w-input__icon" v-if="$slots.left">
        <slot name="left" />
      </span>

      <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-input__field"
        :value="modelValue"
        @input="onInput"
      />

      <!-- Icono derecho -->
      <span class="w-input__icon" v-if="$slots.right">
        <slot name="right" />
      </span>
    </div>

    <p v-if="error" class="w-input__error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "WInput"
});

defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  error: String,
  type: { type: String, default: "text" },
  disabled: Boolean,
  size: { type: String, default: "md" },
});

const emit = defineEmits(["update:modelValue"]);

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<script lang="ts">
export default { name: "WInput" };
</script>

<style scoped>
.w-input__wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.w-input__label {
  font-size: 0.9rem;
  font-weight: 500;
}
/* --- SIZES --- */

/* SMALL */
.w-input--sm {
  padding: 4px 10px;
  width: 180px;
}

.w-input--sm .w-input__field {
  font-size: 0.85rem;
}

/* MEDIUM */
.w-input--md {
  padding: 6px 12px;
  width: 240px;
}

.w-input--md .w-input__field {
  font-size: 1rem;
}

/* LARGE */
.w-input--lg {
  padding: 10px 16px;
  width: 300px;
}

.w-input--lg .w-input__field {
  font-size: 1.15rem;
}

.w-input {
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 30px;
  background: white;
  padding: 6px 10px;
  transition: border 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.w-input:hover {
  border-color: var(--w-primary);
}

.w-input:focus-within {
  border-color: var(--w-primary);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); /* Glow */
}

.w-input--error {
  border-color: var(--w-error) !important;
  box-shadow: none !important;
}

.w-input--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.w-input__field {
  flex: 1;
  outline: none;
  border: none;
  font-size: 1rem;
}

.w-input__icon {
  display: flex;
  align-items: center;
  margin: 0 6px;
}

.w-input--error {
  border-color: var(--w-error);
}

.w-input__error {
  color: var(--w-error);
  font-size: 0.8rem;
}
</style>
