const result = await $fetch('/api/festivals')

const sortedFestivals = result.festivals?.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())
const allComingFestivals = sortedFestivals?.filter((festival) => new Date(festival.start_date) > new Date())
const touristComingFestivals = allComingFestivals?.filter((festival) => festival.url)

export { allComingFestivals, touristComingFestivals }
