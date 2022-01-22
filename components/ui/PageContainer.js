import styled from "styled-components"
import Div100vh from 'react-div-100vh'

const StyledPageContainer = styled(Div100vh)`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: ${({ theme }) => theme.util.buffer * 24}px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding-top: ${({ theme }) => theme.util.buffer * 12}px;
    padding-bottom: ${({ theme }) => theme.util.buffer * 48}px;
  }
`;

const PageContainer = ({ children }) => {
  return (
    <StyledPageContainer>{children}</StyledPageContainer>
  )
}

export default PageContainer
