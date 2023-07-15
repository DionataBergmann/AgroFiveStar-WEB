import React from 'react'

import { InputInventoryProps } from '@app/features/inventories/helper'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'

import { MoreOptionsMenuButton } from '../MoreOptionsButtons'

type Props = {
  data: any
  id?: string
  onEdit?: any
  name?: string
  provider?: string
  amount?: number
  storage?: any
  value?: number
  field?: any
  onDelete?: (id: string) => Promise<void>
  setInitialValues?: (value: InputInventoryProps) => void
}

export const InventoryCard: React.FC<Props> = ({
  data,
  id,
  name,
  provider,
  amount,
  storage,
  value,
  field,
  onEdit,
  onDelete,
  setInitialValues,
}) => {
  function handleOnEdit() {
    setInitialValues({
      id: id,
      name: name,
      amount: amount,
      provider: provider,
      storage: storage,
      field: field,
      value: value,
    })

    onEdit()
  }

  const FormatValue = ({ value }) => {
    return (
      <Text fontSize="sm">
        {value?.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
    )
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
          gridTemplateColumns={[
            '1fr',
            '1fr',
            '1fr',
            '35px 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          ]}
          w="100%"
          gridGap="5px"
        >
          <Text
            color="gray.700"
            fontWeight="normal"
            fontSize="sm"
          ></Text>
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {format(new Date(data?.createdAt), 'dd/MM/yyyy')}
          </Text>
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {data?.fields?.name}
          </Text>
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {data?.name}
          </Text>
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {storage?.name}
          </Text>
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {data?.provider}
          </Text>
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {data?.amount}
          </Text>
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {<FormatValue value={data?.value} />}
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
