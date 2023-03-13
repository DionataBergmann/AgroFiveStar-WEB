import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useDeleteOneTaskMutation } from '../graphql/mutation.generated'

export default function useRemoveTask() {
  const toast = useToast()

  const [mutate, data] = useDeleteOneTaskMutation()

  async function remove(id: string) {
    const result = await mutate({
      variables: {
        input: {
          id: id,
        },
      },
      refetchQueries: ['getTasks'],
    })

    return result
  }

  async function removeTask(id: string) {
    try {
      await remove(id)
      toast({
        title: 'Sucesso!',
        description: 'Tarefa removida com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
    } catch (error) {
      catchError(error)
    }
  }

  return { data, removeTask }
}
