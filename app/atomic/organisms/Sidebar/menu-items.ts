import { BsBook, BsHouse } from 'react-icons/bs'
import { FaTasks } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { IoIosFlower } from 'react-icons/io'

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
  // {
  //   label: 'Financeiro',
  //   href: '/financial',
  //   icon: BsCurrencyDollar,
  // },
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
