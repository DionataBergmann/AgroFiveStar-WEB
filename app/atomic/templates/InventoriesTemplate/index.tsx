import React, { useState } from 'react'

import { InventoryCard } from '@app/atomic/molecules/inventoryCard'
import { Modal } from '@app/atomic/molecules/Modal'
import FormProvider from '@app/atomic/organisms/FormProvider'
import { InventoryForm } from '@app/atomic/organisms/InventoryForm'
import { InputInventoryProps } from '@app/features/inventories/helper'
import useCreateInventory from '@app/features/inventories/hooks/useCreateOneInventory'
import useListInventories from '@app/features/inventories/hooks/useListInvetories'
import { Flex, Grid, Text } from '@chakra-ui/react'

import { LayoutTemplate } from '../LayoutTemplate'

export const InventoriesTemplate = () => {
  const defaultInitialValues: InputInventoryProps = {
    id: null,
    name: '',
    provider: '',
    amount: 0,
    storage: '',
    value: 0,
  }

  const [initialValues, setInitialValues] =
    useState<InputInventoryProps>(defaultInitialValues)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)

  const { data, loading, refetch } = useListInventories()

  const { createOneInventory } = useCreateInventory({ refetch })

  function handleCloseInventoryModal() {
    setModalIsOpen(false)
  }

  function handleCreateInventory() {
    setInitialValues(defaultInitialValues)
    setIsEditForm(false)
    setModalIsOpen(true)
  }
  return (
    <FormProvider
      initialValues={initialValues}
      onSubmit={async (values, form) => {
        if (!isEditForm) {
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
        <Grid w="100%" gridGap="10px" gridTemplateColumns={'1fr'}>
          <Grid
            gridTemplateColumns={'35px 1fr 1fr 1fr 1fr 1fr 1fr'}
            display={['none', 'none', 'none', 'grid']}
            w="100%"
            gridGap="5px"
          >
            <Flex />
            <Text fontWeight="bold" fontSize="sm">
              Nome do item
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              Data
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
              // onEdit={handleEdit}
              // onDelete={removeTransaction}
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
          />
        </Modal>
      </LayoutTemplate>
    </FormProvider>
  )
}
