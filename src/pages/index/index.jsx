import React, { Component } from 'react'
import GoogleLoginContainer from '../../containers/googleLogin'
import FacebookLoginContainer from '../../containers/facebookLogin'
import InscriptionWrapper from '../../containers/projectInscription'
import { Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { width } from '@material-ui/system';

const useStyles = ({
  root: {
    backgroundColor: "red",
  }
});

class Index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
          <Grid item style={{width:"280px"}}>
            <FacebookLoginContainer />
            <GoogleLoginContainer />
          </Grid>
        </Grid >
      </div>
    )
  }
}

export default (withStyles(useStyles)(Index))
