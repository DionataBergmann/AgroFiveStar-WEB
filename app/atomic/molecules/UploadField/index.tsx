import React, { useEffect, useState } from 'react'

import { BoxProps, Flex, FormControl, Text } from '@chakra-ui/react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'
import { Field, useField } from 'react-final-form'

export type UploadFieldProps = {
  name: string
  label?: string
  errorFieldName?: string
  boxProps?: BoxProps
} & Pick<
  DropzoneOptions,
  | 'maxFiles'
  | 'minSize'
  | 'accept'
  | 'disabled'
  | 'maxSize'
  | 'multiple'
>

export default function UploadField({
  name,
  label,
  boxProps,
  ...dropzoneOptions
}: UploadFieldProps) {
  const { input } = useField(name, {})

  const [files, setFiles] = useState([...input?.value])

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: Math.floor(Math.random() * 5000) + file.name,
        }),
      )
      setFiles(newFiles)
    },
    ...dropzoneOptions,
  })

  useEffect(() => {
    input?.onChange?.(files)

    return () => {
      files?.forEach((file) => URL.revokeObjectURL(file.preview))
    }
  }, [files, input])

  return (
    <FormControl id={input.name} {...boxProps}>
      <Field name={name}>
        {() => (
          <Flex
            flexDir="row"
            transition="300ms"
            {...getRootProps({ className: 'dropzone' })}
            cursor="pointer"
            align="center"
          >
            <input {...getInputProps()} />
            <Text
              color="primary.500"
              fontWeight="bold"
              textDecoration="underline"
            >
              {label}
            </Text>
          </Flex>
        )}
      </Field>
    </FormControl>
  )
}
