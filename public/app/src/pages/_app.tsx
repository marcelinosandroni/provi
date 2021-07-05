import { Layout } from 'templates/Base'
import { ProviTheme } from '../styles/theme'

export default function Provi({ Component, pageProps }) {
  return (
    <ProviTheme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviTheme>
  )
}
