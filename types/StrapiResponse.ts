export default interface StrapiResponse<T> {
  [x: string]: any
  data: {
    id: number
    attributes: T
  }
  meta: Record<string, unknown>
}
