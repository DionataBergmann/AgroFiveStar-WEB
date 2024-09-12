import React from 'react'

import { AdminTemplate } from '@app/atomic/templates/AdminTemplate'
import { NotificationTemplate } from '@app/atomic/templates/NotificationTemplate'

const NotificationScreen = () => {
  return <NotificationTemplate />
}

NotificationScreen.template = AdminTemplate

export default NotificationScreen
