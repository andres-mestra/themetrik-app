import Link from 'next/link'
import { GhostSettings } from '@lib/ghost'

interface Props {
  items: GhostSettings['navigation']
}

export const Navigation = ({ items }: Props) => {
  return (
    <nav className="nav">
      {items?.map(({ label, url }) => (
        <Link key={label} href={url}>
          <a className="nav__link">{label}</a>
        </Link>
      ))}
    </nav>
  )
}
