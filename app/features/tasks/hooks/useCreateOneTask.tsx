import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'
import moment from 'moment'

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
      const { title, description, date, userName, userId } = values

      const dayOfWeek = moment(date).weekday()

      const { data: createdTask } = await createOneTaskMutation({
        variables: {
          task: {
            title,
            description,
            date,
            dayOfWeek,
            userName,
            userId,
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
