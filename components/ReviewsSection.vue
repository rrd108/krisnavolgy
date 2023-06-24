<script setup lang="ts">
  import Review from '~~/types/Review'

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
  <section>
    <h2>Rólunk mondták TODO</h2>
    <ul ref="reviewElement" class="horizontal-scroll">
      <li v-for="review in props.reviews">
        <ReviewBox
          :review="review"
          :scrollElement="reviewElement"
          @visibility="visibilityChanged"
        />
      </li>
    </ul>

    <Pager
      :color="'#000'"
      :length="props.reviews?.length || 1"
      :visible="reviewsViews"
    />
  </section>
</template>

<style scoped></style>
