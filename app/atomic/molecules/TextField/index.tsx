import React, { memo } from 'react'

import {
  BoxProps,
  FormControl,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
} from '@chakra-ui/react'
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
} & BoxProps

export const TextField = memo(
  ({
    name,
    maximumOfletters,
    label,
    labelProps,
    isRequired,
    hasLabel = true,
    ...props
  }: TextFieldProps) => {
    const { input, meta } = useField(name, {})

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
        <Input
          color="boulder"
          size="md"
          borderRadius="5px"
          border="2px solid"
          maxLength={maximumOfletters}
          borderColor="rgba(0,0,0,0.05)"
          {...input}
          type={props.type}
        />
      </FormControl>
    )
  },
)
