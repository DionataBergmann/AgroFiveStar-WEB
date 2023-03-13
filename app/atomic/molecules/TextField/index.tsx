import React, { memo } from 'react'

import {
  BoxProps,
  FormControl,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
  Textarea,
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
  textArea?: boolean
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
        {!textArea && (
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
        {textArea && (
          <>
            <Textarea
              w="100%"
              name="description"
              placeholder="Insira uma descrição"
              size="sm"
              style={{
                color: 'boulder',
                borderRadius: '10px',
                border: '1px solid',
                borderColor: 'rgba(0,0,0,0.05)',
              }}
            />
          </>
        )}
      </FormControl>
    )
  },
)
