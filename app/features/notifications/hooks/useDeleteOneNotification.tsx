import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'
import { useDeleteOneNotificationMutation } from '../graphql/mutations.generated'


export default function useRemoveNotification() {
  const toast = useToast()

  const [mutate, data] = useDeleteOneNotificationMutation()

  async function remove(id: string) {
    const result = await mutate({
      variables: {
        input: {
          id: id,
        },
      },
      refetchQueries: ['getNotifications'],
    })

    return result
  }

  async function removeNotification(id: string) {
    try {
      await remove(id)
      toast({
        title: 'Sucesso!',
        description: 'Notificação removida com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
    } catch (error) {
      catchError(error)
    }
  }

  return { data, removeNotification }
}
