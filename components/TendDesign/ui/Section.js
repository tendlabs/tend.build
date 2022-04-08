import styled from 'styled-components'

const StyledSection = styled.div`
  padding: ${(props) => props.noPadding ? 0
    : props.noPaddingBottom ? `${props.theme.util.buffer * 32}px 0 0 0`
      : props.noPaddingTop ? `0 0 ${props.theme.util.buffer * 32}px 0`
        : props.paddingSmall ? `${props.theme.util.buffer * 16}px 0`
          : `${props.theme.util.buffer * 32}px 0`
  };
  padding-top: ${(props) => props.noPaddingTop && 0};
  padding-bottom: ${(props) => props.noPaddingBottom && 0};
  background: ${(props) => props.themed === 'lightened' ? props.theme.color.neutral.lightened
    : props.themed === 'dark' ? props.theme.color.text.dark
      : props.themed === 'primary' ? props.theme.color.primary.main
        : 'transparent'
  };
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding: ${(props) => props.noPadding ? 0 : `${props.theme.util.buffer * 6}px 0`};
  }
`;

const Section = ({ children, ...props }) => {
  return (
    <StyledSection {...props}>{children}</StyledSection>
  )
}

export default Section
