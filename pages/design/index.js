import { useState } from 'react'
import Head from 'next/head'
import { LayoutGroup, useViewportScroll, useTransform, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import {
  PageContainer,
  MaxWidth,
  Text,
  Grid
} from '../../components/TendDesign/ui'
import Header from '../../components/TendDesign/Header'
import Hero from '../../components/TendDesign/Hero'
import SellingPoints from '../../components/TendDesign/SellingPoints'
import Statement from '../../components/TendDesign/Statement'
import CaseStudyCard from '../../components/TendDesign/CaseStudyCard'
import NarrativePoint from '../../components/TendDesign/NarrativePoint'
import FAQ from '../../components/TendDesign/FAQ'
import CTA from '../../components/TendDesign/CTA'
import Footer from '../../components/TendDesign/Footer'

const Design = ({}) => {
  const [ scrollYState, setScrollY ] = useState(0)
  const { scrollY } = useViewportScroll()
  scrollY.onChange(setScrollY)
  const y1 = useTransform(scrollY, [0, 2000], [80, -24]);
  const y2 = useTransform(scrollY, [0, 1024], [0, -120]);
  const y3 = useTransform(scrollY, [0, 2000], [-80, 0]);

  // console.log(y1)

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <>
      <Head>
        <title>Tend Design</title>
      </Head>

      <PageContainer noPadding>

        <Header />

        <Hero y2={y2} />

        <SellingPoints y1={y1} />

        <Statement
          noPaddingBottom
          title="We build scalable value for companies large and small."
          subtitle="Our UI systems aren't just a collection of arbitrary components, like you might get in a popular framework. Instead we build business logic in, so you can grow faster."
        />

        <CaseStudyCard />

        <NarrativePoint
          themed="lightened"
          title="A good design system is more than the sum of its parts."
          subtitle="A design system isn't only about creating a beautiful UI. Its equally, if not more, about supporting your team by creating a managable foundation for growth."
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

        <LayoutGroup>
          <motion.div layout>
            <FAQ
              questions={commonQuestions}
            />
          </motion.div>
          <motion.div layout layoutId="faq" transition={{duration: .15}}>
            <CTA />
            <Footer/>
          </motion.div>
        </LayoutGroup>



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
    question: 'What is the value of a UI System?',
    answer: 'A UI System empowers your team to build more quickly and with higher polish. Think of a UI System as a set of building blocks which productively constrain designers and engineers to make efficient, value-driven, decisions. Rather than having to re-invent the wheel with every new feature, a UI System brings visual unity, code consistency, and nuts-and-bolts clarity.'
  },
  {
    question: 'How is a UI System different from Brand Guidelines?',
    answer: 'Brand Guidelines are a helpful resource for visual designers to use when designing high-fidelity mockups and assets. They help to guide a visual designer to make the right “on-brand” aesthetic decisions. A UI System, however, goes much deeper than that. UI Systems are for both designers and engineers, and are as useful in Figma as they are in the code base. They bake-in visual decisions and code patterns from the start, delivering functional value, rather than simply reference material.'
  },
  {
    question: 'Who uses a UI System?',
    answer: 'Both designers and engineers are supercharged to create consistency and execute efficiently with a UI System. By creating a framework of building blocks, commonly shared and understood by both designers and engineers, a UI System bridges the gap across team members to empower more effective and higher value product development.'
  },
  {
    question: 'Where is a UI System maintained?',
    answer: 'A UI System exists both in your product’s codebase and in your designer’s design software. It establishes a common language used across the many facets of your product’s development, understood by all.'
  },
  {
    question: 'My company is growing and changing, how do I know we won’t just have to replace your UI System?',
    answer: 'As a company grows and evolves a UI System will grow with it. A UI System isn’t a static asset to be used once, instead, it is a dynamic framework for thinking about the building blocks of your product which is designed to evolve and change.'
  },
  {
    question: 'Why pay for a custom UI System over a popular framework?',
    answer: 'Popular frameworks are designed to allow the maximum flexibility for the broadest possible use case. But your product is unique. It addresses a specific market with specific growth goals and features on the roadmap. While a popular component framework can often feel like the right choice at first, the flexibility it offers can often become a burden when your user experience needs consistency and there are too many choices on the table. Simply put, a UI System offers the same benefits of a reusable kit of parts found in most popular frameworks, but with the added value of being tailored to your specific goals and needs.'
  },
  {
    question: 'Why not just get my current team to build a UI System?',
    answer: 'If your company is anything like the other startups we’ve worked with, you need to ship features quickly to grow, your engineers and designers have limited bandwidth to spend, and the constraints are always changing. Although a UI System is incredibly valuable to a growing company the difficult calculus of prioritization remains. By building your UI System with us externally you empower your team to continue to focus on building product.'
  },
]
