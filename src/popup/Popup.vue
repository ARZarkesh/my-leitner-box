<script setup lang="ts">
import { debouncedWatch } from '@vueuse/shared'
import { Card_AddWord, Card_GetSuggestions } from '~/repository/Card'

const frontText = ref('')
const backText = ref('')

const loadingAddWord = ref(false)

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

function addToBox() {
  loadingAddWord.value = true
  Card_AddWord({ back_text: backText.value, front_text: frontText.value })
    .then(() => {
      // eslint-disable-next-line no-alert
      alert(`Added ${backText.value}: ${frontText.value} to box`)
      frontText.value = ''
      backText.value = ''
    })
    .finally(() => {
      loadingAddWord.value = false
    })
}

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
    <BaseButton class="mt-4 w-full" :loading="loadingAddWord" @click="addToBox">
      Add to box
    </BaseButton>
  </main>
</template>
