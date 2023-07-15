import React from 'react'

import { InputStorageProps } from '@app/features/storage/helper'
import { Storage } from '@app/generated/graphql'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'

import { MoreOptionsMenuButton } from '../MoreOptionsButtons'

type Props = {
  data: Storage
  id?: string
  onEdit?: any
  name?: string
  amount?: number
  onDelete?: (id: string) => Promise<void>
  setInitialValues?: (value: InputStorageProps) => void
}

export const StorageCard: React.FC<Props> = ({
  data,
  id,
  name,
  amount,
  onEdit,
  onDelete,
  setInitialValues,
}) => {
  function handleOnEdit() {
    setInitialValues({
      id: id,
      name: name,
      amount: amount,
    })

    onEdit()
  }

  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      padding="10px 0px"
      display="flex"
      flexDirection="column"
      position="relative"
      w="100%"
      borderBottom="1px solid"
      borderColor="gray.300"
    >
      <Flex display="flex" w="100%" justifyContent="space-between">
        <Grid
          gridTemplateColumns={['1fr', '1fr', '1fr', '1fr ']}
          w="100%"
          gridGap="5px"
        >
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {data?.name}
          </Text>
        </Grid>
        <MoreOptionsMenuButton
          options={[
            {
              title: 'Editar informações',
              icon: FiEdit2,
              onClick: () => handleOnEdit(),
            },
            {
              title: 'Deletar Item',
              icon: FaRegTrashAlt,
              onClick: async () => await onDelete(data.id),
              showDeleteWarning: true,
            },
          ]}
          positionConfig={{ top: '0px', right: '0px' }}
        />
      </Flex>
    </Flex>
  )
}
