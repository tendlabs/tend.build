import Head from 'next/head'

import {
  PageContainer,
  MaxWidth,
  Text,
  Grid
} from '../components/TendDesign/ui'
import Header from '../components/TendDesign/Header'
import Hero from '../components/TendDesign/Hero'
import SellingPoints from '../components/TendDesign/SellingPoints'
import Statement from '../components/TendDesign/Statement'
import PortfolioCards from '../components/TendDesign/PortfolioCards'
import NarrativePoint from '../components/TendDesign/NarrativePoint'
import FAQ from '../components/TendDesign/FAQ'
import Footer from '../components/TendDesign/Footer'

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

        <Statement
          title="We build scalable value for companies large and small."
          subtitle="Our UI systems aren’t just a collection of arbitrary components, like you might get in a popular framework. Instead we build business logic in, so you can grow faster."
        />

        <PortfolioCards />

        <NarrativePoint
          offset
          themed="lightened"
          title="A good design system is more than the sum of its parts."
          subtitle="A design system isn’t only about creating a beautiful UI. Its equally, if not more, about supporting your team by creating a managable foundation for growth."
          points={DesignSystem}
        />

        <NarrativePoint
          titleLarge
          themed="dark"
          title="We design UI systems so engineers can move fast."
          subtitle="We get the right patterns in place which address the right constraints, so you can just get to building."
          points={Engineering}
        />

        <NarrativePoint
          title="We bring clarity to an inherently messy process."
          subtitle="Building and shipping products is a game best played fast. We get it, and wouldn’t change it for the world. We bring an external set of eyes and a plan of action to the table."
          points={Clarity}
        />

        <FAQ
          questions={commonQuestions}
        />

        <Footer/>

      </PageContainer>
    </>
  )
}

export default Design

const DesignSystem = [
  {
    icon: 'chart',
    title: 'Create Scalability',
    subtitle: 'Design and development work can be created and replicated easily, quickly, and efficiently at scale.'
  },
  {
    icon: 'buoy',
    title: 'Unconstrain Resources',
    subtitle: 'Alleviation of strain on design and development resources can allow teams to focus on larger, more complex problems.'
  },
  {
    icon: 'puzzle',
    title: 'Unify Language',
    subtitle: 'Crossfunctional teams are empowered with a unified visual language.'
  },
  {
    icon: 'magnet',
    title: 'Empower Consistency',
    subtitle: 'Visual consistency is created across products, channels, and efforts.'
  },
  {
    icon: 'glasses',
    title: 'Level-Up Onboarding',
    subtitle: 'Create a resource for new team members to ramp up quickly.'
  },
]

const Engineering = [
  {
    icon: 'ruler',
    title: 'We handle your UI by building custom components.',
    subtitle: 'We build bespoke components, specifically suited to your product so you can get past styleing and build.'
  },
  {
    icon: 'brush',
    title: 'We build your brand directly into your codebase.',
    subtitle: 'All the important decisions about style and design should live right in your codebase so each component handles brand out of the box, every time.'
  },
  {
    icon: 'intersect',
    title: 'We’re a team of designers who code and developers who design.',
    subtitle: 'We excel at making sure all the pieces fit perfectly together. We don’t design things that can’t be built, and we don’t build things that don’t make sense for your product.'
  },
  {
    icon: 'selection',
    title: 'We’re library agnostic, and build opinions about how to use them.',
    subtitle: 'Libraries like Tailwind or Material UI are great, but without intent, they can create UX and product problems. We make sure they’re applied within your company’s needs.'
  },
]

const Clarity = [
  {
    icon: 'search',
    step: '1',
    title: 'Assess the product',
    subtitle: 'We start the process by auditing your product, understanding your business, and talking to your team.',
  },
  {
    icon: 'star',
    step: '2',
    title: 'Design key moments',
    subtitle: 'Then we pull out high leverage product areas to focus on, designing key moments to identify patterns.',
  },
  {
    icon: 'rocket',
    step: '3',
    title: 'Build and ship',
    subtitle: 'Finally, we work with your team to discover the best way to implement code and ship a UI system.',
  },
]

const commonQuestions = [
  {
    question: 'Why is it better to hire you, than build my internal team?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'Why is it better to hire you, than build my internal team?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'Why is it better to hire you, than build my internal team?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'Why is it better to hire you, than build my internal team?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'Why is it better to hire you, than build my internal team?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'Why is it better to hire you, than build my internal team?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
]
