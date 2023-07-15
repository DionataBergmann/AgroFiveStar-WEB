import React, { useEffect, useState } from 'react'

import { TextField } from '@app/atomic/molecules/TextField'
import { useFormContextSelector } from '@app/atomic/organisms/FormProvider'
import { pxToRem } from '@app/common/theme/utils'
import { Button, Flex, Grid } from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import { registerLocale } from 'react-datepicker'
import { NumberField } from '@app/atomic/molecules/NumberField'

interface AddOrRemoveProductionFormProps {
  handleOnClose?: () => void
  isEditForm?: boolean
  initialValues?: any
  add?: boolean
  remove?: boolean
  setAdd?: any
  setRemove?: any
}
registerLocale('ptBR', ptBR)

export const AddOrRemoveProductionForm = React.memo(
  ({
    handleOnClose,
    isEditForm,
    initialValues,
    add, remove, setAdd, setRemove
  }: AddOrRemoveProductionFormProps) => {
    const handleSubmit: () => void = useFormContextSelector(
      (s) => s.handleSubmit,
    )

    return (
      <Flex flexDir="column" width="100%">
        <Flex flexDir="row" justifyContent="center">
          <Button h={7} w={3} onClick={() => { setAdd(true), setRemove(false) }} bg={add ? "primary" : 'gray.100'}>
            +
          </Button>
          <Button h={7} w={3} ml={5} onClick={() => { setAdd(false), setRemove(true) }} bg={remove ? "red" : 'gray.100'}>
            -
          </Button>
        </Flex>
        <Grid
          templateColumns={['1fr', 'repeat(1, 1fr)']}
          mt={5}
          mb={pxToRem(30)}
        >
          <NumberField
            w="40%"
            name="amount"
            type="number"
            label={`Quantidade a ser ${add ? "adicionada" : "removida"}`}
            placeholder='Ex: 1000'
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
            ml="8px"
            _hover={{ bg: '#53754a' }}
          >
            Salvar
          </Button>
        </Flex>
      </Flex >
    )
  },
)
