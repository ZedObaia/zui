<template>
  <div>
    <label v-if="label" :for="$attrs.inputId as string">{{ label }}</label>
    <InputText
        v-bind="$attrs"
        :pt="preset"
        :ptOptions="{ mergeSections: false, mergeProps: false }"
        :invalid="invalid"
        :size="size"
        :fluid="fluid"
        :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';

defineOptions({
  inheritAttrs: false
});

defineProps<{
  label?: string
  placeholder?: string
  inputId?: string
  size?: 'small' | 'large' | undefined
  invalid?: boolean
  fluid?: boolean
}>()

const preset = {
  root: ({ props, context, parent }: { props: any, context: any, parent: any }) => {
    var _a;
    return {
      class: [
        // Font
        'leading-none',
        // Flex
        { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },
        // Spacing
        'm-0',
        { 'w-full': props.fluid },
        // Size
        {
          'py-3 px-3.5': props.size == 'large',
          'py-1.5 px-2': props.size == 'small',
          'py-2 px-3': props.size == null
        },
        // Shape
        { 'rounded-md': parent.instance.$name !== 'InputGroup' },
        { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
        { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
        { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },
        // Colors
        'text-surface-800 dark:text-white/80',
        'placeholder:text-surface-400 dark:placeholder:text-surface-500',
        { 'bg-surface-0 dark:bg-surface-950': !context.disabled },
        'border',
        { 'border-surface-300 dark:border-surface-700': !props.invalid },
        // Invalid State
        'invalid:focus:ring-red-200',
        'invalid:hover:border-red-500',
        { 'border-red-500 dark:border-red-400': props.invalid },
        // States
        {
          'hover:border-surface-400 dark:hover:border-surface-600': !context.disabled && !props.invalid,
          'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10': !context.disabled,
          'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': context.disabled
        },
        // Filled State *for FloatLabel
        { filled: ((_a = parent.instance) == null ? void 0 : _a.$name) == 'FloatLabel' && context.filled },
        // Misc
        'appearance-none',
        'transition-colors duration-200'
      ]
    };
  }
}
</script>