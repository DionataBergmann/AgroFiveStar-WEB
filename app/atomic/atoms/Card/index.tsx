import React from 'react'

import { pxToRem } from '@app/common/theme/utils'
import { BoxProps, Center } from '@chakra-ui/react'

export type DrawerProps = {
  children?: React.ReactNode
} & BoxProps

export const Card: React.FC<DrawerProps> = ({
  children,
  ...props
}) => {
  return (
    <Center
      w="100%"
      shadow="md"
      borderRadius={pxToRem(10)}
      p={pxToRem(20)}
      bgColor="white"
      border="1px solid"
      borderColor="rgba(0,0,0,0.05)"
      {...props}
    >
      {children}
    </Center>
  )
}
