import styled from 'styled-components'

import {
  Grid,
  Text,
  MaxWidth,
  Icon,
  Button
} from './ui'

const StyledHeader = styled(Grid)`
  padding: ${({ theme }) => theme.util.buffer * 6}px 0;
`;
const StyledLogo = styled.div`
  width: ${({ theme }) => theme.util.buffer * 9}px;
  height: ${({ theme }) => theme.util.buffer * 9}px;
  border-radius: ${({ theme }) => theme.util.radius.regular}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.primary.main};
`;

const Header = ({}) => {
  return (
    <MaxWidth>
      <StyledHeader container alignItems="center" justifyContent="space-between">

        <Grid item>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <StyledLogo>
                <Icon type="layer" size={20}/>
              </StyledLogo>
            </Grid>
            <Grid item>
              <Text title small bold primary>Tend Design</Text>
              <Text body mini bold primary>By Tend Labs</Text>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Button small lightened>
              <Text body regular bold primary>Work with us</Text>
            </Button>
          </Grid>
        </Grid>

      </StyledHeader>
    </MaxWidth>
  )
}

export default Header
