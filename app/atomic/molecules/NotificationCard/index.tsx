import React from 'react'

import { Notification, Storage } from '@app/generated/graphql'
import { Button, Flex, Grid, Text } from '@chakra-ui/react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'

import { MoreOptionsMenuButton } from '../MoreOptionsButtons'
import { InputNotificationsProps } from '@app/features/notifications/helper'
import useListUsers from '@app/features/tasks/hooks/useListUsers'

type Props = {
  data: Notification
  id?: string
  onEdit?: any
  title?: string
  description?: string
  userId?: string
  onDelete?: (id: string) => Promise<void>
  setInitialValues?: (value: InputNotificationsProps) => void
}

export const NotificationCard: React.FC<Props> = ({
  data,
  id,
  title,
  description,
  userId,
  onEdit,
  onDelete,
  setInitialValues,
}) => {
  const { data: UserData } = useListUsers(userId)

  function handleOnEdit() {
    setInitialValues({
      id,
      title,
      description,
      userId
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
          '1fr 1fr 1fr 1fr',
        ]}
        w="100%"
        gridGap="5px"
      >
        <Text color="gray.700" fontWeight="normal" fontSize="sm">
          {data?.title}
        </Text>
        <Text color="gray.700" fontWeight="normal" fontSize="sm">
          {data?.description}
        </Text>
        <Text color="gray.700" fontWeight="normal" fontSize="sm">
        {UserData?.users?.nodes?.[0]?.name}
        </Text>
        <Text color="gray.700" fontWeight="normal" fontSize="sm">
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