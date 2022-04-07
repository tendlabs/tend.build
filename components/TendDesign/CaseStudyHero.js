import styled from 'styled-components'

import {
  Grid,
  Text,
  MaxWidth,
  Container,
  Section
} from './ui'

const CaseStudyHero = ({ title, subtitle }) => {
  return (
    <MaxWidth>
      <Section>
        <Grid container>
          <Grid item>
            <Text title super bold>{title}</Text>
          </Grid>
          <Grid item>
            <Text title super bold lightened>{subtitle}</Text>
          </Grid>
        </Grid>
      </Section>
    </MaxWidth>
  )
}

export default CaseStudyHero
