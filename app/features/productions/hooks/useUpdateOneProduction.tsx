import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useUpdateOneProductionMutation } from '../graphql/mutation.generated'

export default function useUpdateOneProduction({ refetch }) {
  const toast = useToast()

  const [mutate, updatedProduction] = useUpdateOneProductionMutation({
    refetchQueries: ['getProductions'],
  })

  interface UpdateOneProductionProps {
    id: string
    name: string
    amount: number
    fields: any
  }

  async function updateOneProduction(
    input: UpdateOneProductionProps,
  ) {
    const { id, name, amount, fields } = input

    try {
      const { data: updatedProduction } = await mutate({
        variables: {
          id,
          production: {
            name,
            amount,
            fields: {
              id: input?.fields,
            },
          },
        },
      })

      await refetch()

      toast({
        title: 'Sucesso!',
        description: 'Produção atualizada com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      return updatedProduction
    } catch (error) {
      catchError(error)
    }
  }

  return { updateOneProduction, updatedProduction }
}
