import React, { Component } from 'react'
import GoogleLoginContainer from '../../containers/googleLogin'
import FacebookLoginContainer from '../../containers/facebookLogin'
import InscriptionWrapper from '../../containers/projectInscription/forms'

export default class Index extends Component {
  render () {
    return (
      <div>
        <GoogleLoginContainer />
        <FacebookLoginContainer />
        <InscriptionWrapper />
      </div>
    )
  }
}
