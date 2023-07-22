interface Props {
  className: string
  href: string
  target: '_self' | '_blank'
  rel: 'noreferrer' | 'noopener'
  children: React.ReactNode
}

export default function CardContainer({
  className,
  href,
  target,
  rel,
  children
}: Props): JSX.Element {
  return (
    <a
      className={`
      min-h-[5rem]
      h-48
      w-82
      flex
      flex-col
      flex-wrap
      px-7
      py-5
      justify-between
      rounded
      outline-none
      overflow-hidden
      cursor-pointer
      transition-all
      hover:scale-riots
      hover:shadow-md
      hover:shadow-gray-400
      ${className}
    `}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}
