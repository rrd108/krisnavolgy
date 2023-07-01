import StrapiButton from './StrapiButton'

export interface SubscribeForm {
  subscribe: Subscribe
}

export interface Subscribe {
  id: number
  title: string
  call_to_action: string
  email_entry_field: string
  subscribe_button: StrapiButton
}
