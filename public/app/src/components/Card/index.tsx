import * as S from './styles'

export const Card = ({ image, text }) => (
  <S.Container>
    <S.Image src={image} />
    <S.Description dangerouslySetInnerHTML={{ __html: text }} />
  </S.Container>
)
