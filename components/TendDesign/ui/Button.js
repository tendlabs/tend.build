import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.util.buffer * 12}px;
  transition: ${({ theme }) => theme.util.transition};
  overflow: hidden;
  padding: ${(props) => props.small ? `${props.theme.util.buffer * 2}px ${props.theme.util.buffer * 6}px`
    : `${props.theme.util.buffer * 4}px ${props.theme.util.buffer * 12}px`
  };
  background: ${(props) => props.lightened ? props.theme.color.neutral.lightened
    : props.disabled ? props.theme.color.neutral.lightened
      : props.theme.color.primary.main
  };
  width: ${(props) => props.full ? '100%' : 'auto'};
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: ${(props) => props.full ? 'none' : 'scale(1.05)'};
    transition: ${({ theme }) => theme.util.transition};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    &:hover {
      transform: none;
      transition: ${({ theme }) => theme.util.transition};
    }
  }
`;

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button
