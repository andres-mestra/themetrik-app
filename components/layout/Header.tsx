import { useEffect, useRef, useState } from 'react'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export const Header = ({ children }: Props) => {
  const headerRef = useRef<HTMLElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const listenerScroll = function () {
      setScrollPosition((oldPosition) => {
        const newPosition = globalThis.scrollY
        if (headerRef.current) {
          const isDownShow = globalThis.scrollY > 0
          headerRef.current.classList.toggle('header_down', isDownShow)

          const isDownHide = newPosition > oldPosition && newPosition >= 500
          headerRef.current.classList.toggle('header_hide', isDownHide)
        }
        return newPosition
      })
    }

    globalThis.addEventListener('scroll', listenerScroll)

    return () => {
      globalThis.removeEventListener('scroll', listenerScroll)
    }
  }, [])

  return (
    <header ref={headerRef} className="header">
      {children}
    </header>
  )
}
