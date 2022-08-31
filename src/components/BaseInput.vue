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
    <input
      v-model="modelValue"
      type="text"
      class="flex-grow border-2 border-solid border-gray-300 h-10 focus:outline-none focus:border-blue-300 px-3 rounded-sm"
    >
  </label>
</template>
