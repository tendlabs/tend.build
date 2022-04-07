import styled from 'styled-components'

import {
  Section,
  MaxWidth,
  Grid,
  Text,
  Container,
  Icon,
  IconWrapper
} from './ui'

const StyledPageSectionItem = styled.div`
  padding: ${({ theme }) => theme.util.buffer*6}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.dark};
  &:last-child {
    border-bottom: none;
  }
`;

const PageSectionsList = () => {
  return (
    <Section
      themed="primary"
    >
      <MaxWidth>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Text title large light bold>Our Process</Text>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container noPadding radiusRegular light>

              {sections.map((s, i) =>
                <StyledPageSectionItem key={i}>
                  <Grid container spacing={6} alignItems="center">
                    <Grid item>
                      <IconWrapper themed="lightened">
                        <Icon type={s.icon} primary/>
                      </IconWrapper>
                    </Grid>
                    <Grid item>
                      <Text title small bold>{s.title}</Text>
                    </Grid>
                  </Grid>
                </StyledPageSectionItem>
              )}

            </Container>
          </Grid>
        </Grid>
      </MaxWidth>
    </Section>
  )
}

export default PageSectionsList

const sections = [
  {
    icon: 'glasses',
    title: 'Assess and learn'
  },
  {
    icon: 'outline',
    title: 'Spike key feature design'
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
