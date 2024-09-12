import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { InputNotificationsProps } from '../helper'
import { useCreateOneNotificationMutation } from '../graphql/mutations.generated'

export default function useCreateNotification({ refetch }) {
  const toast = useToast()

  const [createOneNotificationMutation, { data: createdNotification }] =
    useCreateOneNotificationMutation({
      refetchQueries: ['getNotifications'],
    })

  async function createOneNotification(values: InputNotificationsProps) {
    try {
      const { title, description, userId } = values

      const { data: createdNotification } = await createOneNotificationMutation(
        {
          variables: {
            input: {
              title, 
              description, 
              userId
            },
          },
        },
      )

      toast({
        title: 'Sucesso!',
        description: 'Notificação adicionada com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      refetch()
      return createdNotification
    } catch (error) {
      catchError(error)
    }
  }

  return { createOneNotification, createdNotification }
}
