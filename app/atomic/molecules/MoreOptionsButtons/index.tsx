import React, { useRef, useState } from 'react'

import { pxToRem } from '@app/common/theme/utils'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PositionProps,
} from '@chakra-ui/react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IconType } from 'react-icons/lib'

export type MoreOptionsMenuButtonProps = {
  options: Array<{
    title: string
    icon: IconType
    color?: string
    onClick: () => void
    showDeleteWarning?: boolean
    showCancelWarning?: boolean
  }>
  positionConfig?: PositionProps
  size?: string
}

export const MoreOptionsMenuButton: React.FC<
  MoreOptionsMenuButtonProps
> = ({ options, positionConfig, size = '22px' }) => {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const cancelRef = useRef()
  function handleOnDelete() {
    setDeleteOpen(true)
  }
  function handleCancelDelete() {
    setDeleteOpen(false)
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FiMoreHorizontal size={size} color="#3E2448" />}
        _focus={{ focus: 'none' }}
        variant="ghost"
        borderRadius="50%"
        _hover={{ bgColor: 'rgba(0,0,0,0.05)' }}
        _active={{ bgColor: 'rgba(0,0,0,0.05)' }}
        position="absolute"
        {...positionConfig}
      />
      <MenuList>
        {options.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <MenuItem
                color={item.color ? item.color : 'boulder'}
                icon={
                  <item.icon
                    size={pxToRem(17)}
                    color={item.color ? item.color : '#8ECEA6'}
                  />
                }
                onClick={
                  item.showDeleteWarning
                    ? handleOnDelete
                    : item.onClick
                }
              >
                {item.title}
              </MenuItem>
              {item.showDeleteWarning ? (
                <AlertDialog
                  isOpen={deleteOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={handleCancelDelete}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent
                      style={{ textAlign: 'center' }}
                    >
                      <AlertDialogHeader
                        fontSize="lg"
                        fontWeight="bold"
                        color="#3E2448"
                      >
                        Essa é uma ação permanente, você tem certeza
                        que deseja{' '}
                        {item?.showCancelWarning
                          ? 'cancelar'
                          : 'excluir'}
                        ?
                      </AlertDialogHeader>
                      <AlertDialogFooter
                        style={{ justifyContent: 'center' }}
                      >
                        <Button onClick={handleCancelDelete}>
                          Cancelar
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={item.onClick}
                          ml={10}
                        >
                          {item?.showCancelWarning
                            ? 'Alterar'
                            : 'Deletar'}
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              ) : null}
            </React.Fragment>
          )
        })}
      </MenuList>
    </Menu>
  )
}
