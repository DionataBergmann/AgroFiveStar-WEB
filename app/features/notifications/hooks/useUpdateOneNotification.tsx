import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useUpdateOneNotificationMutation } from '../graphql/mutations.generated'

export default function useUpdateOneNotification({ refetch }) {
  const toast = useToast()

  const [mutate, updatedNotification] = useUpdateOneNotificationMutation({
    refetchQueries: ['getNotifications'],
  })

  interface UpdateOneNotificationProps {
    id: string
    title: string
    description: string
    userId: string
  }

  async function updateOneNotification(input: UpdateOneNotificationProps) {
    const { id, title, description, userId } = input

    try {
      const { data: updatedNotification } = await mutate({
        variables: {
          id,
          notification: {
            title,
            description,
            userId
          },
        },
      })

      await refetch()

      toast({
        title: 'Sucesso!',
        description: 'Notificação atualizada com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      return updatedNotification
    } catch (error) {
      catchError(error)
    }
  }

  return { updateOneNotification, updatedNotification }
}
