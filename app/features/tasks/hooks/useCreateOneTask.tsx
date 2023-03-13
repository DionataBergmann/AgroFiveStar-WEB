import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useCreateOneTaskMutation } from '../graphql/mutation.generated'
import { InputTaskProps } from '../helper'

export default function useCreateTask({ refetch }) {
  const toast = useToast()

  const [createOneTaskMutation, { data: createdTask }] =
    useCreateOneTaskMutation({
      refetchQueries: ['getTasks'],
    })

  async function createOneTask(values: InputTaskProps) {
    try {
      const { title, description } = values

      const { data: createdTask } = await createOneTaskMutation({
        variables: {
          task: {
            title,
            description,
          },
        },
      })

      toast({
        title: 'Sucesso!',
        description: 'Tarefa adicionada com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      refetch()
      return createdTask
    } catch (error) {
      catchError(error)
    }
  }

  return { createOneTask, createdTask }
}
