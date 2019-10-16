import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './redux/store'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'
import MainRouter from './Routes'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

const store = buildStore()

function App(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MainRouter />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
