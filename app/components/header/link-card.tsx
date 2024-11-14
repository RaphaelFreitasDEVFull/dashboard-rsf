import Link from 'next/link'
import { ReactNode } from 'react'

type LinkCardProps = {
  href: string
  icon: ReactNode
  label: string
}

const LinkCard = ({ href, icon, label }: LinkCardProps) => {
  return (
    <div>
      <Link
        href={href}
        className="flex gap-3 items-center font-semibold hover:text-emerald-400"
      >
        {icon}
        {label}
      </Link>
    </div>
  )
}

export default LinkCard
