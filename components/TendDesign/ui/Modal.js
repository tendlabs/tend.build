import ReactModal from 'styled-react-modal'
import styled from 'styled-components'
import { motion, LayoutGroup } from 'framer-motion'

import Container from './Container'
import Icon from './Icon'
import Grid from './Grid'
import Text from './Text'

const StyledModal = styled(ReactModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledContainer = styled(Container)`
  width: ${({ theme }) => theme.breakpoint.xs}px;
  position: relative;
  margin: ${({ theme }) => theme.util.buffer*6}px;
`;
const StyledClose = styled.div`
  cursor: pointer;
`;

const Modal = ({
  toggle,
  isOpen,
  title,
  children
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggle}
      onEscapeKeydown={toggle}
    >
      <LayoutGroup>
        <motion.div layout>
          <StyledContainer regular light>
            <motion.div layout>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Text title small bold>
                    {title}
                  </Text>
                </Grid>
                <Grid item>
                  <StyledClose onClick={toggle}><Icon type="close" dark size={32} /></StyledClose>
                </Grid>
              </Grid>
            </motion.div>
            <Grid container mt={6}>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </StyledContainer>
        </motion.div>
      </LayoutGroup>
    </StyledModal>
  )
}

export default Modal
