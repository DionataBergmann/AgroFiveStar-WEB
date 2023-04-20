import React from 'react'

import { pxToRem } from '@app/common/theme/utils'
import { Button, Flex, Spinner, Text } from '@chakra-ui/react'

interface LayoutTemplateProps {
  label?: string
  title?: string
  loading?: boolean
  createButtonLabel?: string
  children?: React.ReactNode
  onCreate?: () => void
}

export const LayoutTemplate = ({
  onCreate,
  title,
  loading,
  label,
  children,
  createButtonLabel,
}: LayoutTemplateProps) => {
  return (
    <Flex bgColor="white" flexDirection="column">
      <Flex wrap="wrap" gridGap="10px">
        {label && (
          <Button
            variant="outline"
            bgColor="primary"
            color="white"
            w="auto"
            mr={pxToRem(20)}
            fontSize="md"
            fontWeight="500"
            borderRadius={pxToRem(5)}
            onClick={onCreate}
            _hover={{ bg: '#53754a' }}
          >
            {createButtonLabel
              ? createButtonLabel
              : `Adicionar  ${label}`}
          </Button>
        )}
      </Flex>
      {title && (
        <Text
          color="primary"
          fontWeight="500"
          fontSize="lg"
          marginTop={pxToRem(30)}
          textAlign="center"
        >
          {title}
        </Text>
      )}
      <Flex marginTop={pxToRem(25)}>
        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="silver"
            color="bossanova"
            size="xl"
          />
        ) : (
          children
        )}
      </Flex>
    </Flex>
  )
}
