import React from 'react'

import {
  Modal as CKModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps as CKModalProps,
} from '@chakra-ui/react'

export type ModalProps = {
  title?: string
  closable?: boolean
  footer?: React.ReactNode
  maxSteps?: number
  actualStep?: number
  size?:
    | '4xl'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '5xl'
    | '6xl'
    | 'full'
} & CKModalProps

export const Modal: React.FC<ModalProps> = ({
  title,
  closable = true,
  footer,
  maxSteps,
  actualStep,
  size,
  ...props
}) => {
  return (
    <CKModal
      size={size ? size : '4xl'}
      scrollBehavior="inside"
      {...props}
    >
      <ModalOverlay />
      <ModalContent>
        {title && (
          <ModalHeader
            textAlign="center"
            fontSize="md"
            fontWeight="bold"
            color="boulder"
            pt={maxSteps && actualStep && 0}
          >
            {title}
          </ModalHeader>
        )}
        {closable && <ModalCloseButton />}
        <ModalBody>{props.children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </CKModal>
  )
}
