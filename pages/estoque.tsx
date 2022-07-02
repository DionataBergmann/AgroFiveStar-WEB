import React from 'react'

import { AdminTemplate } from '@app/atomic/templates/AdminTemplate'
import { InventoriesTemplate } from '@app/atomic/templates/InventoriesTemplate'

const InventoryScreen = () => {
  return <InventoriesTemplate />
}

InventoryScreen.template = AdminTemplate

export default InventoryScreen
