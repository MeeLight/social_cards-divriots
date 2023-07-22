import Icon from '@components/Icon'

interface Props {
  icon: React.ReactNode
}

export default function CardIcon({ icon }: Props): JSX.Element {
  return (
    <Icon
      className='
        absolute
        mb-10
        left-40
        rotate-[350deg]
        min-h-[9rem]
        min-w-[9rem]
      '
    >
      {icon}
    </Icon>
  )
}
