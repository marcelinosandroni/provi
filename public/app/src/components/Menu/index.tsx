import * as S from './styles'

type Props = {
  scrolled: boolean
}

export const Menu = ({ scrolled }: Props) => {
  const menuItems = [
    'Como funciona',
    'Quem somos',
    'Parceiros',
    'Dúvidas',
    'Blog',
    'Login',
  ]

  return (
    <S.Container {...{ scrolled }}>
      {menuItems.map((item) => (
        <S.MenuItem key={item}>{item}</S.MenuItem>
      ))}
    </S.Container>
  )
}
