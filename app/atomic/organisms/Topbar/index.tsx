import React from 'react'

import { pxToRem } from '@app/common/theme/utils'
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

export const Topbar = () => {
  return (
    <Flex
      bgColor="primary"
      boxShadow="md"
      w="100%"
      px={6}
      py={3}
      minH={pxToRem(70)}
      flexDirection="column"
      justifyContent="center"
      position={'sticky'}
      top={0}
      zIndex={10}
    >
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          w="100%"
          justifyContent="flex-end"
          h="100%"
          color="gray.700"
          alignItems="center"
        >
          <Menu>
            <MenuButton>
              <Flex
                gridGap="5px"
                alignItems="center"
                w="100%"
                wrap="wrap"
                justifyContent="flex-end"
              ></Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Sair</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  )
}
