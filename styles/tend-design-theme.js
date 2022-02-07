import { createGlobalStyle } from 'styled-components';

const buffer = 4;
const timing = '.10s';
const easing = 'ease-in-out';

export const designTheme = {
  util: {
    buffer,
    timing,
    transition: `all ${timing} ${easing}`,
    radius: {
      small: 8,
      regular: 12,
      large: 24,
    }
  },
  breakpoint: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1440
  },
  color: {
    neutral: {
      white: '#FFFFFF',
      lightened: '#F5F5F7',
      dark: '#DFDFE2'
    },
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
      dark4: `rgba(000,000,000,.04)`,
      dark8: `rgba(000,000,000,.08)`,
      dark24: `rgba(000,000,000,.24)`,
      dark48: `rgba(000,000,000,.48)`,
    },
    primary: {
      main: '#388AEB',
      lightened: '#EFF6FD'
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
        bold: 600,
        super: 700,
      }
    },
    size: {
      body: {
        mini: 10,
        small: 12,
        regular: 14,
        large: 18
      },
      title: {
        small: 20,
        regular: 24,
        large: 36,
        headline: 48,
        super: 64
      }
    },
    lineHeight: {
      body: {
        mini: 12,
        small: 16,
        regular: 20,
        large: 22
      },
      title: {
        small: 24,
        regular: 32,
        large: 48,
        headline: 60,
        super: 68
      },
    }
  }
}

// Global styles:
export const GlobalStyle = createGlobalStyle`

  body, html {
    margin: 0 !important;
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

