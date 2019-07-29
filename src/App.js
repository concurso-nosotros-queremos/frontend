import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './state/store'
import Index from './pages/index'

const store = buildStore()

function App () {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

export default App
