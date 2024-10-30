const result = await $fetch('/api/events')

const sortedEvents = result.events?.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())
const allComingEvents = sortedEvents?.filter((event) => new Date(event.start_date) > new Date())
const touristComingEvents = allComingEvents?.filter((event) => event.url)

export { allComingEvents, touristComingEvents }
