// Layouts
import Layout from '@layouts/index'

// Components
import Card from '@components/Card'
import Container from '@components/Container'

// Data
import { socialData, type ISocialData } from '@data/socialData'

export default function App(): JSX.Element {
  return (
    <Layout>
      <Container
        className='
        h-screen
        w-full
        px-6
        flex
        flex-row
        gap-6
        flex-wrap
        justify-center
        items-center
      '
      >
        {socialData.map(
          ({
            className,
            title,
            footerMessage,
            icon
          }: ISocialData): React.ReactNode => (
            <Card
              className={className}
              href='#'
              title={title}
              footerMessage={footerMessage}
              icon={icon}
              target='_self'
              rel='noopener'
            />
          )
        )}
      </Container>
    </Layout>
  )
}
