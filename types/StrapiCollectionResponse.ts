export default interface StrapiCollectionResponse<T> {
  data: {
    id: number
    attributes: {
      [x: string]: T | T[]
    }
  }[]
  meta: Record<string, unknown>
}
