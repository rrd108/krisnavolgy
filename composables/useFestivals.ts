export const useFestivals = async () => {
  const { data: result } = await useFetch('/api/festivals')

  const sortedFestivals = computed(() => 
    result.value?.festivals?.sort((a, b) => 
      new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
    )
  )

  const allComingFestivals = computed(() => 
    sortedFestivals.value?.filter((festival) => 
      new Date(festival.start_date) > new Date()
    )
  )

  const touristComingFestivals = computed(() => 
    allComingFestivals.value?.filter((festival) => 
      festival.url
    )
  )

  return {
    allComingFestivals,
    touristComingFestivals
  }
}
