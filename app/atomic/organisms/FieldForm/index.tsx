import React from 'react'

import { NumberField } from '@app/atomic/molecules/numberField'
import { TextField } from '@app/atomic/molecules/TextField'
import { useFormContextSelector } from '@app/atomic/organisms/FormProvider'
import { pxToRem } from '@app/common/theme/utils'
import { Button, Flex, Grid, Image } from '@chakra-ui/react'
import { useFileUpload } from 'use-file-upload'

interface FieldFormProps {
  handleOnClose?: () => void
  isEditForm?: boolean
  setFile?: any
  initialValues?: any
}

export const FieldForm = React.memo(
  ({
    handleOnClose,
    isEditForm,
    setFile,
    initialValues,
  }: FieldFormProps) => {
    const handleSubmit: () => void = useFormContextSelector(
      (s) => s.handleSubmit,
    )
    const [files, selectFiles] = useFileUpload()
    setFile(files)

    const defaultSrc =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQT40BuNQFOItdDuxw2UHq2Kdz5-OsTWIkQFlPRts&s'

    return (
      <Flex flexDir="column" width="100%">
        <Grid
          templateColumns={['1fr', 'repeat(2, 1fr)']}
          gap={6}
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
          <NumberField name="acre" type="number" label="Hectares" />
        </Grid>

        <Flex flexDir="column" alignItems="center">
          <Image
            src={
              files?.source || initialValues?.imagePath || defaultSrc
            }
            alt="image"
            h={150}
            w={300}
            mb={5}
          />
          <Button
            onClick={() =>
              selectFiles(
                { accept: 'image/*' },
                ({ source, file }) => { },
              )
            }
          >
            Escolher arquivo
          </Button>
        </Flex>

        <Flex mt="50px">
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
