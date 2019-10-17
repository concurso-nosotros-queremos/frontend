import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './redux/store'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'
import MainRouter from './Routes'

const store = buildStore()

function App(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
