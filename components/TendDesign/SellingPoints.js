import styled from 'styled-components'

import {
  Grid,
  Text,
  MaxWidth
} from './ui'

const StyledContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${({ theme }) => theme.color.neutral.lightened};
  padding: ${({ theme }) => theme.util.buffer * 30}px ${({ theme }) => theme.util.buffer * 16}px;
  border-radius: ${({ theme }) => theme.util.radius.large}px;
`;
const ImageWrapper = styled.div`
  height: 100%;
  position: relative;
`;
const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const SellingPoints = ({}) => {
  return (
    <MaxWidth>
      <Grid container spacing={16}>

        {Point.map((p, i) =>
          <Grid item xs={12} key={i}>
            <StyledContainer>
              <Grid container style={{height: '100%'}} alignItems="center" spacing={8} flexDirection={i % 2 && 'row-reverse'}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={8}>
                    <Grid item>
                      <Text title large bold>{p.title}</Text>
                    </Grid>
                    <Grid item>
                      <Text title small lightened>{p.subtitle}</Text>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} style={{height: '100%'}}>
                  <ImageWrapper>
                    <StyledImage src={p.imgUrl} />
                  </ImageWrapper>
                </Grid>
              </Grid>
            </StyledContainer>
          </Grid>
        )}

      </Grid>
    </MaxWidth>
  )
}

export default SellingPoints

const Point = [
  {
    title: 'Empower your team to focus on product.',
    subtitle: 'Without the right building blocks to pick and choose from, a high-performance team might be working below their potential.',
    imgUrl: '/design/empowered-image.svg'
  },
  {
    title: 'Everything you need, nothing you don’t.',
    subtitle: 'High growth companies need an efficient, well curated kit of parts that are built-to-suit their unique product problem.',
    imgUrl: '/design/everything-image.svg'
  },
  {
    title: 'Your brand and UI, one and the same.',
    subtitle: 'Inconsistencies result from a brand having to be interpreted over and over by those implementing it. Get brand into your UI once and move forward.',
    imgUrl: '/design/brand-ui-image.svg'
  },
]
