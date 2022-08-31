<script setup lang="ts">
import { debouncedWatch } from '@vueuse/shared'
import { Card_GetSuggestions } from '~/repository/Card'

const frontText = ref('')
const backText = ref('')

debouncedWatch(frontText, () => {
  if (frontText.value) {
    Card_GetSuggestions({ query: frontText.value })
      .then((response) => {
        backText.value = response.translate
      })
  }
  else {
    backText.value = ''
  }
}, { debounce: 500 })

</script>

<template>
  <main class="w-[500px] px-4 py-5 text-center">
    <img class="mx-auto" width="128" height="128" src="/assets/logo.png" alt="Logo">
    <h1 class="text-lg font-bold">
      My Leitner Box
    </h1>
    <div class="mt-4">
      <BaseInput v-model="frontText" class="w-full" label="Word" />
      <BaseInput v-model="backText" class="w-full mt-4" label="Translation" />
    </div>
  </main>
</template>
