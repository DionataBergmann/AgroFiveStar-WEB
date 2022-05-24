import React from 'react'

import { Sidebar } from '@app/atomic/organisms/Sidebar'
import { Topbar } from '@app/atomic/organisms/Topbar'
import { pxToRem } from '@app/common/theme/utils'
import { Box, BoxProps, Flex } from '@chakra-ui/react'

type AdminTemplateProps = {
  children: React.ReactNode
  hasPadding?: boolean
} & BoxProps

export const AdminTemplate = ({
  children,
  hasPadding = true,
  ...props
}: AdminTemplateProps) => {
  return (
    <Box bgColor="white" minH="100vh">
      <Topbar />
      <Flex h="100%">
        <Sidebar />
        <Box
          marginLeft={pxToRem(230)}
          p={hasPadding ? 8 : 0}
          w="100%"
          {...props}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  )
}
