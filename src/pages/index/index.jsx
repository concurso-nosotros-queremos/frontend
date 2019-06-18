import React, { Component } from 'react'
import GoogleLoginContainer from '../../containers/googleLogin'
import FacebookLoginContainer from '../../containers/facebookLogin'
import ProjectInscription from '../../containers/projectInscription'

export default class Index extends Component {
  render () {
    return (
      <div>
        <GoogleLoginContainer />
        <FacebookLoginContainer />
        <ProjectInscription />
      </div>
    )
  }
}
