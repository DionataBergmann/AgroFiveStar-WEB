import React from 'react'

import { InputTaskProps } from '@app/features/tasks/helper'
import { Task } from '@app/generated/graphql'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'

import { MoreOptionsMenuButton } from '../MoreOptionsButtons'

type Props = {
  data: Task
  id?: string
  title: string
  description: string
  onEdit?: any
  onDelete?: (id: string) => Promise<void>
  setInitialValues?: (value: InputTaskProps) => void
}

export const TaskCard: React.FC<Props> = ({
  data,
  id,
  title,
  description,
  onEdit,
  onDelete,
  setInitialValues,
}) => {
  function handleOnEdit() {
    setInitialValues({
      id: id,
      title,
      description,
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
            {data?.title}
          </Text>
          <Text color="gray.700" fontWeight="normal" fontSize="sm">
            {data?.description}
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
