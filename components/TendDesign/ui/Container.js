import styled from 'styled-components'

const StyledContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${(props) => props.light ? props.theme.color.neutral.white
    : props.lightened ? props.theme.color.opacity.light4
      : props.theme.color.neutral.lightened
  };
  padding: ${(props) => props.regular ? `${props.theme.util.buffer * 8}px` : `${props.theme.util.buffer * 30}px ${props.theme.util.buffer * 16}px`};
  border-radius: ${(props) => props.regular ? props.theme.util.radius.regular : props.theme.util.radius.large}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding: ${(props) => props.regular ? `${props.theme.util.buffer * 8}px` : `${props.theme.util.buffer * 8}px ${props.theme.util.buffer * 8}px`};
  }
`;

const Container = ({ children, ...props }) => {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  )
}

export default Container
