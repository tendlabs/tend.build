import Head from 'next/head'

import {
  PageContainer,
  MaxWidth,
  Text,
  Grid
} from '../components/ui'
import CTA from '../components/CTA'
import FocusArea from '../components/FocusArea'

export default function Home() {

  return (
    <>
      <Head>
        <title>Tend Build</title>
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
                  <Text body>We create unique value by building software, teams, and systems. We fly under the radar so the people, causes, and products we work with win.</Text>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={8}>
                {FocusAreas.map((f,i) =>
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
                  <Text body small>&copy; 2022 Tend Labs LLC</Text>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

        </MaxWidth>
      </PageContainer>

    </>
  )
}

const FocusAreas = [
  {
    title: 'Tend Garden',
    description: 'Digital design studio investing in our shared future. Building trust, tech, and tools for nonprofits.',
    type: 'Incubation',
    icon: 'rocket',
    url: '/'
  },
  {
    title: 'Radius',
    description: 'Digital design studio investing in our shared future. Building trust, tech, and tools for nonprofits.',
    type: 'Systems',
    url: '/'
  },
  {
    title: 'Little Universe',
    description: 'Digital design studio investing in our shared future. Building trust, tech, and tools for nonprofits.',
    type: 'Impact',
    url: '/'
  },
]
