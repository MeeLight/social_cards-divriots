// Components
import CardFooterMessage from '../CardFooterMessage'
import CardIcon from '../CardIcon'

interface Props {
  footerMessage: string
  icon: React.ReactNode
}

export default function CardFooter({
  footerMessage,
  icon
}: Props): JSX.Element {
  return (
    <div
      className='
        flex
        h-max
        w-max
        relative
        flex-row
        flex-wrap
        rounded
        items-center
        justify-between
      '
    >
      <CardFooterMessage footerMessage={footerMessage} />
      <CardIcon icon={icon} />
    </div>
  )
}
