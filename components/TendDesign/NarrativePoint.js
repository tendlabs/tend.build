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
import Statement from './Statement'

const StyledNarrativePoint = styled.div`
  transform: ${(props) => props.offset && `translateY(-${props.theme.util.buffer * 60}px)`};
`;

const NarrativePoint = ({ title, subtitle, offset, points, themed, titleLarge }) => {
  return (
    <StyledNarrativePoint offset={offset}>
      <Section themed={themed}>
        <MaxWidth>
          <Grid container spacing={32}>

          {(title || subtitle) &&
            <Grid item xs={12}>
              <Statement
                noPadding
                title={title}
                subtitle={subtitle}
                light={themed === 'dark'}
              />
            </Grid>
          }

            <Grid item xs={12}>
              <Grid container spacing={8} alignItems="stretch">
                {points.map((p, i) =>
                  <Grid item xs={12} sm={points.length === 4 ? 6 : points.length === 3 ? 4 : (i < 2 ? 6 : 4)} key={i}>
                    <Container light={themed === 'lightened'} lightened={themed === 'dark'} regular style={{height: '100%'}}>
                      <Grid container flexDirection="column" spacing={3}>
                        <Grid item>
                          <IconWrapper themed={themed}>
                            <Icon type={p.icon} primary={themed !== 'dark'} />
                          </IconWrapper>
                        </Grid>
                        <Grid item>
                          <Text body={!titleLarge} large={!titleLarge} title={titleLarge} regular={titleLarge} bold light={themed === 'dark'}>{p.title}</Text>
                        </Grid>
                        <Grid item>
                          <Text body regular lightened={themed !== 'dark'} darkened={themed === 'dark'}>{p.subtitle}</Text>
                        </Grid>
                      </Grid>
                    </Container>
                  </Grid>
                )}
              </Grid>
            </Grid>

          </Grid>
        </MaxWidth>
      </Section>
    </StyledNarrativePoint>

  )
}

export default NarrativePoint
