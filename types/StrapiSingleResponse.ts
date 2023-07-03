export default interface StrapiSingleResponse<T> {
  data: {
    id: number
    attributes: T
  }
  meta: Record<string, unknown>
}
