import styled from 'styled-components'

import {
  Grid,
  Text,
  MaxWidth,
  Container,
  Section
} from './ui'

const CaseStudyHero = () => {
  return (
    <MaxWidth>
      <Section>
        <Grid container>
          <Grid item>
            <Text title super bold>Mighty.</Text>
          </Grid>
          <Grid item>
            <Text title super bold lightened>A UI System for the internet's best lemonade stand.</Text>
          </Grid>
        </Grid>
      </Section>
    </MaxWidth>
  )
}

export default CaseStudyHero
