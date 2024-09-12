import { BsBook } from 'react-icons/bs'
import { FaTasks, FaWarehouse } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { HiDocumentReport } from 'react-icons/hi'
import { IoIosFlower } from 'react-icons/io'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'

export const menuItems = [
  {
    label: 'Áreas',
    href: '/areas',
    icon: BsBook,
  },
  {
    label: 'Silos',
    href: '/silos',
    icon: FaWarehouse,
  },
  {
    label: 'Tarefas',
    href: '/tarefas',
    icon: FaTasks,
  },
  {
    label: 'Relatórios',
    href: '/relatorios',
    icon: HiDocumentReport,
  },
  {
    label: 'Estoque',
    href: '/estoque',
    icon: FiBox,
  },
  {
    label: 'Produção',
    href: '/producao',
    icon: IoIosFlower,
  },
  {
    label: 'Notificações',
    href: '/notificacoes',
    icon: IoChatbubbleEllipsesOutline,
  },
]
