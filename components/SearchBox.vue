<script setup lang="ts">
const { result, search } = useAlgoliaSearch('pagesContent')
const query = ref('')

const getResults = () => {
  search({ query: query.value })
}

const getMatchingSentence = (content: string, matchedWord: string) => {
  // TODO handle mistyped words in results
  if (!content || !matchedWord) return ''

  // Split content into sentences (considering common sentence endings)
  const sentences = content.split(/(?<=[.!?])\s+/)

  // Find the sentence containing the matched word (case insensitive)
  const matchingSentence = sentences.find((sentence) =>
    sentence.toLowerCase().includes(matchedWord.toLowerCase()),
  )

  return matchingSentence || ''
}
</script>

<template>
  <div id="search">
    <div id="searchInput">
      <Icon name="ic:baseline-search" />
      <input v-model="query" type="search" @input="getResults" >
    </div>

    <ul v-if="query && result">
      <li v-for="hit in result.hits" :key="hit.objectID">
        <a :href="hit.path">{{ hit.title }}</a>
        <small
          v-html="
            getMatchingSentence(hit._highlightResult.content.value, query)
          "
        />
        <small class="site">{{ hit.site }}</small>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#search {
  margin-top: 12em;
}
#searchInput {
  margin: 0 auto;
  background-color: var(--light);
  border-radius: 0.5em;
  opacity: 0.9;
  display: flex;
  gap: 0.5em;
  align-items: center;
}
#searchInput span {
    margin-left: .25em;
  font-size: 2rem;
}
#searchInput input {
  width: 100%;
  background: none;
}
ul {
  z-index: 3;
  background-color: var(--dark);
  color: var(--light);
  border-radius: 0.5em;
  text-align: left;
}
li {
    padding: .5em;
}
a {
    color: #fff;
    display: block;
}
:deep(em) {
  background-color: var(--link-color);
}
.site {
  display: block;
  font-style: italic;
}
</style>
