import React from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  InputProps,
  Select,
  SelectProps,
} from '@chakra-ui/react'
import { useField, UseFieldConfig } from 'react-final-form'

export type SelectFieldProps = {
  name: string
  label?: string
  labelProps?: FormLabelProps
  inputProps?: InputProps
  type?: string
  isRequired?: boolean
  validate?: string
  placeholder?: string
  errorFieldName?: string
  config?: UseFieldConfig<any>
} & SelectProps

const SelectField = ({
  name,
  label,
  children,
  labelProps,
  isRequired,
  placeholder,

  ...props
}: SelectFieldProps) => {
  const { input, meta } = useField(name, {})

  return (
    <FormControl
      id={input.name}
      isInvalid={!!(meta.touched && meta.error)}
    >
      <FormLabel
        fontSize="sm"
        fontWeight="normal"
        color="boulder"
        {...labelProps}
      >
        {label} {isRequired && '*'}
      </FormLabel>
      <Select
        color="boulder"
        size="md"
        borderRadius="10px"
        border="2px solid"
        placeholder={placeholder}
        {...input}
        {...props}
      >
        {children}
      </Select>

      <FormErrorMessage>
        {meta.error?.[0]?.message && (
          <span>{meta.error?.[0]?.message}</span>
        )}
      </FormErrorMessage>
    </FormControl>
  )
}

export default SelectField
