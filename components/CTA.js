import styled from 'styled-components'

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
  padding: 0 ${({ theme }) => theme.util.buffer*4}px;
  pointer-events: none;
  z-index: 1;
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
      padding: ${({ theme }) => theme.util.buffer * 3}px;
    }
  }
`;

const CTA = ({}) => {
  return (
    <Grid container>
      <StyledCTA item alignItems="flex-end">
        <Button>
          <Text body>with@tend.build</Text>
        </Button>
      </StyledCTA>
    </Grid>
  )
}

export default CTA
