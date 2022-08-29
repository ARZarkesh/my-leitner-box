<script setup lang="ts">
import { Card_GetSuggestions } from '~/repository/Card'

const frontText = ref('')

function test() {
  Card_GetSuggestions({ query: 'test' })
    .then((response) => {
      console.log(response)
    })
}

</script>

<template>
  <button @click="test()">
    test
  </button>
  <main class="w-[500px] px-4 py-5 text-center">
    <img class="mx-auto" width="128" height="128" src="/assets/logo.png" alt="Logo">
    <h1 class="text-lg font-bold">
      My Leitner Box
    </h1>
    <div class="mt-4">
      <BaseInput v-model="frontText" class="w-full" label="Word" />
    </div>
  </main>
</template>
