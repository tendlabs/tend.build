import styled from "styled-components"

const StyledButton = styled.div`
  padding: ${({ theme }) => theme.util.buffer * 6}px ${({ theme }) => theme.util.buffer * 6}px;
  border-radius: ${({ theme }) => theme.util.buffer * 12}px;
  background: ${(props) => props.emphasis ? props.theme.color.text.light : props.theme.color.opacity.light4};
  transition: ${({ theme }) => theme.util.transition};
  backdrop-filter: blur(8px);
  overflow: hidden;
  * {
    color: ${(props) => props.emphasis ? props.theme.color.text.dark : props.theme.color.text.light};
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    transition: ${({ theme }) => theme.util.transition};
    background: ${({ theme }) => theme.color.text.light};
    * {
      color: ${({ theme }) => theme.color.text.dark};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    &:hover {
      transform: none;
      transition: ${({ theme }) => theme.util.transition};
      background: ${({ theme }) => theme.color.text.light};
      backdrop-filter: blur(4px);
      * {
        color: ${({ theme }) => theme.color.text.dark};
      }
    }
  }
`;

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button
