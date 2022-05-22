import Image from 'next/image'
import { GhostSettings } from '@lib/ghost'

interface Props {
  coverImage: GhostSettings['coverImage']
  description: GhostSettings['description']
}

export const Cover = ({ coverImage, description }: Props) => {
  const dimensions = coverImage?.dimensions
  const imageUrl = coverImage?.url

  return (
    <section id="#" className="cover__container">
      <div className="cover__info">
        <h1 className="cover_description">
          {description}
          <span className="cover__point">.</span>
        </h1>
        <a href="#services" className="link__contain">
          Our services
        </a>
      </div>
      <img
        className="cover__image"
        alt="imagen presentación"
        src={imageUrl || ''}
      />
    </section>
  )
}
