import React from 'react'

import { AdminTemplate } from '@app/atomic/templates/AdminTemplate'
import { InventoriesTemplate } from '@app/atomic/templates/InventoriesTemplate'

const AreasScreen = () => {
  return <InventoriesTemplate />
}

AreasScreen.template = AdminTemplate

export default AreasScreen
