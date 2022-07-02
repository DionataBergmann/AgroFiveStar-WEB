import { BsBook, BsHouse } from 'react-icons/bs'
import { BsCurrencyDollar } from 'react-icons/bs'
import { FaTractor } from 'react-icons/fa'
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
    label: 'Máquinas',
    href: '/machines',
    icon: FaTractor,
  },
  {
    label: 'Financeiro',
    href: '/financial',
    icon: BsCurrencyDollar,
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
