import StrapiButton from './StrapiButton'

export interface SubscribeForm {
  subscribe: Subscribe
}

export interface Subscribe {
  id: number
  title: string
  email_entry_field: string
  cta: string
  button: StrapiButton
}
