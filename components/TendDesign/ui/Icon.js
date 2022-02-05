import styled from 'styled-components'

import {
  Rocket,
  Megaphone,
  Layer,
  Copy
} from '@styled-icons/boxicons-solid'
import {
  Chart,
  Buoy,
  Extension,
  Magnet,
  Glasses,
  Ruler,
  Brush,
  Intersect,
  Selection,
  Search,
  Star
} from '@styled-icons/boxicons-regular'

const StyledIcon = styled.span`
  width: ${(props) => props.size ? props.size : props.theme.util.buffer * 6}px;
  height: ${(props) => props.size ? props.size : props.theme.util.buffer * 6}px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    ${(props) => props.color ? `color: ${props.color};`
      : `color: ${props.theme.color.text.light};`
    };
    ${(props) => props.dark ? `color: ${props.theme.color.text.dark};`
      : props.primary ? `color: ${props.theme.color.primary.main};`
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
  } else if (type === 'copy') {
    source = <Copy />
  } else if (type === 'chart') {
    source = <Chart />
  } else if (type === 'buoy') {
    source = <Buoy />
  } else if (type === 'puzzle') {
    source = <Extension />
  } else if (type === 'magnet') {
    source = <Magnet />
  } else if (type === 'glasses') {
    source = <Glasses />
  } else if (type === 'ruler') {
    source = <Ruler />
  } else if (type === 'brush') {
    source = <Brush />
  } else if (type === 'intersect') {
    source = <Intersect />
  } else if (type === 'selection') {
    source = <Selection />
  } else if (type === 'search') {
    source = <Search />
  } else if (type === 'star') {
    source = <Star />
  }

  return (
    <StyledIcon {...rest}>
      {source}
    </StyledIcon>
  )
}

export default Icon
