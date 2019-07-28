import React from 'react'
import { Provider } from 'react-redux'
import { buildStore } from './state/store'
import Index from './pages/index'
import Navbar from './components/navbar'
import Blog from './components/home/Blog.jsx'

const store = buildStore()

function App () {
  return (
    <Provider store={store}>
      <Blog/>
    </Provider>
  )
}

export default App
