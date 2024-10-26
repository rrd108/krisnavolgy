const _events = [
  {
    "start_date": "2025-04-12",
    "end_date": "2025-04-12",
    "title": "Boldog Boci",
    "description": "Egyedülálló élményt nyújt az állatok tiszteletéről.",
    "url": "/",
    "thumbnail": "images/logo.png"
  },
  {
    "start_date": "2025-05-03",
    "end_date": "2025-05-03",
    "title": "India Varázsa",
    "description": "Merülj el az indiai kultúra varázsában nálunk!",
    "url": "/",
    "thumbnail": "images/logo.png"
  },
  {
    "start_date": "2025-05-17",
    "end_date": "2025-05-18",
    "title": "Egyházi rendezvény"
  },
  {
    "start_date": "2025-06-07",
    "end_date": "2025-06-07",
    "title": "Holi",
    "description": "A boldogság és a barátság színes porokká válnak. ",
    "url": "/",
    "thumbnail": "images/logo.png"
  },
  {
    "start_date": "2025-07-25",
    "end_date": "2025-07-27",
    "title": "Búcsú",
    "description": "Krisna-völgy legnagyobb eseménye",
    "url": "/",
    "thumbnail": "images/logo.png"
  },
  {
    "start_date": "2025-08-16",
    "end_date": "2025-08-17",
    "title": "Egyházi rendezvény"
  },
  {
    "start_date": "2025-08-30",
    "end_date": "2025-08-31",
    "title": "Egyházi rendezvény"
  },
  {
    "start_date": "2025-10-26",
    "end_date": "2025-10-26",
    "title": "Egyházi rendezvény"
  }
]

const sortedEvents = _events.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime())
const allComingEvents = sortedEvents.filter((event) => new Date(event.start_date) > new Date())
const touristComingEvents = allComingEvents.filter((event) => event.url )

export { allComingEvents, touristComingEvents }
