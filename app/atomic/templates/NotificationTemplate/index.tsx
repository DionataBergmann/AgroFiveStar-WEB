import React, { useState } from 'react'
import { LayoutTemplate } from '../LayoutTemplate'
import { Flex, Grid, Text } from '@chakra-ui/react'
import FormProvider from '@app/atomic/organisms/FormProvider'
import useCreateOneNotification from '@app/features/notifications/hooks/useCreateOneNotification'
import useUpdateOneNotification from '@app/features/notifications/hooks/useUpdateOneNotification'
import useDeleteOneNotification from '@app/features/notifications/hooks/useDeleteOneNotification'
import { InputNotificationsProps } from '@app/features/notifications/helper'
import { NotificationCard } from '@app/atomic/molecules/NotificationCard'
import { NotificationForm } from '@app/atomic/organisms/NotificationForm'
import { Modal } from '@app/atomic/molecules/Modal'
import useListNotifications from '@app/features/notifications/hooks/useListNotifications'

export const NotificationTemplate = () => {
  const defaultInitialValues: InputNotificationsProps = {
    id: null,
    title: '',
    description: '',
    userId: ''
  }

  const [initialValues, setInitialValues] =
    useState<InputNotificationsProps>(defaultInitialValues)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)

  const { data, loading, refetch } = useListNotifications()

  const { createOneNotification } = useCreateOneNotification({ refetch })
  const { updateOneNotification } = useUpdateOneNotification({ refetch })
  const { removeNotification } = useDeleteOneNotification()
  function handleCloseNotificationModal() {
    setModalIsOpen(false)
  }

  function handleCreateNotification() {
    setInitialValues(defaultInitialValues)
    setIsEditForm(false)
    setModalIsOpen(true)
  }
  function handleEditNotification() {
    setIsEditForm(true)
    setModalIsOpen(true)
  }

  return (
    <FormProvider
      initialValues={initialValues}
      onSubmit={async (values, form) => {
        if (isEditForm) {
          await updateOneNotification(values as any)
        } else {
          await createOneNotification(values as any)
        }
        handleCloseNotificationModal()
        form.reset()
      }}
    >
      <LayoutTemplate
        label="Notificação"
        onCreate={handleCreateNotification}
        loading={loading}
      >
        <Grid w="100%" gridGap="10px">
          <Grid
            display={['none', 'none', 'none', 'grid']}
            gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr 1fr 1fr']}
            w="100%"
            gridGap="5px"
          >
            <Text fontWeight="bold" fontSize="sm">
              Titulo
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Descrição
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Usuário
            </Text>
            
          </Grid>
          {data?.notifications?.nodes?.map((item) => (
            <NotificationCard
              key={item.id}
              data={item}
              id={item.id}
              title={item.title}
              description={item.description}
              userId={item.userId}
              onEdit={handleEditNotification}
              onDelete={removeNotification}
              setInitialValues={setInitialValues}
            />
          ))}
        </Grid>
        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseNotificationModal}
          title={isEditForm ? 'Editar Notificação' : 'Cadastrar Notificação'}
          size="2xl"
          closable
          isCentered
        >
          <NotificationForm
            handleOnClose={handleCloseNotificationModal}
            isEditForm={isEditForm}
            initialValues={initialValues}
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
