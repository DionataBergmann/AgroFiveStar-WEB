import React, { useState } from 'react'

import { Modal } from '@app/atomic/molecules/Modal'
import { TaskCard } from '@app/atomic/molecules/TaskCard'
import FormProvider from '@app/atomic/organisms/FormProvider'
import { TaskForm } from '@app/atomic/organisms/TaskForm'
import { InputTaskProps } from '@app/features/tasks/helper'
import useCreateTask from '@app/features/tasks/hooks/useCreateOneTask'
import useRemoveTask from '@app/features/tasks/hooks/UseDeleteOneTask'
import useListTasks from '@app/features/tasks/hooks/useListTasks'
import useUpdateOneTask from '@app/features/tasks/hooks/useUpdateOneTask'
import { Flex, Grid, Text } from '@chakra-ui/react'

import { LayoutTemplate } from '../LayoutTemplate'

export const TaskTemplate = () => {
  const defaultInitialValues: InputTaskProps = {
    id: null,
    title: '',
    description: '',
  }

  const [initialValues, setInitialValues] = useState<InputTaskProps>(
    defaultInitialValues,
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)

  const { data, loading, refetch } = useListTasks()

  const { createOneTask } = useCreateTask({ refetch })
  const { updateOneTask } = useUpdateOneTask({ refetch })
  const { removeTask } = useRemoveTask()

  function handleCloseTaskModal() {
    setModalIsOpen(false)
  }

  function handleCreateTask() {
    setInitialValues(defaultInitialValues)
    setIsEditForm(false)
    setModalIsOpen(true)
  }
  function handleEditTask() {
    setIsEditForm(true)
    setModalIsOpen(true)
  }

  return (
    <FormProvider
      initialValues={initialValues}
      onSubmit={async (values, form) => {
        if (isEditForm) {
          await updateOneTask(values as any)
        } else {
          await createOneTask(values as any)
        }
        handleCloseTaskModal()
        form.reset()
      }}
    >
      <LayoutTemplate
        label="Tarefa"
        onCreate={handleCreateTask}
        loading={loading}
      >
        <Grid w="100%" gridGap="10px" gridTemplateColumns={'1fr'}>
          <Grid
            gridTemplateColumns={'35px 1fr 1fr 1fr 1fr 1fr 1fr'}
            display={['none', 'none', 'none', 'grid']}
            w="100%"
            gridGap="5px"
          >
            <Flex />
            <Text fontWeight="bold" fontSize="sm">
              Título
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Descrição
            </Text>
          </Grid>
          {data?.tasks?.nodes?.map((item) => (
            <TaskCard
              key={item.id}
              data={item}
              id={item.id}
              title={item.title}
              description={item.description}
              onEdit={handleEditTask}
              onDelete={removeTask}
              setInitialValues={setInitialValues}
            />
          ))}
        </Grid>

        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseTaskModal}
          title={isEditForm ? 'Editar Tarefa' : 'Cadastrar Tarefa'}
          size="2xl"
          closable
          isCentered
        >
          <TaskForm
            handleOnClose={handleCloseTaskModal}
            isEditForm={isEditForm}
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
