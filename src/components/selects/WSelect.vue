<template>
  <div class="w-select__wrapper">
    <label v-if="label" class="w-select__label">{{ label }}</label>

    <div
      class="w-select"
      :class="[
        `w-select--${size}`,
        {
          'w-select--open': isOpen,
          'w-select--disabled': disabled,
          'w-select--error': error,
        },
      ]"
      @click="toggle"
    >
      <!-- Left Icon -->
      <span v-if="$slots.left" class="w-select__icon">
        <slot name="left" />
      </span>

      <!-- Selected Value -->
      <span class="w-select__value">
        <template v-if="!multiple">
          {{ selectedLabel }}
        </template>

        <template v-else>
          <template v-if="selectedItems.length">
            <span
              v-for="item in selectedItems"
              :key="item.value"
              class="w-select__tag"
            >
              {{ item.label }}
            </span>
          </template>

          <span v-else class="placeholder">{{ placeholder }}</span>
        </template>
      </span>

      <!-- Right Icon (chevron) -->
      <span class="w-select__chevron">⌄</span>
    </div>

    <!-- Dropdown -->
    <transition name="fade">
      <ul v-if="isOpen" class="w-select__dropdown" @click.stop>
        <li
          v-for="item in options"
          :key="item.value"
          class="w-select__option"
          :class="{
            selected: multiple
              ? Array.isArray(modelValue) && modelValue.includes(item.value)
              : item.value === modelValue,
          }"
          @click="select(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </transition>

    <p v-if="error" class="w-select__error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

defineOptions({
  name: "WSelect"
});

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: null,
  },
  multiple: Boolean,

  label: String,
  placeholder: { type: String, default: "Select..." },
  error: String,
  disabled: Boolean,
  size: { type: String, default: "md" },
  options: {
    type: Array as () => { label: string; value: any }[],
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

// ------------------------------
// TOGGLE
// ------------------------------
function toggle(e?: MouseEvent) {
  if (props.disabled) return;

  // evitar que hacer click en un tag cierre el menú
  if (
    e?.target &&
    (e.target as HTMLElement).classList.contains("w-select__tag")
  )
    return;

  isOpen.value = !isOpen.value;
}

// ------------------------------
// SELECT
// ------------------------------
function select(item: any) {
  if (!props.multiple) {
    emit("update:modelValue", item.value);
    isOpen.value = false;
    return;
  }

  // MULTIPLE MODE
  const current = Array.isArray(props.modelValue) ? [...props.modelValue] : [];

  const exists = current.includes(item.value);

  if (exists) {
    emit(
      "update:modelValue",
      current.filter((v) => v !== item.value)
    );
  } else {
    emit("update:modelValue", [...current, item.value]);
  }
}

// ------------------------------
// LABELS
// ------------------------------
const selectedLabel = computed(() => {
  const found = props.options.find((o) => o.value === props.modelValue);
  return found ? found.label : props.placeholder;
});
const modelArray = computed(() =>
  Array.isArray(props.modelValue) ? (props.modelValue as unknown[]) : []
);
const selectedItems = computed(() =>
  props.multiple
    ? props.options.filter((o) => modelArray.value.includes(o.value))
    : []
);

// ------------------------------
// CLOSE ON OUTSIDE CLICK
// ------------------------------
function handleClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (!target.closest(".w-select__wrapper")) {
    isOpen.value = false;
  }
}

onMounted(() => document.addEventListener("click", handleClick));
onBeforeUnmount(() => document.removeEventListener("click", handleClick));
</script>

<style scoped>
.w-select__wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
}

.w-select__label {
  font-size: 0.9rem;
  font-weight: 500;
}

.w-select {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid gray;
  border-radius: 30px;
  background: white;
  padding: 6px 10px;
  cursor: pointer;
  transition: border 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.w-select__value {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.w-select__tag {
  padding: 3px 8px;
  background: var(--w-primary);
  color: white;
  border-radius: 12px;
  font-size: 0.78rem;
  white-space: nowrap;
}

.placeholder {
  opacity: 0.6;
}

/* Chevron */
.w-select__chevron {
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Hover & focus */
.w-select:hover {
  border-color: var(--w-primary);
}

.w-select--open,
.w-select:focus-within {
  border-color: var(--w-primary);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* Disabled */
.w-select--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Error */
.w-select--error {
  border-color: var(--w-error) !important;
  box-shadow: none !important;
}

/* Dropdown */
.w-select__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  margin-top: 4px;
  list-style: none;
  padding: 6px 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  z-index: 9999;
}

.w-select__option {
  padding: 8px 16px;
  cursor: pointer;
}

.w-select__option:hover {
  background: rgba(79, 70, 229, 0.08);
}

.w-select__option.selected {
  background: rgba(79, 70, 229, 0.18);
  font-weight: 600;
}

/* Sizes */
.w-select--sm {
  padding: 4px 10px;
  font-size: 0.85rem;
  width: 180px;
}

.w-select--md {
  padding: 6px 12px;
  width: 220px;
}

.w-select--lg {
  padding: 10px 16px;
  font-size: 1.15rem;
  width: 260px;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
