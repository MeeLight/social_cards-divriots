interface Props {
  title: string
}

export default function CardTitle({ title }: Props): JSX.Element {
  return <h3 className='flex-wrap justify-start text-lg'>{title}</h3>
}
