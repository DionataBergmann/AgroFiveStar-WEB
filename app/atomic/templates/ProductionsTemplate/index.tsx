import React, { useState } from 'react'

import { Modal } from '@app/atomic/molecules/Modal'
import { ProductionCard } from '@app/atomic/molecules/ProductionCard'
import { AddOrRemoveProductionForm } from '@app/atomic/organisms/AddOrRemoveProductionForm'
import FormProvider from '@app/atomic/organisms/FormProvider'
import { ProductionForm } from '@app/atomic/organisms/ProductionForm'
import { InputProductionProps } from '@app/features/productions/helper'
import useCreateProduction from '@app/features/productions/hooks/useCreateOneProduction'
import useDeleteOneProduction from '@app/features/productions/hooks/useDeleteOneProduction'
import useListProductions from '@app/features/productions/hooks/useListProductions'
import useUpdateOneProduction from '@app/features/productions/hooks/useUpdateOneProduction'
import useUpdateOneProductionValue from '@app/features/productions/hooks/useUpdateOneProductValue'
import { Flex, Grid, Text } from '@chakra-ui/react'

import { LayoutTemplate } from '../LayoutTemplate'

export const ProductionsTemplate = () => {
  const defaultInitialValues: InputProductionProps = {
    id: null,
    name: '',
    amount: 0,
    fields: '',
  }

  const [initialValues, setInitialValues] =
    useState<InputProductionProps>(defaultInitialValues)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [addOrRemoveModalIsOpen, setAddOrRemoveIsOpen] =
    useState(false)
  const [isEditForm, setIsEditForm] = useState(false)
  const [add, setAdd] = useState(true)
  const [remove, setRemove] = useState(false)

  const { data, loading, refetch } = useListProductions()

  const { createOneProduction } = useCreateProduction({ refetch })
  const { updateOneProduction } = useUpdateOneProduction({ refetch })
  const { updateOneProductionValue } = useUpdateOneProductionValue({
    refetch,
  })
  const { removeProduction } = useDeleteOneProduction()

  function handleCloseProductionModal() {
    setModalIsOpen(false)
  }

  function handleCreateProduction() {
    setInitialValues(defaultInitialValues)
    setIsEditForm(false)
    setModalIsOpen(true)
  }
  function handleEditProduction() {
    setIsEditForm(true)
    setModalIsOpen(true)
  }

  function handleCloseModal() {
    setAddOrRemoveIsOpen(false)
  }

  return (
    <FormProvider
      initialValues={addOrRemoveModalIsOpen ? 0 : initialValues}
      onSubmit={async (values, form) => {
        if (isEditForm) {
          if (addOrRemoveModalIsOpen) {
            await updateOneProductionValue(
              values as any,
              initialValues,
            )
          } else {
            await updateOneProduction(values as any)
          }
        } else {
          if (addOrRemoveModalIsOpen) {
            await updateOneProductionValue(
              values as any,
              initialValues,
              add,
            )
          } else {
            await createOneProduction(values as any)
          }
        }
        handleCloseProductionModal()
        handleCloseModal()
        form.reset()
      }}
    >
      <LayoutTemplate
        label="Produção"
        onCreate={handleCreateProduction}
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
              Data
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Campo
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Nome do item
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Quantidade (t)
            </Text>
          </Grid>
          {data?.productions?.nodes?.map((item) => (
            <ProductionCard
              key={item.id}
              data={item}
              id={item.id}
              name={item.name}
              amount={item.amount}
              field={item.fields}
              onEdit={handleEditProduction}
              onDelete={removeProduction}
              setInitialValues={setInitialValues}
              setAddOrRemoveIsOpen={setAddOrRemoveIsOpen}
            />
          ))}
        </Grid>

        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseProductionModal}
          title={
            isEditForm ? 'Editar Produção' : 'Cadastrar Produção'
          }
          size="2xl"
          closable
          isCentered
        >
          <ProductionForm
            handleOnClose={handleCloseProductionModal}
            isEditForm={isEditForm}
            initialValues={initialValues}
          />
        </Modal>
        <Modal
          isOpen={addOrRemoveModalIsOpen}
          onClose={handleCloseModal}
          title={'Adicionar ou remover quantidade'}
          size="2xl"
          closable
          isCentered
        >
          <AddOrRemoveProductionForm
            initialValues={initialValues}
            handleOnClose={handleCloseProductionModal}
            setAdd={setAdd}
            add={add}
            setRemove={setRemove}
            remove={remove}
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
