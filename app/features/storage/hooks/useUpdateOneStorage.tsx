import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useUpdateOneStorageMutation } from '../graphql/mutation.generated'

export default function useUpdateOneStorage({ refetch }) {
  const toast = useToast()

  const [mutate, updatedStorage] = useUpdateOneStorageMutation({
    refetchQueries: ['getStorages'],
  })

  interface UpdateOneStorageProps {
    id: string
    name: string
    amount: number
  }

  async function updateOneStorage(input: UpdateOneStorageProps) {
    const { id, name, amount } = input

    try {
      const { data: updatedStorage } = await mutate({
        variables: {
          id,
          storage: {
            name,
            amount,
          },
        },
      })

      await refetch()

      toast({
        title: 'Sucesso!',
        description: 'Silo atualizado com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      return updatedStorage
    } catch (error) {
      catchError(error)
    }
  }

  return { updateOneStorage, updatedStorage }
}
