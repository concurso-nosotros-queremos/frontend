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
      light: '#F9AA33'
    },
    eror: {
      main: '#E53935'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.85)',
      secondary: 'rgba(0, 0, 0, 0.65)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    }
  },
  typography: {
    fontFamily: "'Roboto','Roboto Slab'",
    fontSize: 14,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '4.5rem',
      fontWeight: 'bold',
      color: '#232f34',
      lineHeight: 1,
      letterSpacing: '-0.01562rem',
      fontFamily: 'Roboto Slab',
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      color: '#232f34',
      lineHeight: 1,
      letterSpacing: '-0.00833rem',
      fontFamily: 'Roboto Slab',
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
      color: '#232f34',
      lineHeight: 1.04,
      letterSpacing: '0rem',
      fontWeight: 'bold',
      fontFamily: 'Roboto Slab',
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
      color: '#232f34',
      lineHeight: 1.17,
      letterSpacing: '0.00735rem',
      fontFamily: 'Roboto Slab',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#232f34',
      lineHeight: 1.33,
      letterSpacing: '0rem',
      fontFamily: 'Roboto Slab',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#232f34',
      lineHeight: 1.6,
      letterSpacing: '0.0075rem',
      fontFamily: 'Roboto Slab',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: 'rgba(35, 47, 52, 0.65)',
      fontFamily: 'Roboto',
      lineHeight: 1.35,
      letterSpacing: '0.00938rem',
    },
    subtitle2: {
      fontSize: '15.2px',
      fontWeight: 500,
      color: 'rgba(35, 47, 52, 0.55)',
      lineHeight: 1.57,
      letterSpacing: '0.0095rem',
      fontFamily: 'Roboto',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      color: 'rgba(35, 47, 52, 0.8)',
      lineHeight: 1.5,
      letterSpacing: '0.00938rem',
      fontFamily: 'Roboto',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071rem',
      fontFamily: 'Roboto',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Roboto',
      lineHeight: 1.75,
      letterSpacing: '0.04rem',
    },
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
  },
  shape: {
    borderRadius: 4
  },
  MuiButton: {
    sizeLarge: {
      padding: '10px 50px'
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
