<script setup lang="ts">
defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <button class="bg-primary-200 text-white h-10 px-4 rounded-sm hover:opacity-90">
    <slot v-if="!loading" />
    <BaseLoading v-else class="w-6 mx-auto" />
  </button>
</template>
