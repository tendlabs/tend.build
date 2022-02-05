import styled from 'styled-components'

import {
  Section,
  MaxWidth,
  Grid,
  Text,
  Container,
  Icon
} from './ui'
import Statement from './Statement'

const StyledNarrativePoint = styled.div`
  transform: ${(props) => props.offset && `translateY(-${props.theme.util.buffer * 60}px)`};
`;
const StyledIconWrapper = styled.div`
  width: ${({ theme }) => theme.util.buffer * 12}px;
  height: ${({ theme }) => theme.util.buffer * 12}px;
  background: ${(props) => props.themed === 'dark' ? props.theme.color.opacity.light4
    : props.themed === 'lightened' ? props.theme.color.primary.lightened
      : props.theme.color.neutral.white
  };
  border-radius: ${({ theme }) => theme.util.radius.large}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NarrativePoint = ({ title, subtitle, offset, points, themed, titleLarge }) => {
  return (
    <StyledNarrativePoint>
      <Section themed={themed}>
        <MaxWidth>
          <Grid container spacing={32}>

            <Grid item xs={12}>
              <Statement
                noPadding
                title={title}
                subtitle={subtitle}
                light={themed === 'dark'}
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={8} alignItems="stretch">
                {points.map((p, i) =>
                  <Grid item xs={12} sm={points.length === 4 ? 6 : points.length === 3 ? 4 : (i < 2 ? 6 : 4)} key={i}>
                    <Container light={themed === 'lightened'} lightened={themed === 'dark'} regular style={{height: '100%'}}>
                      <Grid container flexDirection="column" spacing={3}>
                        <Grid item>
                          <StyledIconWrapper themed={themed}>
                            <Icon type={p.icon} primary={themed !== 'dark'} />
                          </StyledIconWrapper>
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
