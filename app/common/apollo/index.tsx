import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client'
import createUploadLink from 'apollo-upload-client/public/createUploadLink.js'

const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  fetch: fetch,
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  ssrMode: !process.browser,
  link: uploadLink,
})

export const CustomApolloProvider = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  )
}
