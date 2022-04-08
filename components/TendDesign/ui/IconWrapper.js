import styled from 'styled-components'

const StyledIconWrapper = styled.div`
  width: ${({ theme }) => theme.util.buffer * 12}px;
  height: ${({ theme }) => theme.util.buffer * 12}px;
  background: ${(props) => props.themed === 'dark' ? props.theme.color.opacity.light4
    : props.themed === 'lightened' ? props.theme.color.primary.lightened
      : props.theme.color.neutral.white
  };
  border-radius: ${({ theme }) => theme.util.radius.large}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = ({ themed, children }) => {
  return (
    <StyledIconWrapper themed={themed}>
      {children}
    </StyledIconWrapper>
  )
}

export default IconWrapper
