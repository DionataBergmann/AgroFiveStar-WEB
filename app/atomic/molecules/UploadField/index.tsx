import React, { useState } from 'react'

import { InputGroup } from '@chakra-ui/react'
import { useForm } from 'react-final-form'

type UploadFieldProps = {
  name: string
  accept?: string
  multiple?: boolean
  children?:
  | ((props: {
    onClick?: () => void
    fileList: File[]
  }) => React.ReactNode)
  | JSX.Element
}

export const UploadField: React.FC<UploadFieldProps> = ({
  name,
  accept,
  multiple,
  children,
}) => {
  const form = useForm()
  const [fileList, setFileList] = useState<File[]>([])
  const inputRef = React.createRef<HTMLInputElement>()

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (
    value,
  ) => {
    if (value.target.files) {
      if (multiple) {
        const files: File[] = []

        for (let i = 0; i < value.target.files.length; i++) {
          const file = value.target.files.item(i)
          if (file) files.push(file)
        }

        form.change(name, value.target.files)
        setFileList(files)
      } else {
        const file = value.target.files.item(0)

        form.change(name, file)
        setFileList(file ? [file] : [])
      }
    }
  }

  const onClick = () => inputRef?.current?.click()

  return (
    <InputGroup>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        hidden
        onChange={onChange}
      />
      {typeof children !== 'function'
        ? children
        : children({ onClick, fileList })}
    </InputGroup>
  )
}
