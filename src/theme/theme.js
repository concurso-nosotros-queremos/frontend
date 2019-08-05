import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: { main: '#0B7163' },
    secondary: { main: '#D37E01' }
  }
})

theme = responsiveFontSizes(theme)

export default theme
