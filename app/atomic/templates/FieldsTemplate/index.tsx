import React, { useState } from 'react'

import { FieldCard } from '@app/atomic/molecules/FieldCard'
import { Modal } from '@app/atomic/molecules/Modal'
import { FieldForm } from '@app/atomic/organisms/FieldForm'
import FormProvider from '@app/atomic/organisms/FormProvider'
import { InputFieldProps } from '@app/features/fields/helper'
import useCreateField from '@app/features/fields/hooks/useCreateOneField'
import useDeleteOneField from '@app/features/fields/hooks/useDeleteOneField'
import useListFields from '@app/features/fields/hooks/useListField'
import useUpdateOneField from '@app/features/fields/hooks/useUpdateOneField'
import { Grid } from '@chakra-ui/react'

import { LayoutTemplate } from '../LayoutTemplate'

export const FieldsTemplate = () => {
  const defaultInitialValues: InputFieldProps = {
    id: null,
    name: '',
    acre: 0,
    fieldImage: '',
    imagePath: '',
  }

  const [initialValues, setInitialValues] = useState<InputFieldProps>(
    defaultInitialValues,
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)
  const [polygonCoordinates, setPolygonCoordinates] =
    React.useState(null)

  const { data, loading, refetch } = useListFields()

  const [file, setFile] = useState<File>()
  const { createField } = useCreateField(file, polygonCoordinates)
  const { updateOneField } = useUpdateOneField(
    { refetch },
    polygonCoordinates,
  )
  const { removeField } = useDeleteOneField()

  function handleCloseFieldModal() {
    setModalIsOpen(false)
  }

  function handleCreateField() {
    setInitialValues(defaultInitialValues)
    setIsEditForm(false)
    setModalIsOpen(true)
  }
  function handleEditField() {
    setIsEditForm(true)
    setModalIsOpen(true)
  }

  return (
    <FormProvider
      initialValues={initialValues}
      onSubmit={async (values, form) => {
        if (isEditForm) {
          await updateOneField(values as any)
        } else {
          await createField(values as any)
        }
        handleCloseFieldModal()
        form.reset()
      }}
    >
      <LayoutTemplate
        label="área"
        onCreate={handleCreateField}
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
              data={value}
              id={value.id}
              name={value.name}
              acre={value.acre}
              cordinates={value?.cordinates}
              imagePath={value?.imagePath}
              onEdit={handleEditField}
              onDelete={removeField}
              setInitialValues={setInitialValues}
              fieldImage={value.fieldImage}
            />
          ))}
        </Grid>

        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseFieldModal}
          title={isEditForm ? 'Editar Área' : 'Cadastrar Área'}
          closable
          isCentered
          size="6xl"
        >
          <FieldForm
            handleOnClose={handleCloseFieldModal}
            isEditForm={isEditForm}
            setFile={setFile}
            initialValues={initialValues}
            setPolygonCoordinates={setPolygonCoordinates}
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
