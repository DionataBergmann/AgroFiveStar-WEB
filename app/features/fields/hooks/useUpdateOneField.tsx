import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useUpdateOneFieldMutation } from '../graphql/mutations.generated'

export default function useUpdateOneField(
  { refetch },
  polygonCoordinates,
) {
  const toast = useToast()

  const [mutate, updatedField] = useUpdateOneFieldMutation({
    refetchQueries: ['getFields'],
  })

  interface UpdateOneFieldProps {
    id: string
    name: string
    acre: string
  }

  async function updateOneField(input: UpdateOneFieldProps) {
    const { id, name, acre } = input

    try {
      const { data: updatedField } = await mutate({
        variables: {
          id,
          data: {
            name,
            acre,
            cordinates: JSON.stringify(polygonCoordinates),
          },
        },
      })

      await refetch()

      toast({
        title: 'Sucesso!',
        description: 'Campo atualizado com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      return updatedField
    } catch (error) {
      catchError(error)
    }
  }

  return { updateOneField, updatedField }
}
