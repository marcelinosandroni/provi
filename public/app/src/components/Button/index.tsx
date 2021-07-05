import * as S from './styles'

export const Button = ({ label }) => {
  return (
    <S.Container>
      <S.Content>{label}</S.Content>
    </S.Container>
  )
}
