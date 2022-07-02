import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useCreateOneFieldMutation } from '../graphql/mutations.generated'
import { InputFieldProps } from '../helper'

export default function useCreateField({ refetch }) {
  const toast = useToast()

  const [createOneFieldMutation, { data: createdField }] =
    useCreateOneFieldMutation({
      refetchQueries: ['getFields'],
    })

  async function createOneField(values: InputFieldProps) {
    try {
      const { name, acre, imageUrl } = values

      const { data: createdField } = await createOneFieldMutation({
        variables: {
          field: {
            name,
            acre,
            imageUrl,
          },
        },
      })

      toast({
        title: 'Sucesso!',
        description: 'Campo adicionado com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      refetch()
      return createdField
    } catch (error) {
      catchError(error)
    }
  }

  return { createOneField, createdField }
}
