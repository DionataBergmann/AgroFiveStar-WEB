import { BsBook, BsHouse } from 'react-icons/bs'
import { FaTasks } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { IoIosFlower } from 'react-icons/io'
import { HiDocumentReport } from "react-icons/hi";

export const menuItems = [
  {
    label: 'Inicial',
    href: '/initial',
    icon: BsHouse,
  },
  {
    label: 'Áreas',
    href: '/areas',
    icon: BsBook,
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
]
