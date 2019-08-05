import React, { Component } from 'react'
// import GoogleLoginContainer from '../../containers/googleLogin'
// import FacebookLoginContainer from '../../containers/facebookLogin'
import InscriptionWrapper from '../../containers/projectInscription'
import { Grid } from '@material-ui/core'

export default class Index extends Component {
  render () {
    return (
      <Grid container justify='center'>
        <InscriptionWrapper />
      </Grid>
    )
  }
}
