import { createStandaloneToast } from '@chakra-ui/react'

import { errorMessages } from './messages'

const toast = createStandaloneToast()
export function catchError(error: Error) {
  let message = errorMessages[error.message] ?? 'Ocorreu um erro'
  if (message === 'Ocorreu um erro') {
    for (const key of Object.keys(errorMessages)) {
      if (error.message.toUpperCase().includes(key)) {
        message = errorMessages[key]
        break
      }
    }
  }

  const description =
    message === 'Ocorreu um erro' ? `Cód: ${error.message}` : ''

  toast({
    position: 'top-right',
    title: message,
    description,
    status: 'error',
    isClosable: true,
  })
}
