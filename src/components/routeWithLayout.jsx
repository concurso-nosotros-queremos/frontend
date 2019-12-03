import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={matchProps => {
        if (Layout) {
          return (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          )
        } else {
          return <Component {...matchProps} />
        }
      }}
    />
  )
}

export default RouteWithLayout
