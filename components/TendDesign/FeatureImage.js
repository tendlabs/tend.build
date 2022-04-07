import styled from 'styled-components'

import {
  Grid,
  Text,
  MaxWidth,
  Container,
  Section
} from './ui'

const StyledImage = styled.img`
  height: 640px;
  filter: drop-shadow(24px 48px 48px rgba(0,0,0,.08));
`;

const FeatureImage = ({ reverse, caption, captionTitle, img }) => {
  return (
    <Section noPaddingTop>
      <MaxWidth>
        <Grid container alignItems="flex-end" spacing={30} flexDirection={reverse && `row-reverse`}>
          <Grid item xs={12} sm={4}>
            <Text body regular bold>{captionTitle}</Text>
            <Text body regular lightened>{caption}</Text>
          </Grid>
          <Grid item xs={12} sm={8} alignItems={reverse && `flex-end`}>
            <StyledImage src={img} />
          </Grid>
        </Grid>
      </MaxWidth>
    </Section>
  )
}

export default FeatureImage
