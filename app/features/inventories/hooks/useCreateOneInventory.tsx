import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useCreateOneInventoryMutation } from '../graphql/mutatiion.generated'
import { InputInventoryProps } from '../helper'

export default function useCreateInventory({ refetch }) {
  const toast = useToast()

  const [createOneInventoryMutation, { data: createdInventory }] =
    useCreateOneInventoryMutation({
      refetchQueries: ['getInventories'],
    })

  async function createOneInventory(values: InputInventoryProps) {
    try {
      const { name, amount, provider, value, fields, storages } =
        values

      const { data: createdInventory } =
        await createOneInventoryMutation({
          variables: {
            inventory: {
              name,
              provider,
              amount,
              value,
              fields: {
                id: values?.fields,
              },
              storages: {
                id: values?.storages,
              },
            },
          },
        })

      toast({
        title: 'Sucesso!',
        description: 'Estoque adicionado com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      refetch()
      return createdInventory
    } catch (error) {
      catchError(error)
    }
  }

  return { createOneInventory, createdInventory }
}
