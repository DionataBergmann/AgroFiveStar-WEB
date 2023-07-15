import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useDeleteOneStorageMutation } from '../graphql/mutation.generated'

export default function useRemoveStorage() {
  const toast = useToast()

  const [mutate, data] = useDeleteOneStorageMutation()

  async function remove(id: string) {
    const result = await mutate({
      variables: {
        input: {
          id: id,
        },
      },
      refetchQueries: ['getStorages'],
    })

    return result
  }

  async function removeStorage(id: string) {
    try {
      await remove(id)
      toast({
        title: 'Sucesso!',
        description: 'Silo removido com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
    } catch (error) {
      catchError(error)
    }
  }

  return { data, removeStorage }
}
