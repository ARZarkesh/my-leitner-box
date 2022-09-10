<script setup lang="ts">
import { useVModels } from '@vueuse/core'

const props = defineProps<{ modelValue: string; label: string }>()

const { modelValue } = useVModels(props)

</script>

<template>
  <label class="flex items-center">
    <span class="mr-4 w-60px">
      {{ props.label }}
    </span>
    <div class="flex items-center border-2 border-solid border-gray-300 h-10 focus-within:border-blue-300 px-3 rounded-sm flex-grow">
      <input
        v-model="modelValue"
        type="text"
        class="flex-grow focus:outline-none bg-transparent"
      >
      <slot name="append" />
    </div>
  </label>
</template>
