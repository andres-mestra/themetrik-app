import { useCallback } from 'react'
import { Twitter, Facebook, Instagram, LinkedIn, Iconoir } from 'iconoir-react'
import { GhostSettings } from '@lib/ghost'
import { ObjectLiteral } from '@types/common'

interface Props {
  twitter?: string
  facebook?: string
  others?: GhostSettings['secondary_navigation']
}

const ICON_FONT_SIZE = 18
const twitterURL = 'https://twitter.com/'
const facebookURL = 'https://www.facebook.com/'

const DefaultIcon = Iconoir
const iconsMedia: ObjectLiteral = {
  twitter: Twitter,
  facebook: Facebook,
  linkedin: LinkedIn,
  instagram: Instagram,
}

export const SocialLinks = ({ twitter, facebook, others = [] }: Props) => {
  const twitterLink = twitter
    ? twitterURL.concat(twitter.replace(/^@/, ``))
    : twitterURL
  const facebookLink = facebook
    ? facebookURL.concat(facebook.replace(/^\//, ``))
    : facebookURL

  return (
    <div className="socialMedia">
      {twitter && (
        <a
          className="socialMedia__link"
          title="twitter"
          target="_blank"
          rel="noopener noreferrer"
          href={twitterLink}
        >
          <Twitter fontSize={ICON_FONT_SIZE} />
        </a>
      )}
      {facebook && (
        <a
          className="socialMedia__link"
          title="facebook"
          target="_blank"
          rel="noopener noreferrer"
          href={facebookLink}
        >
          <Facebook fontSize={ICON_FONT_SIZE} />
        </a>
      )}

      {others.length &&
        others.map((social) => {
          const IconSocial = iconsMedia[social?.label] ?? DefaultIcon
          return (
            <a
              key={social?.label}
              className="socialMedia__link"
              target="_blank"
              rel="noopener noreferrer"
              title={social?.label}
              href={social?.url}
            >
              <IconSocial fontSize={ICON_FONT_SIZE} />
            </a>
          )
        })}
    </div>
  )
}
