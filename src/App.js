import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './state/store'
import Index from './pages/index'

const store = buildStore()

function App () {
  return (
    <Provider store={store}>
      <div>
        <h1>CNQ 2019!</h1>
        <Index />
      </div>
    </Provider>
  )
}

export default App
