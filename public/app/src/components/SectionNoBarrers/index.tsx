import * as S from './styles'
import { Card } from 'components/Card'

export const SectionNoBarrers = () => {
  const cardsContent = [
    {
      image: '/nobarrier1.png',
      text: 'Mais de <strong>70.000 estudantes</strong> já transformaram suas carreiras com o financiamento Provi.',
    },
    {
      image: '/nobarrier2.png',
      text: 'Mais de <strong>1.000 escolas parceiras</strong> usam nossa plataforma como meio de pagamento.',
    },
    {
      image: '/nobarrier3.png',
      text: 'Mais de <strong>220 milhões de reais</strong> em crédito voltados para a educação.',
    },
  ]
  return (
    <S.Wraper>
      <S.Container>
        <S.Title>
          Histórico de crédito <strong>não pode ser</strong> uma{' '}
          <strong>barreira pra quem quer estudar.</strong>
        </S.Title>
        <S.CardContainer>
          {cardsContent.map((cardContent) => (
            <Card
              key={cardContent.image.replace(/\.*$/, '')}
              {...cardContent}
            />
          ))}
        </S.CardContainer>
      </S.Container>
    </S.Wraper>
  )
}
