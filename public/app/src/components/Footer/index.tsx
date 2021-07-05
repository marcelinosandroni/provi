import Image from 'next/image'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <Image src="/provi.svg" width={138} height={41} alt="Logo da Provi" />
      <S.Title>Hello</S.Title>
    </S.Container>
  )
}
