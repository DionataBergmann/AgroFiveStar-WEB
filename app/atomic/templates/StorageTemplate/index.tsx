import React, { useState } from 'react'

import { Modal } from '@app/atomic/molecules/Modal'
import { StorageCard } from '@app/atomic/molecules/StorageCard'
import FormProvider from '@app/atomic/organisms/FormProvider'
import { StorageForm } from '@app/atomic/organisms/StorageForm'
import { InputStorageProps } from '@app/features/storage/helper'
import useCreateStorage from '@app/features/storage/hooks/useCreateOneStorage'
import useDeleteOneStorage from '@app/features/storage/hooks/useDeleteOneStorage'
import useListStorages from '@app/features/storage/hooks/useListStorages'
import useUpdateOneStorage from '@app/features/storage/hooks/useUpdateOneStorage'
import { Flex, Grid } from '@chakra-ui/react'

import { LayoutTemplate } from '../LayoutTemplate'

export const StorageTemplate = () => {
  const defaultInitialValues: InputStorageProps = {
    id: null,
    name: '',
    amount: 0,
  }

  const [initialValues, setInitialValues] =
    useState<InputStorageProps>(defaultInitialValues)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)

  const { data, loading, refetch } = useListStorages()

  const { createOneStorage } = useCreateStorage({ refetch })
  const { updateOneStorage } = useUpdateOneStorage({ refetch })
  const { removeStorage } = useDeleteOneStorage()
  function handleCloseStorageModal() {
    setModalIsOpen(false)
  }

  function handleCreateStorage() {
    setInitialValues(defaultInitialValues)
    setIsEditForm(false)
    setModalIsOpen(true)
  }
  function handleEditStorage() {
    setIsEditForm(true)
    setModalIsOpen(true)
  }
  return (
    <FormProvider
      initialValues={initialValues}
      onSubmit={async (values, form) => {
        if (isEditForm) {
          await updateOneStorage(values as any)
        } else {
          await createOneStorage(values as any)
        }
        handleCloseStorageModal()
        form.reset()
      }}
    >
      <LayoutTemplate
        label="Silo"
        onCreate={handleCreateStorage}
        loading={loading}
      >
        <Grid w="100%" gridGap="10px">
          <Grid
            gridTemplateColumns={['1fr', '1fr', '1fr', '1fr']}
            display={['none', 'none', 'none', 'grid']}
            w="100%"
            gridGap="5px"
          >
            <Flex />
          </Grid>
          {data?.storages?.nodes?.map((item) => (
            <StorageCard
              key={item.id}
              data={item}
              id={item.id}
              name={item.name}
              amount={item.amount}
              onEdit={handleEditStorage}
              onDelete={removeStorage}
              setInitialValues={setInitialValues}
            />
          ))}
        </Grid>
        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseStorageModal}
          title={isEditForm ? 'Editar Silo' : 'Cadastrar Silo'}
          size="2xl"
          closable
          isCentered
        >
          <StorageForm
            handleOnClose={handleCloseStorageModal}
            isEditForm={isEditForm}
            initialValues={initialValues}
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
