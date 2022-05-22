import { Header } from './Header'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { SocialLinks } from './SocialLinks'
import { GhostSettings } from '@lib/ghost'

interface Props {
  settings: GhostSettings
  children?: JSX.Element | JSX.Element[]
}

export const Layout = ({ children, settings }: Props) => {
  const { navigation, secondary_navigation, twitter, facebook } = settings

  return (
    <>
      <Header>
        <Logo text="The Metrik." />
        <Navigation items={navigation} />
        <SocialLinks
          twitter={twitter}
          facebook={facebook}
          others={secondary_navigation}
        />
      </Header>
      {children}
    </>
  )
}
