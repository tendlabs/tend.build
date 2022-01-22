import { createGlobalStyle } from 'styled-components';

const buffer = 4;
const timing = '.10s';
const easing = 'ease-in-out';

export const theme = {
  util: {
    buffer,
    timing,
    transition: `all ${timing} ${easing}`,
    radiusLarge: 48
  },
  breakpoint: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1440
  },
  color: {
    text: {
      dark: '#11111A',
      light: '#FAFAFA',
      lightGray: '#EAEAEA',
      lightened: '#44444A'
    },
    opacity: {
      light4: `rgba(255,255,255,.04)`,
      light8: `rgba(255,255,255,.08)`,
      light24: `rgba(255,255,255,.24)`,
      light48: `rgba(255,255,255,.48)`,
    }
  },
  text: {
    family: {
      regular: 'Inter, Helvetica, sans-serif'
    },
    weight: {
      body: {
        regular: 400,
        bold: 500,
      },
      title: {
        regular: 400,
        bold: 500,
      }
    },
    size: {
      body: {
        small: 18,
        regular: 24
      },
      title: {
        regular: 24,
        headline: 60
      }
    },
    lineHeight: {
      body: {
        small: 22,
        regular: 28
      },
      title: {
        regular: 28,
        headline: 60
      },
    }
  }
}

// Global styles:
export const GlobalStyle = createGlobalStyle`

  body, html {
    margin: 0 !important;
    background: ${({ theme }) => theme.color.text.dark};
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

