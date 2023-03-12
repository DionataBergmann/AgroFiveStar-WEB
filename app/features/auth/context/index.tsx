import React from 'react'
import { createContext, useCallback, useContext } from 'react'

import { ApolloQueryResult } from '@apollo/client'
import { useRouter } from 'next/router'

import {
  destroyCookie,
  setCookie,
} from '../../../common/utils/cookies'
import { MeQuery } from '../graphql/queries.generated'
import useLogin from '../hooks/useLogin'
import useMeLazy from '../hooks/useMeLazy'

type loginProps = {
  email: string
  password: string
  onIncompleteRegister?: () => void
}

type AuthContextType = {
  login(props: loginProps): Promise<void>
  logout(): Promise<void>
  me: any
  loadingMe: boolean
  loadingLogin: boolean
  refetchMe(): Promise<ApolloQueryResult<MeQuery>>
}

const AuthContext = createContext<AuthContextType>({
  login: async () => undefined,
  logout: async () => undefined,
  me: undefined,
  refetchMe: async () => undefined,
  loadingMe: false,
  loadingLogin: false,
})

export function AuthProvider({ children }) {
  const router = useRouter()

  const { getMe, data, refetch, loading } = useMeLazy()
  const me = data?.me

  const { login: loginMutation, loadingLogin } = useLogin()

  const login = useCallback(
    async ({ email, password }) => {
      try {
        const { data } = await loginMutation(email, password)

        if (data.loginUser.token) {
          setCookie('authToken', data.loginUser.token, undefined)
          setCookie('name', data.loginUser.user?.name, undefined)
          await getMe()

          router.push('/areas')
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getMe, loginMutation, router],
  )

  const logout = useCallback(async () => {
    await destroyCookie('authToken')
    router.push('/login')
  }, [router])

  return (
    <AuthContext.Provider
      value={{
        login,
        loadingLogin,
        logout,
        me,
        refetchMe: refetch,
        loadingMe: loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
