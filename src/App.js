import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './state/store'
import { increment } from './state/test_counter/actions'

const store = buildStore()

function App () {
  return (
    <Provider store={store}>
      <div>
        <h1>CNQ 2019!</h1>
      </div>
    </Provider>
  )
}

export default App
