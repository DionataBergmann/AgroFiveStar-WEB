import React, { forwardRef, memo, useState } from 'react'

import { simpleDateFormat } from '@app/common/utils/simpleFormat'
import {
  BoxProps,
  Flex,
  FormControl,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
  Text,
  Textarea,
} from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import DatePicker, { registerLocale } from 'react-datepicker'
import { useField, UseFieldConfig } from 'react-final-form'

export type TextFieldProps = {
  name: string
  maximumOfletters?: number
  label?: string
  labelProps?: FormLabelProps
  inputProps?: InputProps
  type?: string
  isRequired?: boolean
  errorFieldName?: string
  config?: UseFieldConfig<any>
  hasLabel?: boolean
  textArea?: boolean
  dateField?: boolean
} & BoxProps

export const TextField = memo(
  ({
    name,
    maximumOfletters,
    label,
    labelProps,
    isRequired,
    hasLabel = true,
    textArea,
    dateField,
    ...props
  }: TextFieldProps) => {
    const [startDate, setStartDate] = useState()
    const { input, meta } = useField(name, {})

    registerLocale('ptBR', ptBR)

    const ExampleCustomInput = forwardRef(
      ({ value, onClick }: any, ref: any) => (
        <Flex
          onClick={onClick}
          ref={ref}
          p="10px 5px"
          cursor="pointer"
          h="38px"
          w="120%"
          alignItems="center"
        >
          {!value && (
            <Flex
              px="5px"
              alignItems="center"
              w="100%"
              h="100%"
              pos="absolute"
            >
              <Text mt="4px" color="gray.400">
                DD/MM/AAAA
              </Text>
            </Flex>
          )}
          {simpleDateFormat(value)}
        </Flex>
      ),
    )

    return (
      <FormControl
        id={input.name}
        {...props}
        isInvalid={!!(meta.touched && meta.error)}
      >
        {hasLabel && (
          <FormLabel
            fontSize="sm"
            fontWeight="normal"
            color="boulder"
            {...labelProps}
          >
            {label ? label + ':' : null} {isRequired && '*'}
          </FormLabel>
        )}
        {!textArea && !dateField && (
          <Input
            color="boulder"
            size="md"
            borderRadius="10px"
            border="2px solid"
            maxLength={maximumOfletters}
            borderColor="rgba(0,0,0,0.05)"
            {...input}
            type={props.type}
          />
        )}
        {textArea && !dateField && (
          <>
            <Textarea
              w="100%"
              placeholder="Insira uma descrição"
              size="sm"
              style={{
                color: 'boulder',
                borderRadius: '10px',
                border: '1px solid',
                borderColor: 'rgba(0,0,0,0.05)',
              }}
              {...input}
            />
          </>
        )}
        {dateField && (
          <>
            <DatePicker
              selected={startDate}
              locale="ptBR"
              dateFormat="dd/MM/yyyy"
              customInput={<ExampleCustomInput />}
              {...input}
            />
          </>
        )}
      </FormControl>
    )
  },
)
