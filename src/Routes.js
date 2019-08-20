import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from './components/routeWithLayout'
import Index from './views/index/index'

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Index}
        exact
        path='/'
      />
      <RouteWithLayout
        component={() => <h1>404</h1>}
        exact
        layout={<></>}
        path='/not-found'
      />
      <Redirect to='/not-found' />
    </Switch>
  )
}

export default Routes
