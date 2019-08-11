import React, { Component } from 'react'
import GoogleLoginContainer from '../../containers/googleLogin'
import FacebookLoginContainer from '../../containers/facebookLogin'
import { Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = ({
});

class Index extends Component {
  render() {

    return (
      <>
        <Grid container spacing={1} direction="column" justify="center" alignItems="center" style={{ width: "280px" }} >
          <Grid item style={{ width: "inherit" }}>
            <FacebookLoginContainer />
          </Grid>
          <Grid item style={{ width: "inherit" }}>
            <GoogleLoginContainer />
          </Grid>
        </Grid >
      </>
    )
  }
}

export default (withStyles(useStyles)(Index))
