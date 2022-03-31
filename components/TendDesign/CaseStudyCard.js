import styled from 'styled-components'

import {
  Grid,
  Text,
  MaxWidth,
  Container,
  Section
} from './ui'

const StyledImage = styled.img`
  width: 100%;
`;
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: 0;
  max-height: 640px;
`

const CaseStudyCard = () => {
  return (
    <MaxWidth>
      {caseStudies.map((c, i) =>
        <Section noPaddingBottom={i < 3} key={i}>
          <Grid container spacing={12}>

            <Grid item xs={12}>
              <StyledContainer>
                <StyledImage src={c.img} />
              </StyledContainer>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6} mb={6}>
                  <Text title large bold>{c.title}</Text>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container flexDirection="column" spacing={4}>
                    <Grid item>
                      <Text body large>{c.description}</Text>
                    </Grid>
                    <Grid item>
                      <Text body mini bold lightened>Case study coming soon</Text>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Section>
      )}
    </MaxWidth>
  )
}

export default CaseStudyCard

const caseStudies = [
  {
    title: 'Mighty',
    description: 'We designed, built, and shipped a scalable UI system for the growing startup. We translated brand guidelines in a UI system designed for speed by working closely with the Mighty engineering team to ship it to production.',
    img: '/design/case-studies/mighty-cover.png'
  },
  {
    title: 'Scale Platform',
    description: 'We visioned and built an MVP working closely with the founder to conceptualize and execute on product vision. We developed a scalable UI system to support faster MVP development and shipped a production app in weeks.',
    img: '/design/case-studies/scale-cover.png'
  },
  {
    title: 'Wildflower Schools',
    description: 'We visioned and built an MVP faster with a scalable UI system. We developed high fidelity pitch materials to communicate the product vision and shipped a demoable MVP with a bespoke set of UI elements.',
    img: '/design/case-studies/wf-cover.png'
  },
  {
    title: 'Access Clean California',
    description: 'We proved government software can be accessible and beautiful by building a modern UI system. We transformed an inherited tech stack with stale patterns into a modern app with robust design, fundamentally improving the product, and overhauling UX with a systems lens.',
    img: '/design/case-studies/acc-cover.png'
  },
]
