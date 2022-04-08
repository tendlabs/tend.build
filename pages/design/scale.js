import Head from 'next/head'
import Link from 'next/link'

import {
  PageContainer,
  MaxWidth,
  Text,
  Grid,
  Container,
  Section
} from '../../components/TendDesign/ui'
import Header from '../../components/TendDesign/Header'
import CaseStudyHero from '../../components/TendDesign/CaseStudyHero'
import CaseStudyCard from '../../components/TendDesign/CaseStudyCard'
import Statement from '../../components/TendDesign/Statement'
import NarrativePoint from '../../components/TendDesign/NarrativePoint'
import Testimonial from '../../components/TendDesign/Testimonial'
import PageSectionsList from '../../components/TendDesign/PageSectionsList'
import FeatureImage from '../../components/TendDesign/FeatureImage'
import CTA from '../../components/TendDesign/CTA'
import Footer from '../../components/TendDesign/Footer'

const Mighty = () => {
  return (
    <>
      <Head>
        <title>Tend Design | Scale Platform</title>
        <meta name="title" content="Tend" />
        <meta property="og:site_name" content="Tend" key="og_tend_site_name" />
        <meta name="description" content="An MVP and UI System for Scale Platform, the best place for attorneys to connect." />
        <meta name="keywords" content="Product Design, Minimum Viable Product, MVP, Startup, Tech, Software, Engineering, Design, Product, App" />
        <meta property="og:title" content="Tend" key="og_tend_site_title" />
        <meta property="og:description" content="We are founders, builders and operators who can provide your organization with product design, engineering, and strategy expertise to help your product thrive." key="og_tend_site_description" />
        <meta property="og:image" content={scaleHero} key="og_tend_site_image" />
      </Head>
      <PageContainer noPadding>

        <Header />

        <CaseStudyHero
          title="Scale Platform."
          subtitle="An MVP and UI System for Scale Platform, the best place for attorneys to connect."
        />

        <CaseStudyCard img={ScaleHero} />

        <Statement
          title="Context"
          subtitle="As the best place for attorneys to share referrals and earn new business, Scale Platform's engagement model relies on a dynamic chat experience. Within this context consistency and visual unity serves a critical trust-building role. We helped Scale Platform get from zero-to-one with a UI System that sets up growth."
          noPaddingBottom
          noPaddingTop
        />

        <NarrativePoint
          themed="light"
          points={Context}
        />

        <PageSectionsList sections={PageSections} />

        <Statement
          title="Ideate and design"
          subtitle="We began by generating designs for a variety of product areas to draw out the busienss logic which needed consideration and development."
        />

        <FeatureImage
          captionTitle="Industry specific chat."
          caption="To help lawyers both socialize and land new business we developed a minimal chat interface oriented around sharing referrals."
          img={scale1}
        />
        <FeatureImage
          captionTitle="Familiar patterns to move fast"
          caption="Since Mighty’s users are children, we designed effective cards to tell the story of running a business."
          img={scale2}
          reverse
        />

        <Statement
          title="Define key interface states"
          subtitle="We designed key states for important interface elements which drove the user experience. We focused on messages, message actions, and interactions surrounding chat."
          noPaddingBottom
        />

        <Section>
          <MaxWidth>
            <Container regular>
              <img src={scaleMessages} style={{width: '100%'}}/>
            </Container>
          </MaxWidth>
        </Section>

        <Statement
          noPaddingTop
          title="Design custom components"
          subtitle="With a deep understanding of the business logic and key interface states in hand, we developed a set of specific UI elements which could be extended as the product grew."
          noPaddingBottom
        />

        <Section>
          <MaxWidth>
            <Container regular>
              <img src={scaleComponents} style={{width: '100%'}}/>
            </Container>
          </MaxWidth>
        </Section>

        <Statement
          title="Implement and deliver"
          subtitle="We crafted the entire UI system to be as scalable and ready for growth as possible. We stayed in close contact with founders and stakeholders to ship the entire MVP."
          noPaddingBottom
          noPaddingTop
        />

        <NarrativePoint
          themed="light"
          points={Implement}
        />


        <Statement
          title="We shipped a powerful MVP with a UI System ready for growth and scale."
        />

        <Section>
          <MaxWidth>
            <Link href="/design/mighty">
              <a>
                <Grid container spacing={6}>
                  <Grid item>
                    <Text title regular bold lightened>Next case study</Text>
                    <Text title regular bold>Mighty</Text>
                  </Grid>
                  <Grid item>
                    <Container noPadding>
                      <img src={mightyHero} style={{width: '100%'}}/>
                    </Container>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </MaxWidth>
        </Section>

        <CTA />

        <Footer/>

      </PageContainer>
    </>
  )
}

export default Mighty

const mightyHero = '/design/case-studies/mighty-cover.png'
const ScaleHero = '/design/case-studies/scale-cover.png'
const scale1 = '/design/case-studies/scale-feature-1.png'
const scale2 = '/design/case-studies/scale-feature-2.png'
const scaleMessages = '/design/case-studies/scale-messages.png'
const scaleComponents = '/design/case-studies/scale-components.png'

const Implement = [
  {
    icon: 'trip',
    title: 'Built and shipped the MVP',
    subtitle: 'We worked closely with founders to design, product manage, and ship a functional and delightful MVP.'
  },
  {
    icon: 'windows',
    title: 'Optimized UI scalability',
    subtitle: 'We shipped a custom UI serving its purpose in the the present and optimized for future growth.'
  },
  {
    icon: 'conversation',
    title: 'Designed closely with founders',
    subtitle: 'We built with a tight feedback loop, enabling rapid technical prototypes to inform each phase of the process.'
  },
]

const Context = [
  {
    icon: 'cut',
    title: 'A growing community of specialized users needed a bespoke UI System.',
    subtitle: 'Scale Platform\'s founder knew attorneys had certain ways they communicated, and needed support to engage the way they wanted to. The UI needed to thread the needle between familiar patterns and unique interactions suited to this community.'
  },
  {
    icon: 'trim',
    title: 'Creating a consistent visual experience meant building trust with a niche community.',
    subtitle: 'As with any startup, building trust with users and delivering on value promised is key. A design system which ensured consistency even as features were updated and the product evolved was important.'
  },
]

const PageSections = [
  {
    icon: 'pen',
    title: 'Ideate and design'
  },
  {
    icon: 'layout',
    title: 'Define key interface states'
  },
  {
    icon: 'toggle-right',
    title: 'Design custom components'
  },
  {
    icon: 'code-block',
    title: 'Implement and deliver'
  },
]
