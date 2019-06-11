import React, { Component } from 'react'
import GoogleLoginContainer from '../../containers/googleLogin'
import FacebookLoginContainer from '../../containers/facebookLogin'

export default class Index extends Component {
  render () {
    return (
      <div>
        <GoogleLoginContainer />
        <FacebookLoginContainer />
      </div>
    )
  }
}
