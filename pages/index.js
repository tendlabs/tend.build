import Head from 'next/head'

import {
  PageContainer,
  MaxWidth,
  Text,
  Grid
} from '../components/ui'
import FocusArea from '../components/FocusArea'

export default function Home({ focusAreas }) {

  return (
    <>
      <Head>
        <title>Tend</title>
        <meta name="title" content="Tend" />
        <meta property="og:site_name" content="Tend" key="og_tend_site_name" />
        <meta name="description" content="Tend" />
        <meta name="keywords" content="Product Design, Minimum Viable Product, MVP, Startup, Tech, Software, Engineering, Design, Product, App" />
        <meta property="og:title" content="Tend" key="og_tend_site_title" />
        <meta property="og:description" content="Tend" key="og_tend_site_description" />
      </Head>

      <PageContainer>
        <MaxWidth>

          <Grid container spacing={24}>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Text title headline bold>Tend</Text>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <Text body>We are founders, builders and operators who can provide your organization with product design, engineering, and strategy expertise to help your product thrive.</Text>
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
                  <Text body small lightened>&copy; 2022 Tend Labs LLC</Text>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

        </MaxWidth>
      </PageContainer>

    </>
  )
}
export async function getStaticProps(context) {
  return {
    props: {
      focusAreas: [
        {
          title: 'Tend Labs',
          description: 'We partner with founders to ship critical-path product. We work together to materialize vision, plan roadmaps, write code to scale up and move fast. Zero to one.',
          type: 'Incubation',
          icon: 'rocket',
          url: null
        },
        {
          title: 'Little Universe',
          description: 'We build products for amazing impact-focused organizations and businesses. We employ trust-driven agile practices to build and scale beautiful, accessible technology that drives momentum for causes that matter.',
          type: 'Impact',
          icon: 'megaphone',
          url: 'https://www.littleuniverse.com/'
        },
        {
          title: 'Radius',
          description: 'We create curated design systems conceptualized, built, and shipped for our client’s products. We believe that when you need to move fast, constraint is empowering. We ship the polished building blocks that unify a team and empower growth.',
          type: 'Systems',
          icon: 'layer',
          url: null
        },
      ]
    }, // will be passed to the page component as props
  }
}
