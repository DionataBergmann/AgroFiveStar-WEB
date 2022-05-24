import React from 'react'

import { Card } from '@app/atomic/atoms/Card'
import { FieldCardText } from '@app/atomic/molecules/FieldCardText'

export type FieldCardProps = {
  title: string
  id?: string
  acre: number
  imageUrl: string
}

export const FieldCard: React.FC<FieldCardProps> = ({
  title,
  acre,
  imageUrl,
}) => {
  return (
    <Card
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      position="relative"
      w="100%"
      bgColor="primary"
    >
      <FieldCardText title={title} acre={acre} imageUrl={imageUrl} />
    </Card>
  )
}
