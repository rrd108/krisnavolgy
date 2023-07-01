export default interface StrapiCollectionResponse<T> {
  [x: string]: any
  data: {
    id: number
    attributes: {
      [x: string]: T[]
    }
  }[]
  meta: Record<string, unknown>
}
