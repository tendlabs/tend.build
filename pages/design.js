import Head from 'next/head'

import {
  PageContainer,
  MaxWidth,
  Text,
  Grid
} from '../components/ui'
import Header from '../components/TendDesign/Header'
import Hero from '../components/TendDesign/Hero'
import SellingPoints from '../components/TendDesign/SellingPoints'

const Design = ({}) => {
  return (
    <>
      <Head>
        <title>Tend Design</title>
      </Head>

      <PageContainer noPadding>

        <Header />
        <Hero />
        <SellingPoints />

      </PageContainer>
    </>
  )
}

export default Design
