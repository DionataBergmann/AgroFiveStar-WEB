import React from 'react'

import { TextField } from '@app/atomic/molecules/TextField'
import { useFormContextSelector } from '@app/atomic/organisms/FormProvider'
import { pxToRem } from '@app/common/theme/utils'
import { Button, Flex, Grid } from '@chakra-ui/react'

interface InventoryFormProps {
  handleOnClose?: () => void
  isEditForm?: boolean
}

export const InventoryForm = React.memo(
  ({ handleOnClose, isEditForm }: InventoryFormProps) => {
    const handleSubmit: () => void = useFormContextSelector(
      (s) => s.handleSubmit,
    )

    return (
      <Flex flexDir="column" width="100%">
        <Grid
          templateColumns={['1fr', 'repeat(1, 1fr)']}
          gap={3}
          mb={pxToRem(30)}
        >
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
          <TextField
            w="100%"
            label="Armazem"
            name="storage"
            placeholder="Silo 1"
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
          <TextField
            w="100%"
            label="Quantidade"
            name="amount"
            placeholder="2000kg"
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
          <TextField
            w="100%"
            label="Valor"
            name="value"
            placeholder="R$ 500.00"
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
          >
            {isEditForm ? 'Salvar' : 'Cadastrar'}
          </Button>
        </Flex>
      </Flex>
    )
  },
)
