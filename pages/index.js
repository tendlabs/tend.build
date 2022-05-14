import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/theme'

import {
  PageContainer,
  MaxWidth,
  Text,
  Grid
} from '../components/ui'
import FocusArea from '../components/FocusArea'
import CTA from '../components/CTA'

export default function Home({ focusAreas }) {

  const unfurlImg = '../tend-unfurl.png'

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Tend | Design, Engineering, Product</title>
        <meta name="title" content="Tend" />
        <meta property="og:site_name" content="Tend" key="og_tend_site_name" />
        <meta name="description" content="We are founders, builders and operators who can provide your organization with product design, engineering, and strategy expertise to help your product thrive." />
        <meta name="keywords" content="Product Design, Minimum Viable Product, MVP, Startup, Tech, Software, Engineering, Design, Product, App" />
        <meta property="og:title" content="Tend" key="og_tend_site_title" />
        <meta property="og:description" content="We are founders, builders and operators who can provide your organization with product design, engineering, and strategy expertise to help your product thrive." key="og_tend_site_description" />
        <meta property="og:image" content={unfurlImg} key="og_tend_site_image" />
      </Head>

      <PageContainer>

        <MaxWidth>

          <CTA />

          <Grid container spacing={24}>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Text title super bold>Tend</Text>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <Text title regular>We are founders, builders and operators who can provide your organization with product design, engineering, and strategy expertise to help your product thrive.</Text>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={8}>
                {focusAreas.map((f,i) =>
                  <Grid item xs={12} key={i}>
                    <FocusArea
                      title={f.title}
                      description={f.description}
                      type={f.type}
                      icon={f.icon}
                      url={f.url}
                    />
                  </Grid>
                  )}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={12}>
                <Grid item>
                  <Text body regular lightened>&copy; 2022 Tend Labs LLC</Text>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

        </MaxWidth>
      </PageContainer>
    </ThemeProvider>
    </>
  )
}
export async function getStaticProps(context) {
  return {
    props: {
      focusAreas: [
        {
          title: 'Little Universe',
          description: 'We build products for amazing impact-focused organizations and businesses. We employ trust-driven agile practices to build and scale beautiful, accessible technology that drives momentum for causes that matter.',
          type: 'Impact',
          icon: 'megaphone',
          url: 'https://www.littleuniverse.com/'
        },
        {
          title: 'Parts',
          description: 'Realize your vision in half the time with custom components. Best in class responsive and accessible components, customized to your app and UX, so that you can focus on your specialty.',
          type: 'Systems',
          icon: 'layer',
          url: 'https://parts.studio/'
        },
        {
          title: 'Tend Labs',
          description: 'We partner with founders to ship critical-path product. We work together to materialize vision, plan roadmaps, write code to scale up and move fast. Zero to one.',
          type: 'Incubation',
          icon: 'rocket',
          url: null
        },
      ]
    }, // will be passed to the page component as props
  }
}
