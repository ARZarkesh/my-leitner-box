<script setup lang="ts">
defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <button class="bg-primary-200 text-white h-10 px-4 rounded-sm hover:opacity-90 font-bold relative">
    <div v-if="!loading">
      <slot />
    </div>
    <div v-else class="w-6 h-6 mx-auto">
      <BaseLoading />
    </div>
  </button>
</template>
