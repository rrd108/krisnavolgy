<script setup lang="ts">
  import Happening from '../types/Happening'

  const { find } = useStrapi()

  const config = useRuntimeConfig()
  const today = new Date()
  const fields = ['date', 'name', 'description']
  const sort = 'date'
  const pagination = { page: 1, pageSize: 3 }
  const filters = {
    date: { $gte: today.toISOString().substring(0, 10) },
  }

  const happenings = await find<Happening>('happenings', {
    fields,
    sort,
    pagination,
    filters,
  })
</script>

<template>
  <section>
    <h2>Közelgő események</h2>
    <div class="grid">
      <ul>
        <li v-for="happening in happenings.data">
          <div>
            <span>{{ happening.attributes.date.substring(5, 7) }}</span>
            <span>{{ happening.attributes.date.substring(8, 10) }}</span>
          </div>
          <p>
            {{ happening.attributes.name }}
          </p>
        </li>
      </ul>
      <HappeningFeatured />
    </div>
  </section>
</template>

<style scoped>
  section {
    background-color: #aef;
  }
  h2 {
    font-size: 1.5rem;
    background-color: #fff5;
    border-radius: 0.5em;
    width: fit-content;
    padding: 0.5em 1em;
    margin: 2em auto 1em;
  }
  .grid {
    grid-template-columns: 1fr 1fr;
  }
  ul {
    margin-left: -0.5em;
  }
  li {
    font-family: 'Robot', sans-serif;
    display: flex;
    margin-bottom: 1em;
    background-color: #fff5;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    align-items: center;
    border: 0.1em solid var(--light);
    border-left: none;
  }
  span {
    display: block;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    width: 2.5rem;
    text-align: center;
    padding: 0.5em;
  }
  span:nth-child(1) {
    padding-bottom: 0;
  }
  span:nth-child(2) {
    padding-top: 0;
  }
  p {
    padding-left: 0.5em;
    font-weight: bold;
  }
</style>
