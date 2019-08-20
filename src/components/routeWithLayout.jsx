import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Component {...matchProps} />
      )}
    />
  )
}

export default RouteWithLayout
