import { SectionNoBarrers } from 'components/SectionNoBarrers'
import { SectionPhone } from 'components/SectionPhone'
import { SectionPresentation } from 'components/SectionPresentation'
import { SectionShareIncome } from 'components/SectionShareIncome'
import { SectionSpotlight } from 'components/SectionSpotlight'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <SectionPresentation />
      <SectionSpotlight />
      <SectionPhone />
      <SectionNoBarrers />
      <SectionShareIncome />
    </S.Container>
  )
}
