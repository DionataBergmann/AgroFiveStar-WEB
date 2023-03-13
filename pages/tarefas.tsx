import React from 'react'

import { AdminTemplate } from '@app/atomic/templates/AdminTemplate'
import { TaskTemplate } from '@app/atomic/templates/TaskTemplate'

const TaskScreen = () => {
  return <TaskTemplate />
}

TaskScreen.template = AdminTemplate

export default TaskScreen
