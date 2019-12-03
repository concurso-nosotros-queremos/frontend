import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './views/Home/index'
import Error404 from './views/404/index'
import Main from './layouts/Main/Main'
import Groups from './views/Groups/Groups'
import Dashboard from './views/Dashboard/Dashboard'
import Statistics from './views/Statistics/Statistics'
import Inscription from './views/Inscription/Inscription'
import Minimal from './layouts/Minimal/Minimal'
import GroupEdit from './views/EditGroup/EditGroup'
import ProtectedRoute from './components/protectedRoute'
import Success from './views/Success/success'
import Selector from './views/Selector/Selector'
import Closed from './views/Closed/index'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <ProtectedRoute
          isDefault
          component={Index}
          exact
          path='/'
        />
        <ProtectedRoute
          isDefault
          requireLogin
          component={Selector}
          layout={Minimal}
          exact
          path='/selector'
        />
        <ProtectedRoute
          requireLogin
          requireAdmin
          component={Dashboard}
          layout={Main}
          exact
          path='/dashboard'
        />
        <ProtectedRoute
          component={Closed}
          layout={Minimal}
          exact
          path='/closed'
        />
        <ProtectedRoute
          requireLogin
          requireAdmin
          component={Statistics}
          layout={Main}
          exact
          path='/statistics'
        />
        <ProtectedRoute
          requireLogin
          component={Groups}
          layout={Main}
          exact
          path='/groups'
        />
        <ProtectedRoute
          requireLogin
          component={GroupEdit}
          layout={Main}
          exact
          path='/groups/:id'
        />
        <ProtectedRoute
          requireLogin
          component={Inscription}
          layout={Minimal}
          exact
          path='/inscription'
        />
        <ProtectedRoute
          requireLogin
          component={Success}
          layout={Minimal}
          exact
          path='/success'
        />
        <Route
          component={Error404}
        />
      </Switch>
    )
  }
}

const MainRouter = (props) => {
  return (
    <Router>
      <Routes {...props} />
    </Router>
  )
}

export default MainRouter
