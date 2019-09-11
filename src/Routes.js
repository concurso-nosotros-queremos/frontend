import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import RouteWithLayout from './components/routeWithLayout'
import Index from './views/Home/index'
import Error404 from './views/404/index'
import { connect } from 'react-redux'
import InscriptionWrapper from './containers/projectInscription'
import Main from './layouts/Main/Main'
import Groups from './views/Groups/Groups'
import Dashboard from './views/Dashboard/Dashboard'

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
            : <Route component={Index} exact path='/' />
        )}
      />
      <ProtectedRoute
        isAllowed={props.isLoggedIn}
        component={Dashboard}
        layout={Main}
        exact
        path='/dashboard'
      />
      <ProtectedRoute
        isAllowed={props.isLoggedIn}
        component={Groups}
        layout={Main}
        exact
        path='/groups'
      />
      <ProtectedRoute
        isAllowed={props.isLoggedIn}
        component={InscriptionWrapper}
        layout={Main}
        exact
        path='/groups/add'
      />
      <Route
        component={Error404}
      />
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
