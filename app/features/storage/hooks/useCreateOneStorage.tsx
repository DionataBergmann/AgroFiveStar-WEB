import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useCreateOneStorageMutation } from '../graphql/mutation.generated'
import { InputStorageProps } from '../helper'

export default function useCreateStorage({ refetch }) {
  const toast = useToast()

  const [createOneStorageMutation, { data: createdStorage }] =
    useCreateOneStorageMutation({
      refetchQueries: ['getStorages'],
    })

  async function createOneStorage(values: InputStorageProps) {
    try {
      const { name, amount } = values

      const { data: createdStorage } = await createOneStorageMutation(
        {
          variables: {
            storage: {
              name,
              amount,
            },
          },
        },
      )

      toast({
        title: 'Sucesso!',
        description: 'Silo adicionado com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      refetch()
      return createdStorage
    } catch (error) {
      catchError(error)
    }
  }

  return { createOneStorage, createdStorage }
}
