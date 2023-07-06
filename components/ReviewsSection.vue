<script setup lang="ts">
  import { ref } from 'vue'
  import { ReviewSection } from 'types/Review'

  const props = defineProps<{
    reviews_section: ReviewSection
  }>()

  const reviewElement = ref(null as unknown as HTMLElement)
  const reviewsViews = ref([true])
  const visibilityChanged = (value: [number, boolean]) => {
    const [num, isVisible] = value
    reviewsViews.value[num] = isVisible
  }
</script>

<template>
  <div class="touch-right">
    <h2>{{ reviews_section.title }}</h2>
    <ul ref="reviewElement" class="horizontal-scroll">
      <li v-for="(review, i) in props.reviews_section.reviews">
        <ReviewBox
          v-if="reviewElement"
          :review="review"
          :num="i"
          :scrollElement="reviewElement"
          @visibility="visibilityChanged"
        />
      </li>
    </ul>

    <Pager
      :color="'#000'"
      :length="reviews_section.reviews.length || 1"
      :visible="reviewsViews"
    />
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 1em;
  }

  @media screen and (min-width: 64rem) {
    li {
      width: 25%;
    }
  }
</style>
