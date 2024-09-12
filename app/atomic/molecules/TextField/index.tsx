import React, { forwardRef, memo, useEffect, useState } from 'react'

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
  placeholder?: string
  config?: UseFieldConfig<any>
  hasLabel?: boolean
  textArea?: boolean
  dateField?: boolean
  value?: string
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
    placeholder,
    value,
    ...props
  }: TextFieldProps) => {
    const [startDate, setStartDate] = useState(new Date())
    const { input, meta } = useField(name, {})

    registerLocale('ptBR', ptBR)

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
            placeholder={placeholder}
            border="2px solid"
            maxLength={maximumOfletters}
            borderColor="rgba(0,0,0,0.05)"
            {...input}
            type={props.type}
            value={input.value ? input.value : value}
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
              selected={input.value ? new Date(input.value) : startDate}
              locale="ptBR"
              dateFormat="dd/MM/yyyy"
              onChange={(date) => {
                setStartDate(date)  
                input.onChange(date) 
              }}
              placeholderText={simpleDateFormat(new Date())}
            />
          </>
        )}
      </FormControl>
    )
  },
)
