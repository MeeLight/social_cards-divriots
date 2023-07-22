// Icons
import { DiscordIcon, LinkedInIcon, TwitterIcon } from '@assets/icons'

export interface ISocialData {
  className: string
  href?: string
  target?: string
  rel?: string
  title: string
  footerMessage: string
  icon: React.ReactNode
}

export const socialData: ISocialData[] = [
  {
    className: 'bg-discord text-slate-200',
    title: 'Join our community on Discord',
    footerMessage: 'Join us',
    icon: <DiscordIcon color='#ffffff' opacity={0.3} />
  },
  {
    className: 'bg-twitter text-slate-200',
    title: 'Check our latest news on Twitter',
    footerMessage: 'Follow us',
    icon: <TwitterIcon color='#ffffff' opacity={0.3} />
  },
  {
    className: 'bg-linkedIn text-slate-200',
    title: 'Check out our updates on Linkedin',
    footerMessage: 'Follow us',
    icon: <LinkedInIcon color='#ffffff' opacity={0.3} />
  }
]
