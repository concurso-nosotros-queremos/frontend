import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './redux/store'
import Index from './pages/index'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'

const store = buildStore()

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Index />
      </ThemeProvider>
    </Provider>
  )
}

export default App
