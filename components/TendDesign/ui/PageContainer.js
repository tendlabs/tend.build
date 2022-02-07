import styled from "styled-components"
import { AnimatePresence, motion} from 'framer-motion'
import { useRouter } from "next/router"

const StyledPageContainer = styled(motion.div)`
  padding: ${(props) => props.noPadding ? 0 : props.theme.util.buffer * 24}px 0;
  z-index: 100;
  overflow-x: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding-top: ${({ theme }) => theme.util.buffer * 6}px;
    padding-bottom: ${({ theme }) => theme.util.buffer * 48}px;
    -webkit-overflow-scrolling: touch !important;
  }
`;

const PageContainer = ({ children, noPadding }) => {
  const path = useRouter().pathname

  return (
    <AnimatePresence exitBeforeEnter>
      <StyledPageContainer
        noPadding={noPadding}
        key={path}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: .25}}
      >
        {children}
      </StyledPageContainer>
    </AnimatePresence>
  )
}

export default PageContainer
