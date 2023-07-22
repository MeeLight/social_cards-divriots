interface Props {
  className?: string
  children: React.ReactNode
}

export default function Container({ className, children }: Props): JSX.Element {
  return <div className={className}>{children}</div>
}
