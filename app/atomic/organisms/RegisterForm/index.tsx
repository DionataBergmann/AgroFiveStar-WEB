import { SyntheticEvent, useState } from 'react'

import useRegister from '@app/features/auth/hooks/useRegister'
import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import router from 'next/router'

export const RegisterForm = () => {
  const [name, setName] = useState('')
  const [CPF, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState(false)

  const { register } = useRegister()
  const toast = useToast()
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      if (name && email && CPF != '') {
        await register({
          name: name,
          CPF: CPF,
          email: email,
          password: password,
        })
      } else {
        toast({
          title: 'Ocorreu um erro!',
          description: 'Preencha as informações corretamente.',
          status: 'error',
          position: 'top-right',
          variant: 'left-accent',
          isClosable: true,
        })
      }
    } catch (error) {
      setMessage(error?.message)
    }
  }

  return (
    <Flex
      flexDirection="row"
      width="100wh"
      height="100vh"
      justifyContent="end"
      alignItems="center"
      bgColor="primary"
    >
      <Img w="100%" h="100%" src="/assets/logo/capa.jpg" />
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box align="center">
          <Img w="100px" src="/assets/logo/logo.png" />
          <Text color="secundary">Agro FiveStar</Text>
        </Box>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={submit}>
            <Stack spacing={5} p="2rem" mt="60px">
              <Input
                h="50px"
                bgColor="white"
                placeholder="Primeiro nome"
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                h="50px"
                bgColor="white"
                placeholder="CPF"
                onChange={(e) => setCPF(e.target.value)}
              />

              <Input
                h="50px"
                bgColor="white"
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                h="50px"
                bgColor="white"
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                h="50px"
                bgColor="white"
                type="password"
                placeholder="Confirmar senha"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              {message ||
                (password != passwordConfirm && (
                  <span
                    style={{
                      marginLeft: 'auto',
                      color: 'white',
                      fontSize: '16px',
                    }}
                  >
                    {password != passwordConfirm
                      ? 'As senhas precisam ser idênticas'
                      : 'Preencha todas a informações corretamente'}
                  </span>
                ))}

              <Button
                mt="50px"
                ml="100px"
                h="50px"
                p="1rem"
                borderRadius={0}
                type="submit"
                variant="solid"
                bgColor="tertiary"
                color="white"
                _hover={{ bg: '#53754a' }}
                disabled={password != passwordConfirm}
              >
                Cadastrar
              </Button>
            </Stack>
          </form>
          <Text
            fontWeight="semibold"
            color="white"
            alignItems="center"
            textAlign="center"
          >
            Já possui conta?
            <Link
              ml="3px"
              textDecoration="underline"
              onClick={() => router.push('/login')}
            >
              Clique aqui
            </Link>
          </Text>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RegisterForm
