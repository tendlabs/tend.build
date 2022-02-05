import styled from 'styled-components'

const StyledSection = styled.div`
  padding: ${(props) => props.noPadding ? 0 : `${props.theme.util.buffer * 32}px 0`};
  background: ${(props) => props.themed === 'lightened' ? props.theme.color.neutral.lightened
    : props.themed === 'dark' ? props.theme.color.text.dark
      : 'transparent'
  };
`;

const Section = ({ children, ...props }) => {
  return (
    <StyledSection {...props}>{children}</StyledSection>
  )
}

export default Section
