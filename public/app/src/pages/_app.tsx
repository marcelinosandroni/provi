import { GlobalStyle } from 'styles/global'
import { Layout } from 'templates/Base'
import { ProviTheme } from '../styles/theme'

export default function Provi({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ProviTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProviTheme>
    </>
  )
}
