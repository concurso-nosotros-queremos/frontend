import React from 'react'
import { BrowserRouter as Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import RouteWithLayout from './routeWithLayout'

const userDefault = '/groups'
const userEmpty = '/inscription'
const adminDefault = '/dashboard'

const ProtectedRoute = ({ requireLogin = true, requireAdmin = false, isDefault = false, redirect = '/', ...props }) => {
  console.log(props)
  if (isDefault) {
    console.log(`Empty user: ${props.user.group_count}`)
    if (props.user.is_staff || props.user.is_superuser) {
      return <Redirect to={adminDefault} />
    } else if (props.isLoggedIn && (!props.user.is_staff && !props.user.is_superuser)) {
      if (props.user.group_count === 0) {
        return <Redirect to={userEmpty} />
      } else {
        return <Redirect to={userDefault} />
      }
    } else {
      return <RouteWithLayout {...props} />
    }
  } else if (requireLogin) {
    if (props.isLoggedIn) {
      if (requireAdmin) {
        if ((props.user.is_staff || props.user.is_superuser)) {
          return <RouteWithLayout {...props} />
        } else {
          return <Redirect to={redirect} />
        }
      } else {
        return <RouteWithLayout {...props} />
      }
    } else {
      return <Redirect to={redirect} />
    }
  } else {
    return <RouteWithLayout {...props} />
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  user: {
    ...state.auth.user
  }
})

export default connect(mapStateToProps)(ProtectedRoute)
