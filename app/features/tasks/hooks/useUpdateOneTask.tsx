import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'

import { useUpdateOneTaskMutation } from '../graphql/mutation.generated'

export default function useUpdateOneTask({ refetch }) {
  const toast = useToast()

  const [mutate, updatedTask] = useUpdateOneTaskMutation({
    refetchQueries: ['getTasks'],
  })

  interface UpdateOneTaskProps {
    id: string
    title: string
    description: string
    userName: string
    date: Date
  }

  async function updateOneTask(input: UpdateOneTaskProps) {
    const { id, title, description, date, userName } = input

    try {
      const { data: updatedTask } = await mutate({
        variables: {
          id,
          task: {
            title,
            description,
            userName,
            date,
          },
        },
      })

      await refetch()

      toast({
        title: 'Sucesso!',
        description: 'Tarefa atualizada com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })
      return updatedTask
    } catch (error) {
      catchError(error)
    }
  }

  return { updateOneTask, updatedTask }
}
