import { SyntheticEvent, useState } from 'react'

import { useAuthContext } from '@app/features/auth/context'
import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import router from 'next/router'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(false)
  const { login } = useAuthContext()

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      await login({
        password: password,
        email: email,
      })
    } catch (error) {
      setMessage(error?.message)
      console.log('LOGIN ERROR: ', error.message)
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
            <Stack spacing={5} p="2rem" mt="80px">
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
              {message && (
                <Text
                  style={{
                    marginLeft: 'auto',
                    color: 'white',
                    fontSize: '16px',
                  }}
                >
                  Usuário ou senha incorretos
                </Text>
              )}
              <Button
                mt="50px"
                h="50px"
                p="1rem"
                borderRadius={0}
                type="submit"
                variant="solid"
                bgColor="tertiary"
                color="white"
                width="full"
                _hover={{ bg: '#53754a' }}
              >
                Entrar
              </Button>
            </Stack>
          </form>

          <Text
            fontWeight="semibold"
            color="white"
            alignItems="center"
            textAlign="center"
          >
            Ainda não possui conta?
            <Link
              ml="3px"
              textDecoration="underline"
              onClick={() => router.push('/register')}
            >
              Clique aqui
            </Link>
          </Text>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginForm
