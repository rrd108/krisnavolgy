import StrapiButton from './StrapiButton'

export default interface SubscribeForm {
  id: number
  title: string
  call_to_action: string
  email_entry_field: string
  subscribe_button: StrapiButton
}
