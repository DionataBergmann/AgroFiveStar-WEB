import React from 'react'

import { pxToRem } from '@app/common/theme/utils'
import { getCookie } from '@app/common/utils/cookies'
import { useAuthContext } from '@app/features/auth/context'
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'

export const Topbar = () => {
  const { logout } = useAuthContext()
  const name = getCookie('name')
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
          mr="20px"
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
              >
                {/* <Img
                  w={'35px'}
                  h={'35px'}
                  src={'/assets/icons/avatar.svg'}
                  borderRadius="50%"
                  border="1px solid"
                /> */}
                <Icon
                  as={AiOutlineUser}
                  w={'30px'}
                  h={'30px'}
                  borderRadius="50%"
                  border="1px solid"
                  color="white"
                />
              </Flex>
            </MenuButton>
            <span style={{ marginLeft: '10px', color: 'white' }}>
              {name}
            </span>
            <MenuList>
              <MenuItem onClick={logout}>Sair</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  )
}
