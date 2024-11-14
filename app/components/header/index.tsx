import Link from 'next/link'
import { ReactNode } from 'react'
import LinkCard from './link-card'
import {
  MdAttachMoney,
  MdDashboard,
  MdOutlineSpaceDashboard,
} from 'react-icons/md'
import { SiHackthebox } from 'react-icons/si'
import { FaHeart } from 'react-icons/fa'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { BiCalendar } from 'react-icons/bi'
import { FcTodoList } from 'react-icons/fc'
import { RiTodoFill } from 'react-icons/ri'
import { IoMdContacts } from 'react-icons/io'

type HeaderProps = {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex mt-8 container">
      <header className="  max-w-[240px] w-full">
        <Link href={'/'} className="text-2xl ">
          <span className="font-bold text-[#4880FF]">RSF</span> Dashboard
        </Link>
        <div className="mt-12 flex flex-col gap-3">
          <LinkCard label="Dashboard" icon={<MdDashboard />} href={'/'} />
          <LinkCard
            label="Produtos"
            icon={<SiHackthebox />}
            href={'/products'}
          />
          <LinkCard label="Favoritos" icon={<FaHeart />} href={'/favorities'} />
          <LinkCard
            label="Inbox"
            icon={<IoChatbubbleEllipsesSharp />}
            href={'/inbox'}
          />
          <LinkCard
            label="Produtos em Estoque"
            icon={<MdOutlineSpaceDashboard />}
            href={'/stock'}
          />
        </div>
        <div className="w-[240px] h-[1px] bg-gray-300/20 my-6"></div>
        <div>
          <h2 className="font-light">Paginas</h2>
          <div className="mt-2 flex flex-col gap-3">
            <LinkCard
              label="Preços"
              icon={<MdAttachMoney />}
              href={'/pricing'}
            />
            <LinkCard
              label="Calendario"
              icon={<BiCalendar />}
              href={'/calendar'}
            />
            <LinkCard
              label="Lista de afazeres"
              icon={<RiTodoFill />}
              href={'/todo'}
            />
            <LinkCard
              label="Contato"
              icon={<IoMdContacts />}
              href={'/contact'}
            />
          </div>
        </div>
      </header>
      <div>{children}</div>
    </div>
  )
}

export default Header
