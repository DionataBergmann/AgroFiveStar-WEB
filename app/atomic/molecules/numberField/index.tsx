import React, { memo } from 'react'

import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
  NumberInputProps,
} from '@chakra-ui/react'
import { ValidationRule } from 'fastest-validator'
import { useField, UseFieldConfig } from 'react-final-form'

export type TextFieldProps = {
  name: string
  label?: string
  labelProps?: FormLabelProps
  numberInputProps?: NumberInputProps
  inputProps?: NumberInputFieldProps
  type?: string
  disabled?: boolean
  isRequired?: boolean
  validate?: ValidationRule
  errorFieldName?: string
  hasStepper?: boolean
  styledLabel?: any
  textLabel?: string
  hasLabel?: boolean
  config?: UseFieldConfig<any>
  formatValue?: (value) => void
} & BoxProps

export const NumberField = memo(
  ({
    name,
    label,
    labelProps,
    numberInputProps,
    isRequired,
    inputProps,
    formatValue,
    disabled = false,
    hasLabel = true,
    styledLabel = null,
    ...props
  }: TextFieldProps) => {
    const { input, meta } = useField(name, {})

    function format(val) {
      if (!!formatValue) {
        return formatValue(val)
      }
      return val
    }

    return (
      <FormControl
        id={input.name}
        {...props}
        isDisabled={disabled}
        isInvalid={!!(meta.touched && meta.error)}
      >
        {hasLabel && (
          <FormLabel
            fontSize="sm"
            fontWeight="normal"
            color="boulder"
            {...labelProps}
          >
            {styledLabel ? styledLabel : label ? label + ':' : null}{' '}
            {isRequired && '*'}
          </FormLabel>
        )}
        <NumberInput
          size="md"
          {...input}
          value={format(input.value)}
          onChange={(value) => {
            input.onChange(Number(value))
          }}
          {...numberInputProps}
          type={props.type}
        >
          <NumberInputField
            color="boulder"
            borderRadius="10px"
            border="2px solid"
            borderColor="rgba(0,0,0,0.05)"
            {...inputProps}
          />
        </NumberInput>

        <FormErrorMessage>
          {meta.error?.[0]?.message && (
            <span>{meta.error?.[0]?.message}</span>
          )}
        </FormErrorMessage>
      </FormControl>
    )
  },
)
