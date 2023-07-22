interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return <main className='h-screen min-w-full'>{children}</main>
}
