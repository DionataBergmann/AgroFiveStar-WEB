import 'react-datepicker/dist/react-datepicker.css'
import '../styles/reset.css'

import React from 'react'

import { getDataFromTree } from '@apollo/react-ssr'
import {
  apolloClient,
  CustomApolloProvider,
} from '@app/common/apollo'
import { theme } from '@app/common/theme'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  const Template = Component?.template || EmptyTemplate

  return (
    <CustomApolloProvider>
      <ChakraProvider theme={theme}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </ChakraProvider>
    </CustomApolloProvider>
  )
}

const EmptyTemplate = ({ children }) => <>{children}</>

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {} as any
  const apolloState = { data: {} }
  const { AppTree } = ctx

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  if (typeof window === 'undefined') {
    if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
      return pageProps
    }

    try {
      const props = {
        ...pageProps,
        apolloState,
        apollo: apolloClient,
      }
      const appTreeProps =
        'Component' in ctx ? props : { pageProps: props }
      await getDataFromTree(<AppTree {...appTreeProps} />)
    } catch (error) {
      console.error('GraphQL error occurred [getDataFromTree]', error)
    }

    apolloState.data = apolloClient.cache.extract()
  }

  return { pageProps }
}

export default MyApp
