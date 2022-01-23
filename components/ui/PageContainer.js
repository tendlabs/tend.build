import styled from "styled-components"
import Div100vh from 'react-div-100vh'
import { useRef, useState } from 'react'
import React from 'react'
import { useElementScroll } from 'framer-motion'

import MaxWidth from './MaxWidth'
import CTA from '../CTA'

const StyledPageContainer = styled(Div100vh)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: ${({ theme }) => theme.util.buffer * 24}px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding-top: ${({ theme }) => theme.util.buffer * 6}px;
    padding-bottom: ${({ theme }) => theme.util.buffer * 48}px;
  }
  -webkit-overflow-scrolling: touch;
`;

const PageContainer = ({ children }) => {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useElementScroll(ref)
  scrollYProgress.onChange(setProgress)

  // console.log(progress)

  return (
    <StyledPageContainer ref={ref}>
      <MaxWidth>
        <CTA emphasis={progress < .1 ? true : false}/>
      </MaxWidth>
      {children}
    </StyledPageContainer>
  )
}

export default PageContainer
