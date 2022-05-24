import React, { useState } from 'react'

import { FieldCard } from '@app/atomic/molecules/FieldCard'
import { Modal } from '@app/atomic/molecules/Modal'
import { FieldForm } from '@app/atomic/organisms/FieldForm'
import FormProvider from '@app/atomic/organisms/FormProvider'
import { InputFieldProps } from '@app/features/rooms/helper'
import useCreateField from '@app/features/rooms/hooks/useCreateOneField'
import useListFields from '@app/features/rooms/hooks/useListField'
import { Grid } from '@chakra-ui/react'

import { LayoutTemplate } from '../LayoutTemplate'

export const FieldsTemplate = () => {
  const defaultInitialValues: InputFieldProps = {
    id: null,
    name: '',
    acre: 0,
    imageUrl: '',
  }

  const [initialValues, setInitialValues] = useState<InputFieldProps>(
    defaultInitialValues,
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)

  const { data, loading, refetch } = useListFields()

  const { createOneField } = useCreateField({ refetch })

  function handleCloseFieldModal() {
    setModalIsOpen(false)
  }

  function handleCreateRoom() {
    setInitialValues(defaultInitialValues)
    setIsEditForm(false)
    setModalIsOpen(true)
  }
  return (
    <FormProvider
      initialValues={initialValues}
      onSubmit={async (values, form) => {
        if (!isEditForm) {
          await createOneField(values as any)
        }
        handleCloseFieldModal()
        form.reset()
      }}
    >
      <LayoutTemplate
        label="área"
        onCreate={handleCreateRoom}
        loading={loading}
      >
        <Grid
          w="100%"
          gridGap="20px"
          gridTemplateColumns={[
            '1fr',
            '1fr',
            '1fr 1fr',
            '1fr 1fr',
            '1fr 1fr 1fr',
          ]}
        >
          {data?.fields?.nodes?.map((value) => (
            <FieldCard
              key={value.id}
              id={value.id}
              title={value.name}
              acre={value.acre}
              imageUrl={value.imageUrl}
            />
          ))}
        </Grid>

        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseFieldModal}
          title={isEditForm ? 'Editar Área' : 'Cadastrar Área'}
          size="2xl"
          closable
          isCentered
        >
          <FieldForm
            handleOnClose={handleCloseFieldModal}
            isEditForm={isEditForm}
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
