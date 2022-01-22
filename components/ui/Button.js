import styled from "styled-components"

const StyledButton = styled.div`
  padding: ${({ theme }) => theme.util.buffer * 4}px ${({ theme }) => theme.util.buffer * 6}px;
  border-radius: ${({ theme }) => theme.util.buffer * 12}px;
  background: ${({ theme }) => theme.color.opacity.light4};
  transition: ${({ theme }) => theme.util.transition};
  backdrop-filter: blur(8px);
  &:hover {
    cursor: pointer;
    transform: scale(1.15) rotate(-2deg);
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
      * {
        color: ${({ theme }) => theme.color.text.dark};
      }
    }
  }
`;

const Button = ({ children }) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button
