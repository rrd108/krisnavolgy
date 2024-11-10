<script setup lang="ts">
const { result, search } = useAlgoliaSearch('pagesContent')
const query = ref("")

const getMatchingSentence = (content: string, matchedWord: string) => {
  // TODO handle mistyped words in results
  if (!content || !matchedWord) return ""

  // Split content into sentences (considering common sentence endings)
  const sentences = content.split(/(?<=[.!?])\s+/)

  // Find the sentence containing the matched word (case insensitive)
  const matchingSentence = sentences.find((sentence) =>
    sentence.toLowerCase().includes(matchedWord.toLowerCase()),
  )

  return matchingSentence || ""
}
</script>

<template>
  <div>
    <h1>Search</h1>
    <input v-model="query" type="search" @input="search({ query })" >

    <ul v-if="result">
      <li v-for="hit in result.hits" :key="hit.objectID">
        <a :href="hit.path">{{ hit.title }}</a>
        <small
          v-html="
            getMatchingSentence(hit._highlightResult.content.value, query)
          "
        />
        <small>{{ hit.site }}</small>
      </li>
    </ul>
  </div>
</template>

<style scoped>
:deep(em) {
  background-color: pink;
}
small {
  display: block;
}
</style>
