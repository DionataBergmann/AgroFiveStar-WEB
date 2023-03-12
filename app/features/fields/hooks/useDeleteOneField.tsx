import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useDeleteOneFieldMutation } from '../graphql/mutations.generated'

export default function useRemoveField() {
  const toast = useToast()

  const [mutate, data] = useDeleteOneFieldMutation()

  async function remove(id?: string) {
    const result = await mutate({
      variables: {
        id,
      },
      refetchQueries: ['getFields'],
    })

    return result
  }

  async function removeField(id?: string) {
    try {
      await remove(id)
      toast({
        title: 'Sucesso!',
        description: 'Campo removido com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
    } catch (error) {
      catchError(error)
    }
  }

  return { data, removeField }
}
