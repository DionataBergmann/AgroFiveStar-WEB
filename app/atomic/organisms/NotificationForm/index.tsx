import React from 'react'

import { TextField } from '@app/atomic/molecules/TextField'
import { useFormContextSelector } from '@app/atomic/organisms/FormProvider'
import { pxToRem } from '@app/common/theme/utils'
import { Button, Flex, Grid } from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import { registerLocale } from 'react-datepicker'
import SelectField from '@app/atomic/molecules/SelectField'
import useListUsers from '@app/features/tasks/hooks/useListUsers'

interface NotificationFormProps {
  handleOnClose?: () => void
  isEditForm?: boolean
  initialValues?: any
}
registerLocale('ptBR', ptBR)

export const NotificationForm = React.memo(
  ({
    handleOnClose,
    isEditForm,
    initialValues,
  }: NotificationFormProps) => {
    const handleSubmit: () => void = useFormContextSelector(
      (s) => s.handleSubmit,
    )

    const { data: usersData } = useListUsers()
    const { data: UserfilteredData } = useListUsers(initialValues?.userId)

    return (
      <Flex flexDir="column" width="100%">
        <Grid
          templateColumns={['1fr', 'repeat(1, 1fr)']}
          gap={3}
          mb={pxToRem(30)}
        >
          <TextField
            w="100%"
            label="Titulo"
            name="title"
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
           <TextField
            w="100%"
            label="Descrição"
            name="description"
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
          <SelectField
            name="userId"
            label="Funcionário:"
            placeholder="Selecione um funcionário"
            value={
              UserfilteredData?.users?.nodes?.[0]?.id ? UserfilteredData?.users?.nodes?.[0]?.id : null
            }
          >
            {usersData?.users?.nodes?.map((value) => (
              <option key={value.id} value={value?.id}>
                {value.name}
              </option>
            ))}
          </SelectField>
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
