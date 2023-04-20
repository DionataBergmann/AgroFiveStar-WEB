import { catchError } from '@app/common/errors/catch-and-toast-error'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { useCreateOneUserMutation } from '../graphql/mutations.generated'

export default function useRegister() {
  const toast = useToast()
  const router = useRouter()

  const [createOneFieldMutation, { data: registerData }] =
    useCreateOneUserMutation()

  async function register(values) {
    try {
      const { data: registerData } = await createOneFieldMutation({
        variables: {
          input: {
            user: {
              name: values?.name,
              email: values?.email,
              CPF: values?.CPF,
              password: values?.password,
              roles: {
                id: '9a389e0e-55e2-4127-8084-385726b03b19',
              },
            },
          },
        },
      })

      toast({
        title: 'Sucesso!',
        description: 'Usuário criado com sucesso.',
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
      })

      router.push('/login')
      return registerData
    } catch (error) {
      catchError(error)
    }
  }

  return { register, registerData }
}
