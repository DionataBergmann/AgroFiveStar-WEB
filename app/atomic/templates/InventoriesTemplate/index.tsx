import React, { useState } from 'react'

import { InventoryCard } from '@app/atomic/molecules/InventoryCard'
import { Modal } from '@app/atomic/molecules/Modal'
import FormProvider from '@app/atomic/organisms/FormProvider'
import { InventoryForm } from '@app/atomic/organisms/InventoryForm'
import { InputInventoryProps } from '@app/features/inventories/helper'
import useCreateInventory from '@app/features/inventories/hooks/useCreateOneInventory'
import useDeleteOneInventory from '@app/features/inventories/hooks/useDeleteOneInventory'
import useListInventories from '@app/features/inventories/hooks/useListInvetories'
import useUpdateOneInventory from '@app/features/inventories/hooks/useUpdateOneInvetory'
import { Flex, Grid, Text } from '@chakra-ui/react'

import { LayoutTemplate } from '../LayoutTemplate'

export const InventoriesTemplate = () => {
  const defaultInitialValues: InputInventoryProps = {
    id: null,
    name: '',
    provider: '',
    amount: 0,
    field: '',
    storage: '',
    value: 0,
  }

  const [initialValues, setInitialValues] =
    useState<InputInventoryProps>(defaultInitialValues)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)

  const { data, loading, refetch } = useListInventories()

  const { createOneInventory } = useCreateInventory({ refetch })
  const { updateOneInventory } = useUpdateOneInventory({ refetch })
  const { removeInventory } = useDeleteOneInventory()
  function handleCloseInventoryModal() {
    setModalIsOpen(false)
  }

  function handleCreateInventory() {
    setInitialValues(defaultInitialValues)
    setIsEditForm(false)
    setModalIsOpen(true)
  }
  function handleEditInventory() {
    setIsEditForm(true)
    setModalIsOpen(true)
  }
  return (
    <FormProvider
      initialValues={initialValues}
      onSubmit={async (values, form) => {
        if (isEditForm) {
          await updateOneInventory(values as any)
        } else {
          await createOneInventory(values as any)
        }
        handleCloseInventoryModal()
        form.reset()
      }}
    >
      <LayoutTemplate
        label="Estoque"
        onCreate={handleCreateInventory}
        loading={loading}
      >
        <Grid w="100%" gridGap="10px">
          <Grid
            gridTemplateColumns={[
              '1fr',
              '1fr',
              '1fr',
              '35px 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            ]}
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
              Silo
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Fornecedor
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Quantidade
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Valor
            </Text>
          </Grid>
          {data?.inventories?.nodes?.map((item) => (
            <InventoryCard
              key={item.id}
              data={item}
              id={item.id}
              name={item.name}
              provider={item.provider}
              amount={item.amount}
              storage={item.storages}
              value={item.value}
              field={item.fields}
              onEdit={handleEditInventory}
              onDelete={removeInventory}
              setInitialValues={setInitialValues}
            />
          ))}
        </Grid>

        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseInventoryModal}
          title={isEditForm ? 'Editar Estoque' : 'Cadastrar Estoque'}
          size="2xl"
          closable
          isCentered
        >
          <InventoryForm
            handleOnClose={handleCloseInventoryModal}
            isEditForm={isEditForm}
            initialValues={initialValues}
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
