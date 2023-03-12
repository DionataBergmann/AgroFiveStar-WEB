import { useLoginMutation } from '../graphql/mutations.generated'

export default function useLogin() {
  const [loginMutation, { loading: loadingLogin }] = useLoginMutation(
    {
      context: {
        enableErrorMessages: true,
      },
    },
  )

  async function login(email, password) {
    const { data } = await loginMutation({
      variables: {
        data: {
          email,
          password,
        },
      },
    })
    return { data }
  }

  return { login, loadingLogin }
}
