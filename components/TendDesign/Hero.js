import styled from 'styled-components'

import {
  MaxWidth,
  Grid,
  Text,
  Button
} from './ui'
import HeroImage from './AnimatedImages/HeroImage'

const StyledHero = styled(Grid)`
  padding: ${({ theme }) => theme.util.buffer * 30}px 0;
`;
const StyledHeroImage = styled(HeroImage)`
  transform-origin: bottom left;
  transform: scale(1.15);
`;
const Emphasis = styled.span`
  color: ${({ theme }) => theme.color.primary.main};
`;

const Hero = ({}) => {

  return (
    <MaxWidth>
      <StyledHero container spacing={20}>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={12} flexDirection="column">
            <Grid item>
              <Text title super bold><Emphasis>Custom</Emphasis> UI systems built to order.</Text>
            </Grid>
            <Grid item>
              <Text title small>We build UI systems that get your business and empower your team to build quickly, without sacrificing polish in any context.</Text>
            </Grid>
            <Grid item>
              <Button>
                <Text title regular bold light>Work with us</Text>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledHeroImage />
        </Grid>

      </StyledHero>
    </MaxWidth>
  )
}

export default Hero
