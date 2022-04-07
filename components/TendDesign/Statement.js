import styled from 'styled-components'

import {
  Section,
  MaxWidth,
  Grid,
  Text
} from './ui'

const Statement = ({title, subtitle, noPadding, noPaddingBottom, noPaddingTop, light }) => {
  return (
    <Section noPadding={noPadding} noPaddingBottom={noPaddingBottom} noPaddingTop={noPaddingTop}>
      <MaxWidth>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Grid container spacing={8}>
              <Grid item>
                <Text title large bold light={light}>{title}</Text>
              </Grid>
              <Grid item>
                <Text title small lightened={!light} darkened={light}>{subtitle}</Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MaxWidth>
    </Section>
  )
}

export default Statement
