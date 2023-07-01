export default interface StrapiSingleResponse<T> {
  [x: string]: any
  data: {
    id: number
    attributes: T
  }
  meta: Record<string, unknown>
}
