import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useCreateOneFieldMutation } from '../graphql/mutations.generated'
import { InputFieldProps } from '../helper'

export default function useCreateField(file) {
  const toast = useToast()

  const [createOneFieldMutation, { data: createdField }] =
    useCreateOneFieldMutation({
      refetchQueries: ['getFields'],
    })

  async function createField(values: InputFieldProps) {
    try {
      const { name, acre } = values

      const { data: createdField } = await createOneFieldMutation({
        variables: {
          data: {
            name,
            acre,
            imagePath: file?.source,
          },

          fieldImage: file?.file,
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

      return createdField
    } catch (error) {
      catchError(error)
    }
  }

  return { createField, createdField }
}
