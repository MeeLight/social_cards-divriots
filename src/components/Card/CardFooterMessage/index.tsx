interface Props {
  footerMessage: string
}

export default function CardFooterMessage({ footerMessage }: Props): JSX.Element {
  return <span className='justify-start'>{footerMessage}</span>
}
