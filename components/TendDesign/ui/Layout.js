import styled from 'styled-components'

const StyledLayout = styled.div`
  background: ${(props) => props.lightBg ? props.theme.color.neutral.white : props.theme.color.text.dark};
`;

const Layout = ({ children, lightBg }) => {

  return (
    <StyledLayout lightBg={lightBg}>
      {children}
    </StyledLayout>
  )
}

export default Layout
