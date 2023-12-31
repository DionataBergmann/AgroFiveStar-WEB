import React from 'react'

import { NumberField } from '@app/atomic/molecules/NumberField'
import SelectField from '@app/atomic/molecules/SelectField'
import { TextField } from '@app/atomic/molecules/TextField'
import { useFormContextSelector } from '@app/atomic/organisms/FormProvider'
import { pxToRem } from '@app/common/theme/utils'
import useListFields from '@app/features/fields/hooks/useListField'
import useListStorages from '@app/features/storage/hooks/useListStorages'
import { Button, Flex, Grid } from '@chakra-ui/react'

interface InventoryFormProps {
  handleOnClose?: () => void
  isEditForm?: boolean
  initialValues?: any
}

export const InventoryForm = React.memo(
  ({
    handleOnClose,
    isEditForm,
    initialValues,
  }: InventoryFormProps) => {
    const handleSubmit: () => void = useFormContextSelector(
      (s) => s.handleSubmit,
    )

    const { data: fieldsData } = useListFields()
    const { data: storagesData } = useListStorages()

    return (
      <Flex flexDir="column" width="100%">
        <Grid
          templateColumns={['1fr', 'repeat(1, 1fr)']}
          gap={3}
          mb={pxToRem(30)}
        >
          <SelectField
            name="fields"
            label="Campo:"
            placeholder="Selecione um campo"
            value={
              initialValues?.field?.id
                ? initialValues?.field?.id
                : null
            }
            isDisabled={initialValues?.field?.id ? true : false}
          >
            {fieldsData?.fields?.nodes?.map((value) => (
              <option key={value.id} value={value.id}>
                {value.name}
              </option>
            ))}
          </SelectField>
          <SelectField
            name="storages"
            label="Armazém:"
            placeholder="Selecione um armazém"
            value={
              initialValues?.storage?.id
                ? initialValues?.storage?.id
                : null
            }
            isDisabled={initialValues?.storage?.id ? true : false}
          >
            {storagesData?.storages?.nodes?.map((value) => (
              <option key={value.id} value={value.id}>
                {value.name}
              </option>
            ))}
          </SelectField>
          <TextField
            w="100%"
            label="Nome"
            name="name"
            type="text"
            labelProps={{ color: 'boulder' }}
            inputProps={{
              color: 'boulder',
              size: 'md',
              shadow: 'md',
              borderRadius: '10px',
              border: '1px solid',
              borderColor: 'rgba(0,0,0,0.05)',
            }}
          />
          <TextField
            w="100%"
            label="Fornecedor"
            name="provider"
            placeholder="Fazenda..."
            type="string"
            labelProps={{ color: 'boulder' }}
            inputProps={{
              color: 'boulder',
              size: 'md',
              shadow: 'md',
              borderRadius: '10px',
              border: '1px solid',
              borderColor: 'rgba(0,0,0,0.05)',
            }}
          />
          <NumberField
            name="amount"
            type="number"
            label="Quantidade"
          />
          <NumberField name="value" type="number" label="Valor" />
        </Grid>
        <Flex>
          <Button
            onClick={handleOnClose}
            size="md"
            variant="outline"
            bgColor="secundary"
            color="primary"
            borderRadius={pxToRem(5)}
            mb={pxToRem(30)}
            ml="415px"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            size="md"
            variant="outline"
            bgColor="primary"
            color="secundary"
            borderRadius={pxToRem(5)}
            w="auto"
            mb={pxToRem(30)}
            ml="auto"
            _hover={{ bg: '#53754a' }}
          >
            {isEditForm ? 'Salvar' : 'Cadastrar'}
          </Button>
        </Flex>
      </Flex>
    )
  },
)
