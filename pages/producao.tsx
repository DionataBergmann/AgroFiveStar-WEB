import React from 'react'

import { AdminTemplate } from '@app/atomic/templates/AdminTemplate'
import { ProductionsTemplate } from '@app/atomic/templates/ProductionsTemplate'

const ProductionScreen = () => {
  return <ProductionsTemplate />
}

ProductionScreen.template = AdminTemplate

export default ProductionScreen
