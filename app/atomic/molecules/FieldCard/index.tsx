import React from 'react'

import { Card } from '@app/atomic/atoms/Card'
import { FieldCardText } from '@app/atomic/molecules/FieldCardText'
import { InputFieldProps } from '@app/features/fields/helper'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'

import { MoreOptionsMenuButton } from '../MoreOptionsButtons'

export type FieldCardProps = {
  data: any
  id?: string
  name: string
  acre: string
  cordinates: string
  fieldImage: any
  imagePath: string
  onEdit?: any
  onDelete?: (id: string) => Promise<void>
  setInitialValues?: (value: InputFieldProps) => void
}

export const FieldCard: React.FC<FieldCardProps> = ({
  id,
  data,
  name,
  acre,
  cordinates,
  fieldImage,
  imagePath,
  onEdit,
  onDelete,
  setInitialValues,
}) => {
  function handleOnEdit() {
    setInitialValues({
      id: id,
      name: name,
      acre: acre,
      cordinates: cordinates,
      fieldImage: fieldImage?.filePath,
      imagePath: imagePath,
    })

    onEdit()
  }

  return (
    <Card
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      position="relative"
      w="100%"
      bgColor="primary"
    >
      <FieldCardText
        title={name}
        acre={acre}
        cordinates={cordinates}
        fieldImage={fieldImage}
        imagePath={imagePath}
      />
      <MoreOptionsMenuButton
        options={[
          {
            title: 'Editar informações',
            icon: FiEdit2,
            onClick: () => handleOnEdit(),
          },
          {
            title: 'Deletar Item',
            icon: FaRegTrashAlt,
            onClick: async () => await onDelete(data.id),
            showDeleteWarning: true,
          },
        ]}
        positionConfig={{ top: -1, right: '0px' }}
      />
    </Card>
  )
}
