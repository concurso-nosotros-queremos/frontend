import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './redux/store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'
import Routes from './Routes'

const store = buildStore()

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
