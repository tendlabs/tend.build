import Head from 'next/head'

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
    <PageContainer noPadding>

      <Header />

      <CaseStudyHero/>

      <CaseStudyCard img={mightyHero} />

      <Statement
        title="Context"
        subtitle="As startup with a mission to empower kids through entrepreneurship, Mighty had built an exciting MVP with clear traction. Mighty had brand guidelines in-hand but needed to conform their UI in order to achieve consistency. Without an internal design team, they didn’t have the time or resources available to do it in-house."
        noPaddingBottom
        noPaddingTop
      />

      <NarrativePoint
        themed="light"
        points={Context}
      />

      <Section noPaddingTop>
        <Testimonial />
      </Section>

      <PageSectionsList />

      <Statement
        title="Assess and learn"
        subtitle="We started by doing everything we could to understand Mighty’s business. Our initial product discovery process consisted of the following materials and actions."
        noPaddingBottom
      />


      <NarrativePoint
        themed="light"
        points={AssessPoints}
      />

      <Statement
        noPaddingTop
        title="Spike key feature design"
        subtitle="We started by doing everything we could to understand Mighty’s business. Our initial product discovery process consisted of the following materials and actions."
      />

      <FeatureImage
        captionTitle="A unique Product List Page"
        caption="Identifying special moments on the PLP to integrate unique components."
        img={mighty1}
      />

      <FeatureImage
        captionTitle="Special UI to educate kids."
        caption="Since Mighty’s users are children, we designed effective cards to tell the story of running a business."
        img={mighty2}
        reverse
      />

      <Statement
        title="Design custom components"
        subtitle="By analyzing Mighty’s business context and developing an understanding of their roadmap we devised a curated list of components to empower engineers and move the needle."
        noPaddingBottom
        noPaddingTop
      />

      <Section>
        <MaxWidth>
          <Container regular>
            <img src={mightyComponents} style={{width: '100%'}}/>
          </Container>
        </MaxWidth>
      </Section>

      <Statement
        title="Implement and deliver"
        subtitle="We worked closely with Mighty’s engineers to craft exactly the right patterns and technical approaches to building their UI System. We executed a process that resulted in a UI system customized to them that works with their codebase."
        noPaddingBottom
        noPaddingTop
      />

      <NarrativePoint
        themed="light"
        points={Implement}
      />

      <Statement
        title="We delivered a scalable UI system to Mighty, unblocking their team to build product."
      />

      <CTA />

      <Footer/>



    </PageContainer>
  )
}

export default Mighty

const mightyHero = '/design/case-studies/mighty-cover.png'
const mighty1 = '/design/case-studies/mighty-feature-1.png'
const mighty2 = '/design/case-studies/mighty-feature-2.png'
const mightyComponents = '/design/case-studies/mighty-components.png'

const Implement = [
  {
    icon: 'book-open',
    title: 'Built in Storybook with Chromatic',
    subtitle: 'We built the components directly Mighty’s codebase and Storybook, setting them up to expand.'
  },
  {
    icon: 'collection',
    title: 'Pairing and code reviews',
    subtitle: 'We worked closely with Mighty’s engineers to ensure the UI System would be exactly what was needed.'
  },
  {
    icon: 'git-merge',
    title: 'PR\'d to Mighty\'s team',
    subtitle: 'We wrote code and submitted pull requests which received review so that we could keep everyone aligned.'
  },
]

const Context = [
  {
    icon: 'book-reader',
    title: 'Hiring external design consultants didn’t feel like the right path.',
    subtitle: 'The design consultants Mighty had previously talked to didn’t have the technical background to implement their UI systems, and were quoting high dollar amounts for static mockups.'
  },
  {
    icon: 'windows',
    title: 'Existing brand guidelines weren’t helping Mighty to think about product problems.',
    subtitle: 'Prior investment in brand guidelines promised consistency, but wasn’t effectively generating it. Engineers were having trouble building a consistent visual language.'
  },
  {
    icon: 'compass',
    title: 'With an aggressive product roadmap, pressure on engineering resources was high.',
    subtitle: 'While important, diverting resources away from important feature work to solve their design consistency problem didn’t feel like an option.'
  },
  {
    icon: 'code-block',
    title: 'Laser focus on growth meant building scalable systems was important.',
    subtitle: 'Mighty was growing by moving fast and creating growth, but needed to make sure their systems could scale as demand for their product grew, including building consistencty into their UI.'
  },
]

const AssessPoints = [
  {
    icon: 'book-open',
    title: 'Review brand guidelines',
    subtitle: 'Mighty shared a brand book with guidelines for us to look at. Some of the guidelines had been implemented on the production product, and some hadn’t, or to varying effect. We built our understanding of what was effective, and what wasn’t.'
  },
  {
    icon: 'collection',
    title: 'Learn product history',
    subtitle: 'In sprinting to ship their MVP, Mighty had invested in a few different design iterations of their product. We looked at everything they’d had made, implemented or not, and got up to speed on the history of the design language'
  },
  {
    icon: 'conversation',
    title: 'Interview stakeholders',
    subtitle: 'We performed stakeholder interviews with product, engineering, and company leadership to better understand exactly what the UI System should solve for. We got a sense for product roadmap, business goals, and vision.'
  },
]
