import React from 'react'

import { Img, Text } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'

interface FieldCardTextProps {
  title?: string
  acre?: number
  fieldImage: any
  imagePath: string
}
export const FieldCardText = React.memo(
  ({ title, acre, fieldImage, imagePath }: FieldCardTextProps) => {
    return (
      <Flex
        flexDirection="column"
        w="100%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Img mt="10px" w="100%" h="300px" src={imagePath} />
        <Box w="100%" marginTop="10px">
          <Text fontSize="md" align="center" color="white">
            <b>Nome:</b> {title}
          </Text>
        </Box>
        <Box w="100%">
          <Text fontSize="md" align="center" color="white">
            <b> Hectares:</b> {acre}
          </Text>
        </Box>
      </Flex>
    )
  },
)
