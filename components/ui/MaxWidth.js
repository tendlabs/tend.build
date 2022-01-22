import styled from "styled-components"

const StyledMaxwidth = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.xs}px;
  padding: 0 ${({ theme }) => theme.util.buffer * 6}px;
  margin: 0 auto;
  pointer-events: none;
  * {
    pointer-events: auto;
  }
`;

const MaxWidth = ({ children }) => {
  return (
    <StyledMaxwidth>
      {children}
    </StyledMaxwidth>
  )
}

export default MaxWidth
