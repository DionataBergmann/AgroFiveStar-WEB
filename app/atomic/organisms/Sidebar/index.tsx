import React from 'react'

import { SidebarMenuItem } from '@app/atomic/molecules/SidebarMenuItem'
import { menuItems } from '@app/atomic/organisms/Sidebar/menu-items'
import { Box, Flex, Img, Text, useDisclosure } from '@chakra-ui/react'

export const Sidebar = () => {
  const { isOpen } = useDisclosure({
    defaultIsOpen: true,
  })

  return (
    <Flex
      width="230px"
      height="100%"
      bgColor="primary"
      boxShadow="lg"
      flexDir="column"
      transition=".3s"
      position={'fixed'}
      zIndex={20}
    >
      <Box align="center">
        <Img w="300px" src="/assets/logo/logo_branca.png" />
        <Text marginTop={-50} color="secundary" fontSize={20} fontWeight='bold'>Agro Assist</Text>
      </Box>

      <Box p={6}></Box>
      <Flex flex={1} flexDir="column" overflow="hidden">
        {menuItems.map((item) => (
          <SidebarMenuItem
            isSmall={!isOpen}
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </Flex>
    </Flex>
  )
}
