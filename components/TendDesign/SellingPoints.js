import styled from 'styled-components'
import { motion } from 'framer-motion'

import {
  Grid,
  Text,
  MaxWidth,
  Container
} from './ui'
import { useEffect } from 'react';

const ImageWrapper = styled.div`
  height: 100%;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    position: relative;
    top: 0;
    transform: none;
    width: 130%;
  }
`;

const SellingPoints = ({ y1, y2 }) => {

  return (
    <MaxWidth>
      <Grid container spacing={12}>

        {Point.map((p, i) =>
          <Grid item xs={12} key={i}>
            <Container>
              <Grid container style={{height: '100%'}} alignItems="center" spacing={16} flexDirection={i % 2 && 'row-reverse'}>
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
                  {/* <motion.div style={{ y: y1 }}> */}
                    <ImageWrapper>
                      <StyledImage src={p.img} />
                    </ImageWrapper>
                  {/* </motion.div> */}
                </Grid>
              </Grid>
            </Container>
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
    subtitle: 'With the right building blocks to pick and choose from, a high-performance team can reach their full potential.',
    img: '/design/empowered-image.svg'
  },
  {
    title: 'Everything you need, nothing you don\'t.',
    subtitle: 'High growth companies need a well chosen arsenal of building blocks that that cut out noise and deliver value immediately.',
    img: '/design/everything-image.svg'
  },
  {
    title: 'Your brand and UI, one and the same.',
    subtitle: 'Inconsistencies result from a brand having to be interpreted over and over by those implementing it. Get brand into your UI once and move forward.',
    img: '/design/brand-ui-image.svg'
  },
]
