import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useDeleteOneInventoryMutation } from '../graphql/mutatiion.generated'

export default function useRemoveInventory() {
  const toast = useToast()

  const [mutate, data] = useDeleteOneInventoryMutation()

  async function remove(id: string) {
    const result = await mutate({
      variables: {
        input: {
          id: id,
        },
      },
      refetchQueries: ['getInventories'],
    })

    return result
  }

  async function removeInventory(id: string) {
    try {
      await remove(id)
      toast({
        title: 'Sucesso!',
        description: 'Estoque removido com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
    } catch (error) {
      catchError(error)
    }
  }

  return { data, removeInventory }
}
