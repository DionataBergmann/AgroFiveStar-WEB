import React from 'react'

import { LineChart } from '@app/atomic/organisms/Graphics/LineChart'
import { InputTaskProps } from '@app/features/tasks/helper'

import { LayoutTemplate } from '../LayoutTemplate'

export const ReportTemplate = () => {
  const defaultInitialValues: InputTaskProps = {
    id: null,
  }

  return (
    <LayoutTemplate>
      <LineChart />
    </LayoutTemplate>
  )
}
