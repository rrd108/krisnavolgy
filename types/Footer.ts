import { Subscribe } from './SubscribeForm'

export interface FooterItem {
  title: string
  item: {
    fontawesome_icon: string
    content: string
    link: string
  }[]
}

export interface SocialMedia {
  title: string
  social_media_bars: {
    data: {
      attributes: {
        social_media_icons: {
          fontawesome_icon: string
          link: string
        }
      }
    }[]
  }
}

export interface Footer {
  opening_hours: FooterItem
  contact: FooterItem
  website_navigation: FooterItem
  social_media_section: SocialMedia
  subscribe: Subscribe
}
