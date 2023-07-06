export interface ReviewSection {
  title: string
  reviews: Review[]
}

export interface Review {
  id: number
  content: string
  name: string
}
