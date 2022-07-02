import { BsBook, BsHouse } from 'react-icons/bs'
import { BsCurrencyDollar } from 'react-icons/bs'
import { FaTractor } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { IoIosFlower } from 'react-icons/io'

export const menuItems = [
  {
    label: 'Inicial',
    href: '/admin/initial',
    icon: BsHouse,
  },
  {
    label: 'Áreas',
    href: '/admin/areas',
    icon: BsBook,
  },
  {
    label: 'Máquinas',
    href: '/admin/machines',
    icon: FaTractor,
  },
  {
    label: 'Financeiro',
    href: '/admin/financial',
    icon: BsCurrencyDollar,
  },
  {
    label: 'Estoque',
    href: '/admin/estoque',
    icon: FiBox,
  },
  {
    label: 'Produção',
    href: '/admin/production',
    icon: IoIosFlower,
  },
]
