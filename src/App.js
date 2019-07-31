import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './state/store'
import Index from './pages/index'
import Navbar from './components/navbar'
import Home from './components/home/Home.jsx'

const store = buildStore()

function App () {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
