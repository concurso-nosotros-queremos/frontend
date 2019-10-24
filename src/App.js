import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './redux/store'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme/theme'
import MainRouter from './Routes'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = buildStore()

function App (props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
