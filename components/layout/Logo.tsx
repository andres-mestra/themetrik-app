import Image from 'next/image'
import Link from 'next/link'

interface Props {
  image?: string
  text?: string
}

export const Logo = ({ image, text }: Props) => {
  return (
    <Link href="/">
      <a>
        {image ? (
          <figure className="logo">
            <Image
              src={image}
              width={200}
              height={200}
              objectFit="cover"
              alt="logo"
            />
          </figure>
        ) : (
          <h3 className="logo__text">{text}</h3>
        )}
      </a>
    </Link>
  )
}
