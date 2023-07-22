// Components
import CardContainer from './CardContainer'
import CardFooter from './CardFooter'
import CardTitle from './CardTitle'

interface Props {
  className: string
  href: string
  target: '_self' | '_blank'
  rel: 'noreferrer' | 'noopener'
  title: string
  footerMessage: string
  icon: React.ReactNode
}

export default function Card({
  className,
  href,
  target,
  rel,
  title,
  footerMessage,
  icon
}: Props): JSX.Element {
  return (
    <CardContainer className={className} href={href} target={target} rel={rel}>
      <CardTitle title={title} />
      <CardFooter footerMessage={footerMessage} icon={icon} />
    </CardContainer>
  )
}
