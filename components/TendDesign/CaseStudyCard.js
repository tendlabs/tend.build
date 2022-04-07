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

const CaseStudyCard = ({ img, title, description }) => {
  return (
    <MaxWidth>
        <Section noPaddingTop>
          <Grid container spacing={12}>

            <Grid item xs={12}>
              <StyledContainer>
                <StyledImage src={img} />
              </StyledContainer>
            </Grid>

            {(title && description) &&
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} sm={6} mb={6}>
                    <Text title large bold>{caseStudy.title}</Text>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container flexDirection="column" spacing={4}>
                      <Grid item>
                        <Text body large>{caseStudy.description}</Text>
                      </Grid>
                      <Grid item>
                        <Text body mini bold lightened>Case study coming soon</Text>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            }

          </Grid>
        </Section>
    </MaxWidth>
  )
}

export default CaseStudyCard
