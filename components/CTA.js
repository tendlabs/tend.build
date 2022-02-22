import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useViewportScroll } from 'framer-motion'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useMediaQuery } from 'react-responsive'

import { theme } from '../styles/theme'
import {
  Text,
  Button,
  Grid
} from '../components/ui'

const StyledCTA = styled(Grid)`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: ${({ theme }) => theme.breakpoint.xs}px;
  padding: 0 ${({ theme }) => theme.util.buffer * 6}px;
  z-index: 1;
  pointer-events: none;
  * {
    pointer-events: auto
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    width: 100%;
    bottom: ${({ theme }) => theme.util.buffer*8}px;
    * {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${({ theme }) => theme.util.buffer * 2}px;
    }
  }
`;
const StyledTextContainer = styled.div`
  width: ${({ theme }) => theme.util.buffer * 50}px;
  height: ${({ theme }) => theme.text.size.body.regular}px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    height: ${({ theme }) => theme.text.size.body.small * 2}px;
    width: 100%;
  }
  `;
const StyledTextWrapper = styled(motion.span)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CTA = ({}) => {
  const [ctaHovered, setCtaHovered] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [progress, setProgress] = useState(0)
  const { scrollY } = useViewportScroll()
  scrollY.onChange(setProgress)

  useEffect(() => {
    const timer = setTimeout(() => [
      setEmailCopied(false)
    ], 1000)
    return () => clearTimeout(timer)
  }, [emailCopied])


  const isXs = useMediaQuery(
    { maxDeviceWidth: theme.breakpoint.xs },
  )

  const variants = {
    fromBottom: {
      opacity: 0,
      y: 100,
      transition: {
        duration: .15
      }
    },
    centered: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .15
      }
    },
    toTop: {
      opacity: 0,
      y: -100,
      transition: {
        duration: .15
      }
    }
  }

  return (
    <Grid container>
      <StyledCTA item alignItems="flex-end">
        <CopyToClipboard text="hello@tend.build" onCopy={() => setEmailCopied(true)}>
          <Button
            emphasis={progress < .1 ? true : false}
            onMouseEnter={isXs ? null : () => setCtaHovered(true)}
            onMouseLeave={isXs ? null : () => setCtaHovered(false)}
          >
            <StyledTextContainer>
              <StyledTextWrapper
                variants={variants}
                animate={ctaHovered ? `fromBottom`
                  : emailCopied ? `fromBottom`
                    : `centered`
                }
              >
                <Text title regular>hello@tend.build</Text>
              </StyledTextWrapper>

              {isXs ?
                null
              :
                <StyledTextWrapper
                  variants={variants}
                  animate={(ctaHovered && !emailCopied) ? `centered`
                    : (emailCopied && ctaHovered) ? `fromBottom`
                      : `toTop`
                  }
                >
                  <Text title regular>Copy email</Text>
                </StyledTextWrapper>
              }

              <StyledTextWrapper
                variants={variants}
                animate={emailCopied ? `centered` : `toTop`}
              >
                <Text title regular>Email copied!</Text>
              </StyledTextWrapper>
            </StyledTextContainer>
          </Button>
        </CopyToClipboard>
      </StyledCTA>
    </Grid>
  )
}

export default CTA
