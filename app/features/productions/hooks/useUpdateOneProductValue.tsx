import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useUpdateOneProductionMutation } from '../graphql/mutation.generated'

export default function useUpdateOneProductionValue({ refetch }) {
  const toast = useToast()

  const [mutate, updatedProduction] = useUpdateOneProductionMutation({
    refetchQueries: ['getProductions'],
  })

  interface UpdateOneProductionProps {
    id: string
    name: string
    amount: number
    field: any
  }

  async function updateOneProductionValue(
    input: UpdateOneProductionProps,
    initialValues: UpdateOneProductionProps,
    add: boolean
  ) {
    const { amount: amountInput } = input
    const { name, field, id, amount } = initialValues

    try {

      const { data: updatedProduction } = await mutate({
        variables: {
          id: id,
          production: {
            name: name,
            amount: add ? amount + amountInput : amount - amountInput,
            fields: {
              id: field?.id,
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

  return { updateOneProductionValue, updatedProduction }
}
