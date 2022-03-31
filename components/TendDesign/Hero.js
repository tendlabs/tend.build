import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import {
  MaxWidth,
  Grid,
  Text,
  Button
} from './ui'
import HeroImage from './AnimatedImages/HeroImage'
import ContactFormModal from './ContactFormModal';

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

const Hero = ({ y2 }) => {
  const [ contactModalOpen, setContactModalOpen ] = useState(false)

  return (
    <>
      <MaxWidth>
        <StyledHero container spacing={12}>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={12} flexDirection="column">
              <Grid item>
                <Text title super bold>Unlock growth with a <Emphasis>custom UI system.</Emphasis></Text>
              </Grid>
              <Grid item>
                <Text title small>We build UI systems unique to your business and empower your team to build quickly, without sacrificing polish in any context.</Text>
              </Grid>
              <Grid item>
                <Button onClick={() => setContactModalOpen(true)}>
                  <Text title regular bold light>Work with us</Text>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* <motion.div style={{ y: y2 }}> */}
              <StyledHeroImage />
            {/* </motion.div> */}
          </Grid>

        </StyledHero>
      </MaxWidth>

      <ContactFormModal
        isOpen={contactModalOpen}
        toggle={() => setContactModalOpen(!contactModalOpen)}
      />
    </>
  )
}

export default Hero
