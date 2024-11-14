import Link from 'next/link'
import { ReactNode } from 'react'
import LinkCard from './link-card'
import {
  MdAttachMoney,
  MdDashboard,
  MdOutlineSpaceDashboard,
} from 'react-icons/md'
import { SiHackthebox } from 'react-icons/si'
import { FaFileInvoiceDollar, FaHeart, FaPowerOff } from 'react-icons/fa'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { BiCalendar } from 'react-icons/bi'
import { FcTodoList } from 'react-icons/fc'
import { RiTodoFill } from 'react-icons/ri'
import { IoIosSettings, IoMdContacts } from 'react-icons/io'
import { VscSymbolInterface } from 'react-icons/vsc'
import { CgProfile } from 'react-icons/cg'

type HeaderProps = {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex mt-3 container">
      <header className="max-w-[240px] w-full h-full">
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
        <div className="w-[240px] h-[1px] bg-[#E0E0E0] bg-opacity-10 my-6"></div>
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
            <LinkCard
              label="Faturas"
              icon={<FaFileInvoiceDollar />}
              href={'/invoice'}
            />
            <LinkCard
              label="Elementos UI"
              icon={<VscSymbolInterface />}
              href={'/uielement'}
            />
            <LinkCard label="Perfil" icon={<CgProfile />} href={'/profile'} />
          </div>
          <div className="w-[240px] h-[1px] bg-[#E0E0E0] bg-opacity-10 my-6"></div>
          <div className="flex flex-col gap-2">
            <LinkCard
              label="Configurações"
              icon={<IoIosSettings />}
              href={'/settings'}
            />
            <LinkCard label="Sair" icon={<FaPowerOff />} href={'/logout'} />
          </div>
        </div>
      </header>
      <div>{children}</div>
    </div>
  )
}

export default Header
