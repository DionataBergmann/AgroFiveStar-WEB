import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'
import moment from 'moment'

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
    userId?: string
    date: Date
  }

  async function updateOneTask(input: UpdateOneTaskProps) {
    const { id, title, description, date, userName, userId } = input

    const dayOfWeek = moment(date).weekday()

    try {
      const { data: updatedTask } = await mutate({
        variables: {
          id,
          task: {
            title,
            description,
            dayOfWeek,
            userName,
            date,
            userId
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
