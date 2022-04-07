import styled from 'styled-components'

import {
  Grid,
  Text,
  MaxWidth,
  Container,
  Icon,
  IconWrapper
} from './ui'

const StyledAvatar = styled.img`
  width: ${({ theme }) => theme.util.buffer * 12}px;
  height: ${({ theme }) => theme.util.buffer * 12}px;
  border-radius: ${({ theme }) => theme.util.radius.large}px;
`;

const katia = '/design/katia-tehran.jpeg'

const Testimonial = () => {
  return (
    <MaxWidth>
      <Container outline>
        <Grid container spacing={8}>
          <Grid item>
            <IconWrapper themed="lightened">
              <Icon type="quote" primary/>
            </IconWrapper>
          </Grid>
          <Grid item>
            <Text title regular bold>I couldn't recommend working with Tend Design on design system development enough!</Text>
          </Grid>
          <Grid item>
            <Text body large>From their code and design unicorn-like studio offering, to their hands on approach from day one, Tend Design was able to seamlessly build trust with members of our team. This resulted in a custom built solution that feels true to our brand, unblocked our roadmap for more meaningful feature work, and empowered our teams.</Text>
          </Grid>
          <Grid item>
            <Grid container spacing={4} alignItems="center">
              <Grid item>
                <StyledAvatar src={katia} />
              </Grid>
              <Grid item>
                <Text body regular bold>Katia Tehran</Text>
                <Text body regular lightened>Head of Product, Mighty</Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MaxWidth>
  )
}

export default Testimonial
