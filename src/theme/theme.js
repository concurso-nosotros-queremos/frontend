import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0B7163',
      light: '#0B7163'
    },
    secondary: {
      main: '#D37E01',
      light: '#D37E01'

    },
    error: {
      main: '#ff1744'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.85)', // Contenido de Textfield
      secondary: 'rgba(0, 0, 0, 0.54)', // Texto de ayuda, se elimina luego de escribir o con error
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  },
  typography: {
    fontFamily: "'Roboto Slab', 'Roboto'",
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '4rem',
      lineHeight: 1,
      letterSpacing: '-0.01562em',
      fontWeight: 'bold'
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '3.75rem',
      lineHeight: 1,
      letterSpacing: '-0.00833em'
    },
    h3: {
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.04,
      letterSpacing: '0em'
    },
    h4: {
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.17,
      letterSpacing: '0.00735em'
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.33,
      letterSpacing: '0em'
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em'
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
      fontFamily: 'Roboto'
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em'
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em'
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
      fontFamily: 'Roboto'
    },
    caption: {
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    }
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:600px)': {
        minHeight: 64
      }
    }
  },
  spacing: 8,
  overrides: {
    MuiFormLabel: {
      root: {
        fontFamily: 'Roboto'
      },
    },
    MuiButton: {
      sizeLarge: {
        padding: '10px 50px'
      }
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
