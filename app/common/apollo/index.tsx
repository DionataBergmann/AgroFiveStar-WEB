import {
  ApolloClient,
  ApolloProvider,
  concat,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { config } from '@app/config/env'
import createUploadLink from 'apollo-upload-client/public/createUploadLink.js'

import { getCookie } from '../utils/cookies'

const setAuthorizationLink = setContext(() => {
  const token = getCookie('authToken')

  if (token) {
    return {
      headers: {
        authorization: 'Bearer ' + token,
      },
    }
  }
  return {}
})

const uploadLink = createUploadLink({
  uri: config.API_URL,
  fetch: fetch,
})

const splitLink = uploadLink

const errorLink = onError(
  ({ graphQLErrors, networkError, operation }) => {
    if (operation?.getContext()?.enableErrorMessages) {
      console.log(graphQLErrors)
      console.log(networkError)
    }
  },
)

export const apolloClient = new ApolloClient({
  link: setAuthorizationLink.concat(concat(errorLink, splitLink)),
  //link: errorLink.concat(concat(authMiddleware, splitLink)),
  ssrMode: !process.browser,
  cache: new InMemoryCache(),
})

export const CustomApolloProvider = ({ children }: any) => {
  return (
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  )
}
