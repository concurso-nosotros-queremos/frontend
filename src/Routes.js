import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import RouteWithLayout from './components/routeWithLayout'
import Index from './views/Home/index'
import Error404 from './views/404/index'
import { connect } from 'react-redux'
import InscriptionWrapper from './containers/projectInscription'
import Main from './layouts/Main/Main'
import Groups from './views/Groups/Groups'
import Dashboard from './views/Dashboard/Dashboard'
import Statistics from './views/Statistics/Statistics'
import FormSuccess from './views/Dashboard/FormSuccess'
import Inscription from './views/Inscription/Inscription'
import Minimal from './layouts/Minimal/Minimal'
import GroupEdit from './views/EditGroup/EditGroup'

const ProtectedRoute = ({ isAllowed, ...props }) => {
  return (
    isAllowed ? <RouteWithLayout {...props} /> : <Redirect to='/' />
  )
}

class Routes extends Component {
  render () {
    console.log(this.props)
    if (this.props.isLoggedIn) {
      if (!this.props.user.is_staff && !this.props.user.is_superuser) {
        return (
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                this.props.isLoggedIn
                  ? <Redirect to='/inscription' />
                  : <Route component={Index} exact path='/' />
              )}
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={Groups}
              layout={Main}
              exact
              path='/groups'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={GroupEdit}
              layout={Main}
              exact
              path='/groups/:id'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={InscriptionWrapper}
              layout={Main}
              exact
              path='/groups/add'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={FormSuccess}
              layout={Main}
              exact
              path='/groups/add/success'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={Inscription}
              layout={Minimal}
              exact
              path='/inscription'
            />
            <Route
              component={Error404}
            />
          </Switch>
        )
      } else if (this.props.user.is_superuser && this.props.user.is_staff) {
        return (
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                this.props.isLoggedIn
                  ? <Redirect to='/dashboard' />
                  : <Route component={Index} exact path='/' />
              )}
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={Dashboard}
              layout={Main}
              exact
              path='/dashboard'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={Groups}
              layout={Main}
              exact
              path='/groups'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={GroupEdit}
              layout={Main}
              exact
              path='/groups/:id'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={InscriptionWrapper}
              layout={Main}
              exact
              path='/groups/add'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={FormSuccess}
              layout={Main}
              exact
              path='/groups/add/success'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={Statistics}
              layout={Main}
              exact
              path='/statistics'
            />
            <ProtectedRoute
              isAllowed={this.props.isLoggedIn}
              component={Inscription}
              layout={Minimal}
              exact
              path='/inscription'
            />
            <Route
              component={Error404}
            />
          </Switch>
        )
      }
    } else {
      return (
        <Switch>
          <Route
            component={Index}
            exact
            path='/'
          />
          <Redirect to='/' />
        </Switch>
      )
    }
  }
}

const MainRouter = (props) => {
  return (
    <Router>
      <Routes {...props} />
    </Router>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  user: {
    ...state.auth.user
  }
})

export default connect(mapStateToProps)(MainRouter)
