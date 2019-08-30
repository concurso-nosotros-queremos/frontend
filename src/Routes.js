import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import RouteWithLayout from './components/routeWithLayout'
import Index from './views/Home/index'
import { connect } from 'react-redux'
import InscriptionWrapper from './containers/projectInscription'

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
            : <RouteWithLayout component={Index} layout={<></>} exact path='/' />
        )}
      />
      <ProtectedRoute
        isAllowed={props.isLoggedIn}
        component={InscriptionWrapper}
        layout={<></>}
        exact
        path='/dashboard'
      />
      <ProtectedRoute
        isAllowed={props.isLoggedIn}
        component={InscriptionWrapper}
        layout={<></>}
        exact
        path='/dashboard/inscription'
      />
      <RouteWithLayout
        component={() => <h1>404</h1>}
        layout={<></>}
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
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(MainRouter)
