import styled from "styled-components"

import {
  Text,
  Grid
} from './ui'

const StyledFocusArea = styled.div`
  background: ${({ theme }) => theme.color.opacity.light4};
  border-radius: ${({ theme }) => theme.util.buffer * 4}px;
  padding: ${({ theme }) => theme.util.buffer * 8}px;
`;

const FocusArea = ({ title, description }) => {
  return (
    <StyledFocusArea>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Text title bold>{title}</Text>
        </Grid>
        <Grid item xs={12}>
          <Text body small lightened>{description}</Text>
        </Grid>
      </Grid>
    </StyledFocusArea>

  )
}

export default FocusArea
