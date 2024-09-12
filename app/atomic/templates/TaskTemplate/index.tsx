import React, { useState } from 'react'

import { Modal } from '@app/atomic/molecules/Modal'
import FormProvider from '@app/atomic/organisms/FormProvider'
import WeekScheduleTable from '@app/atomic/organisms/schedule'
import { TaskForm } from '@app/atomic/organisms/TaskForm'
import { InputTaskProps } from '@app/features/tasks/helper'
import useCreateTask from '@app/features/tasks/hooks/useCreateOneTask'
import useRemoveTask from '@app/features/tasks/hooks/UseDeleteOneTask'
import useListTasks from '@app/features/tasks/hooks/useListTasks'
import useUpdateOneTask from '@app/features/tasks/hooks/useUpdateOneTask'

import { LayoutTemplate } from '../LayoutTemplate'

export const TaskTemplate = () => {
  const defaultInitialValues: InputTaskProps = {
    id: null,
    title: '',
    description: '',
    date: null,
    userId: '',
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

  const handleEditTask = async () => {
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
        <WeekScheduleTable
          handleEditTask={handleEditTask}
          setInitialValues={setInitialValues}
        />
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
            initialValues={initialValues}
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
