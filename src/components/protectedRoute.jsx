import React from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import RouteWithLayout from './routeWithLayout'

const userDefault = '/groups'
const userEmpty = '/selector'
const adminDefault = '/dashboard'

const ProtectedRoute = ({ requireLogin = false, requireAdmin = false, isDefault = false, redirect = '/', ...props }) => {
  console.log(props)
  if (isDefault) {
    if (props.isLoggedIn) {
      if (props.user.is_staff || props.user.is_superuser) {
        return <Redirect to={adminDefault} />
      } else if (!props.user.is_staff && !props.user.is_superuser) {
        if (props.user.group_count === 0 && props.path !== userEmpty) {
          return <Redirect to={userEmpty} />
        } else if (props.user.group_count === 0 && props.path === userEmpty) {
          return <RouteWithLayout {...props} />
        } else {
          return <Redirect to={userDefault} />
        }
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
