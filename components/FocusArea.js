import { useState } from 'react'
import styled from "styled-components"

import {
  Text,
  Grid,
  Icon
} from './ui'

const StyledFocusArea = styled.div`
  background: ${({ theme }) => theme.color.opacity.light4};
  border-radius: ${({ theme }) => theme.util.buffer * 4}px;
  padding: ${({ theme }) => theme.util.buffer * 8}px;
  transition: ${({ theme }) => theme.util.transition};
  &:hover {
    cursor: pointer;
    transform: scale(1.04) rotate(-1deg);
    transition: ${({ theme }) => theme.util.transition};
    background: ${({ theme }) => theme.color.text.light};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    &:hover {
      transform: none;
      transition: ${({ theme }) => theme.util.transition};
      background: ${({ theme }) => theme.color.text.light};
    }
  }
`;
const StyledIconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.util.buffer * 12}px;
  height: ${({ theme }) => theme.util.buffer * 12}px;
  background: ${(props) => props.isHovered ? props.theme.color.text.lightGray
    : props.theme.color.opacity.light4
  };
  border-radius: ${({ theme }) => theme.util.radiusLarge}px;
  transition: ${({ theme }) => theme.util.transition};
  ${(props) => props.isHovered &&`
    transform: scale(1.4) rotate(-12deg);
    transition: ${({ theme }) => theme.util.transition};
  `}
`;

const FocusArea = ({ title, description, type }) => {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <StyledFocusArea
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Grid container spacing={6}>
        <Grid item>
          <Grid container alignItems="center" spacing={6}>
            <Grid item>
              <StyledIconArea
                isHovered={isHovered}
              >
                <Icon
                  type={
                    type === "Incubation" ? "rocket"
                      : type === "Impact" ? "megaphone"
                        : type === "Systems" ? "layer"
                          : null
                  }
                  dark={isHovered}
                />
              </StyledIconArea>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Text title bold dark={isHovered}>{title}</Text>
            </Grid>
            <Grid item xs={12}>
              <Text body small dark={isHovered}>{description}</Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledFocusArea>

  )
}

export default FocusArea
