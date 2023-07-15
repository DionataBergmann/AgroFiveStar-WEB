import React from 'react'

import { LineChart } from '@app/atomic/organisms/Graphics/LineChart'
import { VerticalBarChart } from '@app/atomic/organisms/Graphics/VerticalBarChart'
import { InputTaskProps } from '@app/features/tasks/helper'
import { Box, Divider } from '@chakra-ui/react'

import { LayoutTemplate } from '../LayoutTemplate'

export const ReportTemplate = () => {
  const defaultInitialValues: InputTaskProps = {
    id: null,
  }

  return (
    <LayoutTemplate>
      <Box flexDir="column" w="98%">
        <LineChart />
        <Divider p={6
        } />
        <VerticalBarChart />
      </Box>
    </LayoutTemplate>
  )
}
