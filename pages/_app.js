import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { GlobalStyle, theme } from '../styles/theme'
import { designTheme } from '../styles/tend-design-theme'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from "framer-motion"
import { ModalProvider } from 'styled-react-modal'

import {
  Layout
} from '../components/ui'

const StyledModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.util.buffer * 6}px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background: ${({ theme }) => theme.color.opacity.dark48};
`;

function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider theme={router.pathname.includes('/design') ? designTheme : theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ModalProvider backgroundComponent={StyledModalBackground}>

        <GlobalStyle/>

        <Layout lightBg={router.pathname.includes('/design')}>
          <Component key={router.pathname} {...pageProps} />
        </Layout>

      </ModalProvider>

    </ThemeProvider>
  )

}

export async function getStaticProps(context) {
  return {}
}

export default App
