import { createGlobalStyle } from 'styled-components';

const buffer = 4;
const timing = '.25s';
const easing = 'ease-in-out';

export const theme = {
  util: {
    buffer,
    timing,
    transition: `all ${timing} ${easing}`,
  },
  breakpoint: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1440
  },
  color: {
    text: {
      dark: '#22222A',
    }
  },
  text: {
    family: {
      regular: 'Inter, Helvetica, sans-serif'
    },
    weight: {
      body: {
        regular: 400,
      },
      title: {
        regular: 400
      }
    },
    size: {
      body: {
        regular: 16
      },
      title: {
        regular: 24
      }
    },
    lineHeight: {
      body: {
        regular: 20
      },
      title: {
        regular: 30
      },
    }
  }
}

// Global styles:
export const GlobalStyle = createGlobalStyle`

  body, html {
    margin: 0 !important;
    -webkit-overflow-scrolling: touch;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

