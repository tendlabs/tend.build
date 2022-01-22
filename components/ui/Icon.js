import styled from 'styled-components'

import {
  Rocket,
  Megaphone,
  Layer,
} from '@styled-icons/boxicons-solid'

const StyledIcon = styled.span`
  width: ${({ theme }) => theme.util.buffer * 6}px;
  height: ${({ theme }) => theme.util.buffer * 6}px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    ${(props) => props.color ? `color: ${props.color};`
      : `color: ${props.theme.color.text.light};`
    };
    ${(props) => props.dark ? `color: ${props.theme.color.text.dark};`
      : `color: ${props.theme.color.text.light};`
    };
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
  }
`

const Icon =({
  type,
  ...rest
}) => {
  let source

  if (type === 'rocket') {
    source = <Rocket />
  } else if (type === 'megaphone') {
    source = <Megaphone />
  } else if (type === 'layer') {
    source = <Layer />
  }

  return (
    <StyledIcon {...rest}>
      {source}
    </StyledIcon>
  )
}

export default Icon
