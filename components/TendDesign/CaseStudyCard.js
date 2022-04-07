import styled from 'styled-components'
import Link from 'next/link'

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
  border: 1px solid ${({ theme }) => theme.color.neutral.lightened};
  &:hover {
    cursor: pointer
  }
`

const ConditionalLink = ({ children, link }) => {
  return (
    <>
      {link ?
        <Link href={link}>
          <a>
            {children}
          </a>
        </Link>
      :
      <>
        {children}
      </>
      }
    </>
  )
}

const CaseStudyCard = ({ img, title, description, route }) => {
  return (
    <MaxWidth>
      <Section noPaddingTop>
        <Grid container spacing={12}>

          <ConditionalLink link={route}>
            <Grid item xs={12}>
              <StyledContainer>
                <StyledImage src={img} />
              </StyledContainer>
            </Grid>
          </ConditionalLink>

          {(title && description) &&
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6} mb={6}>
                  <Text title large bold>{title}</Text>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container flexDirection="column" spacing={4}>
                    <Grid item>
                      <Text body large>{description}</Text>
                    </Grid>
                    {route ?
                      <Grid item>
                        <ConditionalLink link={route}>
                          <Text body regular bold>View Case Study</Text>
                        </ConditionalLink>
                      </Grid>
                    :
                      <Grid item>
                        <Text body mini bold lightened>Case study coming soon</Text>
                      </Grid>
                    }
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
