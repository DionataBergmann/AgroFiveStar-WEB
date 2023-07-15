import React, { useState } from 'react'

import { InputProductionProps } from '@app/features/productions/helper'
import { Production } from '@app/generated/graphql'
import { Button, Flex, Grid, Modal, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'

import { MoreOptionsMenuButton } from '../MoreOptionsButtons'
import { FieldForm } from '@app/atomic/organisms/FieldForm'
import { AddOrRemoveProductionForm } from '@app/atomic/organisms/AddOrRemoveProductionForm'

type Props = {
  data: Production
  id?: string
  name: string
  field: any
  amount: number
  onEdit?: any
  setAddOrRemoveIsOpen?: boolean
  onDelete?: (id: string) => Promise<void>
  setInitialValues?: (value: InputProductionProps) => void
}

export const ProductionCard: React.FC<Props> = ({
  data,
  id,
  name,
  field,
  amount,
  onEdit,
  onDelete,
  setInitialValues,
  setAddOrRemoveIsOpen,
}) => {
  function handleOnEdit() {
    setInitialValues({
      id: id,
      name: name,
      amount: amount,
      field: field,
    })
    onEdit()
  }
  function handleOnEditValue() {
    setInitialValues({
      id: id,
      name: name,
      amount: amount,
      field: field,
    })

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
            '35px 1fr 1fr 1fr 1fr 1fr 1fr ',
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
            {data?.amount}
          </Text>
        </Grid>
        <Button h={5} right={10} position="absolute" onClick={() => { setAddOrRemoveIsOpen(true), handleOnEditValue() }}>
          +/-
        </Button>
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
