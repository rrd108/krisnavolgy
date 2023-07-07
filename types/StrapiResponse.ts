export default interface StrapiResponse<T> {
  data: {
    id: number
    attributes: T
  }
  meta: Record<string, unknown>
}
