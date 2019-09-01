import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import RouteWithLayout from './components/routeWithLayout'
import Index from './views/Index/index'
import { connect } from 'react-redux'
import InscriptionWrapper from './containers/projectInscription'
import Main from './layouts/Main/Main'

const ProtectedRoute = ({ isAllowed, ...props }) => {
  return (
    isAllowed ? <RouteWithLayout {...props} /> : <Redirect to='/' />
  )
}

const Routes = (props) => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          props.isLoggedIn
            ? <Redirect to='/dashboard' />
            : <RouteWithLayout component={Index} layout={Main} exact path='/' />
        )}
      />
      <ProtectedRoute
        isAllowed={props.isLoggedIn}
        component={InscriptionWrapper}
        layout={Main}
        exact
        path='/dashboard'
      />
      <ProtectedRoute
        isAllowed={props.isLoggedIn}
        component={InscriptionWrapper}
        layout={Main}
        exact
        path='/dashboard/inscription'
      />
      <RouteWithLayout
        component={() => <h1>404</h1>}
        layout={Main}
        exact
        path='/not-found'
      />
      <Redirect to='/not-found' />
    </Switch>
  )
}

const MainRouter = (props) => {
  return (
    <Router>
      <Routes {...props} />
    </Router>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: true // state.auth.isLoggedIn
})

export default connect(mapStateToProps)(MainRouter)
