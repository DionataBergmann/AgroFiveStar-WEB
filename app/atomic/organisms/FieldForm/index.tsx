import React, { useState } from 'react'

import { TextField } from '@app/atomic/molecules/TextField'
import { useFormContextSelector } from '@app/atomic/organisms/FormProvider'
import { pxToRem } from '@app/common/theme/utils'
import { Button, Flex, Grid } from '@chakra-ui/react'

import { GoogleMaps } from '../GoogleMaps'

interface FieldFormProps {
  handleOnClose?: () => void
  isEditForm?: boolean
  setFile?: any
  initialValues?: any
  setPolygonCoordinates?: any
}

export const FieldForm = React.memo(
  ({
    handleOnClose,
    isEditForm,
    setFile,
    initialValues,
    setPolygonCoordinates,
  }: FieldFormProps) => {
    const handleSubmit: () => void = useFormContextSelector(
      (s) => s.handleSubmit,
    )

    const [defaultAcreValue, setDefaultAcreValue] = useState(0)

    return (
      <Flex flexDir="column" width="100%">
        <Grid
          templateColumns={['1fr', 'repeat(2, 1fr)']}
          gap={6}
          mb={pxToRem(10)}
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
            name="acre"
            type="text"
            label="Hectares"
            value={defaultAcreValue?.toFixed(1)}
          />
        </Grid>

        <GoogleMaps
          setPolygonCoordinates={setPolygonCoordinates}
          setDefaultAcreValue={setDefaultAcreValue}
          initialValues={initialValues}
          isEditForm={isEditForm}
        />

        <Flex position="absolute" bottom="-12px" right="5%">
          <Button
            onClick={handleOnClose}
            size="md"
            variant="outline"
            bgColor="secundary"
            color="primary"
            borderRadius={pxToRem(5)}
            mb={pxToRem(30)}
            ml={isEditForm ? '430px' : '400px'}
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
            ml="12px"
            _hover={{ bg: '#53754a' }}
          >
            {isEditForm ? 'Salvar' : 'Cadastrar'}
          </Button>
        </Flex>
      </Flex>
    )
  },
)
