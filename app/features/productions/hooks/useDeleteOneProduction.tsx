import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useDeleteOneProductionMutation } from '../graphql/mutation.generated'

export default function useRemoveProduction() {
  const toast = useToast()

  const [mutate, data] = useDeleteOneProductionMutation()

  async function remove(id: string) {
    const result = await mutate({
      variables: {
        input: {
          id: id,
        },
      },
      refetchQueries: ['getProductions'],
    })

    return result
  }

  async function removeProduction(id: string) {
    try {
      await remove(id)
      toast({
        title: 'Sucesso!',
        description: 'Produção removida com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
    } catch (error) {
      catchError(error)
    }
  }

  return { data, removeProduction }
}
