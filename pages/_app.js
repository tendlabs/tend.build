import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/theme'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from "framer-motion"

import {
  Layout
} from '../components/ui'

function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>

      <GlobalStyle/>

      <Layout lightBg={router.pathname === '/design'}>
        <Component key={router.pathname} {...pageProps} />
      </Layout>

    </ThemeProvider>
  )

}

export async function getStaticProps(context) {
  return {}
}

export default App
