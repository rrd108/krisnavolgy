<script setup lang="ts">
  import { ReviewSection } from 'types/Review'

  const props = defineProps<{
    reviews_section: ReviewSection
  }>()
</script>

<template>
  <div class="touch-right">
    <h2>{{ reviews_section.title }}</h2>
    <Carousel :paginationActiveColor="'#000000'" :paginationColor="'#bfbfbf'">
      <ul class="horizontal-scroll">
        <li v-for="(review, i) in props.reviews_section.reviews">
          <Slide>
            <ReviewBox :review="review" />
          </Slide>
        </li>
      </ul>
    </Carousel>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 1em;
  }

  @media screen and (min-width: 64rem) {
    li {
      width: 23%;
    }
  }
</style>
