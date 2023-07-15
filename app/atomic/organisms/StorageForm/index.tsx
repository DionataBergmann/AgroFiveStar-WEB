import React from 'react'

import { TextField } from '@app/atomic/molecules/TextField'
import { useFormContextSelector } from '@app/atomic/organisms/FormProvider'
import { pxToRem } from '@app/common/theme/utils'
import { Button, Flex, Grid } from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import { registerLocale } from 'react-datepicker'

interface StorageFormProps {
  handleOnClose?: () => void
  isEditForm?: boolean
  initialValues?: any
}
registerLocale('ptBR', ptBR)

export const StorageForm = React.memo(
  ({
    handleOnClose,
    isEditForm,
    initialValues,
  }: StorageFormProps) => {
    const handleSubmit: () => void = useFormContextSelector(
      (s) => s.handleSubmit,
    )

    // const { data: usersData } = useListUsers()

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
            _hover={{ bg: '#53754a' }}
          >
            {isEditForm ? 'Salvar' : 'Cadastrar'}
          </Button>
        </Flex>
      </Flex>
    )
  },
)
