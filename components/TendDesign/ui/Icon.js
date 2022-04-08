import styled from 'styled-components'

import {
  Rocket,
  Megaphone,
  Layer,
  Copy,
  QuoteAltLeft
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
  Star,
  Plus,
  X,
  BookReader,
  Windows,
  Compass,
  CodeBlock,
  Outline,
  ToggleRight,
  BookOpen,
  Collection,
  Conversation,
  GitMerge,
  Cut,
  Trim,
  Layout,
  Pen
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
  } else if (type === 'plus') {
    source = <Plus />
  } else if (type === 'close') {
    source = <X />
  } else if (type === 'book-reader') {
    source = <BookReader />
  } else if (type === 'windows') {
    source = <Windows />
  } else if (type === 'compass') {
    source = <Compass />
  } else if (type === 'code-block') {
    source = <CodeBlock />
  } else if (type === 'quote') {
    source = <QuoteAltLeft />
  } else if (type === 'outline') {
    source = <Outline />
  } else if (type === 'toggle-right') {
    source = <ToggleRight />
  } else if (type === 'book-open') {
    source = <BookOpen />
  } else if (type === 'collection') {
    source = <Collection />
  } else if (type === 'conversation') {
    source = <Conversation />
  } else if (type === 'git-merge') {
    source = <GitMerge />
  } else if (type === 'cut') {
    source = <Cut />
  } else if (type === 'trim') {
    source = <Trim />
  } else if (type === 'pen') {
    source = <Pen />
  } else if (type === 'layout') {
    source = <Layout />
  }

  return (
    <StyledIcon {...rest}>
      {source}
    </StyledIcon>
  )
}

export default Icon
