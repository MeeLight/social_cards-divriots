interface Props {
  className?: string
  children: React.ReactNode
}

export default function Icon({ className, children }: Props): JSX.Element {
  return (
    <div
      className={`
      h-10
      w-10
      ${className}
    `}
    >
      {children}
    </div>
  )
}
