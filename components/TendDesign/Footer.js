import styled from 'styled-components'
import Link from 'next/link'

import {
  Grid,
  MaxWidth,
  Text,
  Section
} from './ui'

const StyledTag = styled.span`
  padding: ${({ theme }) => theme.util.buffer}px ${({ theme }) => theme.util.buffer * 2}px;
  background: ${({ theme }) => theme.color.neutral.lightened};
  border-radius: ${({ theme }) => theme.util.radius.small}px;
  &:hover {
    transition: ${({ theme }) => theme.util.transition};
    cursor: pointer;
    background: ${({ theme }) => theme.color.text.lightGray};
    transition: ${({ theme }) => theme.util.transition};
  }
`;

const Footer = ({}) => {
  return (
    <Section>
      <MaxWidth>
        <Grid container>
          <Grid item>
            <Link href="/">
              <StyledTag>
                <Text body regular lightened>© 2022 Tend Labs LLC</Text>
              </StyledTag>
            </Link>
          </Grid>
        </Grid>
      </MaxWidth>
    </Section>
  )
}

export default Footer
