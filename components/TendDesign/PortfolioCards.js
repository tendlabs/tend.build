import styled from 'styled-components'

import {
  MaxWidth,
  Grid,
  Text,
  Section
} from './ui'

const DisplayCard = styled.div`
  height: ${({ theme }) => theme.util.buffer * 160}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.util.radius.large}px;
  background: ${(props) => props.img && `url(${props.img})`};
  background-size: cover;
  border: 1px solid ${({ theme }) => theme.color.neutral.lightened};
`;

const StyledCardContainer = styled(Grid)`
  transform: ${(props) => props.offset && `translateY(${props.theme.util.buffer * 80}px)`};
`;

const StyledPortfolioCards = styled(Section)`
  height: ${({ theme }) => theme.util.buffer * 320}px;
  overflow: hidden;
`;

const PortfolioCards = ({}) => {

  return (
    <StyledPortfolioCards noPadding>
      <MaxWidth>
        <Grid container spacing={12}>
          {Cards.map((c, i) =>
            <StyledCardContainer item xs={12} sm={6} key={i} offset={i % 2}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Text body mini bold>{c.company}</Text>
                    </Grid>
                    <Grid item>
                      <Text body mini bold lightened>{c.description}</Text>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <DisplayCard img={c.img} />
                </Grid>
              </Grid>
            </StyledCardContainer>
          )}
        </Grid>
      </MaxWidth>
    </StyledPortfolioCards>
  )
}

export default PortfolioCards

const Cards = [
  {
    company: 'Mighty',
    description: 'Design system',
    img: '/design/mighty.svg'
  },
  {
    company: 'Scale Platform',
    description: 'Component system',
    img: '/design/scale.svg'
  },
  {
    company: 'Wildflower Schools',
    description: 'Style Guide',
    img: '/design/wildflowers.svg'
  },
]
