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
    transform: scale(1.04);
    transition: ${({ theme }) => theme.util.transition};
    background: ${({ theme }) => theme.color.opacity.light4};
  }
  &:active {
    cursor: pointer;
    transform: scale(1.04);
    transition: ${({ theme }) => theme.util.transition};
    background: ${({ theme }) => theme.color.opacity.light8};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding: ${({ theme }) => theme.util.buffer * 6}px;
    &:hover {
      transform: none;
      transition: none;
      background: ${({ theme }) => theme.color.opacity.light4};
    }
    &:active {
      cursor: pointer;
      transform: scale(1.04);
      transition: ${({ theme }) => theme.util.transition};
      background: ${({ theme }) => theme.color.opacity.light8};
    }
  }
`;
const StyledIconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.util.buffer * 12}px;
  height: ${({ theme }) => theme.util.buffer * 12}px;
  background: ${(props) => props.isHovered ? props.theme.color.opacity.light4
    : props.theme.color.opacity.light4
  };
  border-radius: ${({ theme }) => theme.util.radiusLarge}px;
  transition: ${({ theme }) => theme.util.transition};
  ${(props) => props.isHovered &&`
    transform: scale(1.4) rotate(-12deg);
    transition: ${({ theme }) => theme.util.transition};
  `}
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    ${(props) => props.isHovered &&`
      transform: none;
      transition: none;
    `}
  }
`;
const StyledTextArea = styled(Grid)`
  * {
    transition: ${({ theme }) => theme.util.transition};
  }
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
                />
              </StyledIconArea>
            </Grid>
          </Grid>
        </Grid>
        <StyledTextArea item>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Text title bold>{title}</Text>
            </Grid>
            <Grid item xs={12}>
              <Text body small lightened>{description}</Text>
            </Grid>
          </Grid>
        </StyledTextArea>
      </Grid>
    </StyledFocusArea>

  )
}

export default FocusArea
