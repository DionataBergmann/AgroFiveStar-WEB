import React, { FunctionComponent } from 'react'
import { useMemo } from 'react'

import { pxToRem } from '@app/common/theme/utils'
import { Flex, Icon, Link, Text, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export type SidebarMenuItemProps = {
  label: string
  href: string
  icon: FunctionComponent<any>
  isSmall?: boolean
}

export const SidebarMenuItem = ({
  label,
  href,
  icon,
  isSmall,
}: SidebarMenuItemProps) => {
  const router = useRouter()
  const isActive = useMemo(
    () => router.pathname.includes(href),
    [href, router.pathname],
  )
  return (
    <Tooltip isDisabled={!isSmall} placement="right" label={label}>
      <Link href={href}>
        <Flex
          key={href}
          w="100%"
          borderRight="6px solid"
          transition=".3s"
          borderColor={isActive ? 'transparent' : 'transparent'}
          h={pxToRem(43)}
          bgColor={isActive ? 'tertiary' : 'transparent'}
          my={1}
          pl={6}
          alignItems="center"
          _hover={{
            bgColor: 'tertiary',
          }}
          cursor="pointer"
        >
          <Icon
            w={pxToRem(22)}
            h={pxToRem(22)}
            color={isActive ? 'white' : 'white'}
            mr={2}
            as={icon}
          />

          <Text
            opacity={isSmall ? 0 : 1}
            transition={'.3s'}
            whiteSpace="nowrap"
            fontSize="md"
            color="white"
          >
            {label}
          </Text>
        </Flex>
      </Link>
    </Tooltip>
  )
}
