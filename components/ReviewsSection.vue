<script setup lang="ts">
  import { ref } from 'vue'
  import Review from 'types/Review'

  const props = defineProps<{
    reviews: Review[]
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
    <h2>Rólunk mondták TODO</h2>
    <ul ref="reviewElement" class="horizontal-scroll">
      <li v-for="(review, i) in props.reviews">
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
      :length="reviews.length || 1"
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
