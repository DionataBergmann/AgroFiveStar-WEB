import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useUpdateOneInventoryMutation } from '../graphql/mutatiion.generated'

export default function useUpdateOneInventory({ refetch }) {
  const toast = useToast()

  const [mutate, updatedInventory] = useUpdateOneInventoryMutation({
    refetchQueries: ['getInventories'],
  })

  interface UpdateOneInventoryProps {
    id: string
    name: string
    amount: number
    provider: string
    storage: string
    value: number
    fields: any
  }

  async function updateOneInventory(input: UpdateOneInventoryProps) {
    const { id, name, amount, provider, storage, value, fields } =
      input

    try {
      const { data: updatedInventory } = await mutate({
        variables: {
          id,
          inventory: {
            name,
            amount,
            provider,
            storage,
            value,
            fields: {
              id: input.fields,
            },
          },
        },
      })

      await refetch()

      toast({
        title: 'Sucesso!',
        description: 'Estoque atualizado com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      return updatedInventory
    } catch (error) {
      catchError(error)
    }
  }

  return { updateOneInventory, updatedInventory }
}
