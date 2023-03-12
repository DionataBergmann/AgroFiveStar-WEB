import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useCreateOneProductionMutation } from '../graphql/mutation.generated'
import { InputProductionProps } from '../helper'

export default function useCreateProduction({ refetch }) {
  const toast = useToast()

  const [createOneProductionMutation, { data: createdProduction }] =
    useCreateOneProductionMutation({
      refetchQueries: ['getProductions'],
    })

  async function createOneProduction(values: InputProductionProps) {
    try {
      const { name, amount, fields } = values

      const { data: createdProduction } =
        await createOneProductionMutation({
          variables: {
            production: {
              name,
              amount,
              fields: {
                id: values?.fields,
              },
            },
          },
        })

      toast({
        title: 'Sucesso!',
        description: 'Produção adicionada com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      refetch()
      return createdProduction
    } catch (error) {
      catchError(error)
    }
  }

  return { createOneProduction, createdProduction }
}
