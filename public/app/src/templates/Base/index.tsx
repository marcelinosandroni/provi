import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import * as S from './styles'

export const Layout = ({ children }) => (
  <S.Container>
    <Header />
    {children}
    <Footer />
  </S.Container>
)
