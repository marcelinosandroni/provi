import { Button } from 'components/Button'
import { Menu } from 'components/Menu'
import Image from 'next/image'
import * as S from './styles'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.scrollY >= 150)
    }
    return () => {
      window.onscroll = null
    }
  }, [])

  return (
    <S.Wraper {...{ scrolled }}>
      <S.Container>
        {/* <Image
        src={!scrolled ? `/provi.svg` : `/provi-black.svg`}
        width={138}
        height={41}
        alt="Logo da Provi"
      /> */}
        <S.Logo {...{ scrolled }} />
        <Menu {...{ scrolled }} />
        <Button label="Transformar minha carreira" />
      </S.Container>
    </S.Wraper>
  )
}
