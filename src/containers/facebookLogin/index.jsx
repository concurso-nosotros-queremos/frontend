import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Box } from '@material-ui/core';
import { facebookLoginRequest, facebookLoginSuccess, facebookLoginError } from '../../state/facebookLogin/actions'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import { withStyles } from '@material-ui/styles';


const useStyles = ({
  facebookBtn: {
    display: 'flex !important',
    justifyContent: 'start',
    alignItems: 'center',
    width: "100%",
    textTransform: 'none',
    backgroundColor: "rgba(240,240,240,255)",
    padding: "1rem",
    '&:hover': {
      backgroundColor: "rgba(240,240,240,255)",
    },
  }
});

class FacebookLoginContainer extends Component {
  constructor(props) {
    super(props)

    this.facebookLoginRequestHandler = this.facebookLoginRequestHandler.bind(this)
    this.facebookLoginSuccessHandler = this.facebookLoginSuccessHandler.bind(this)
    this.facebookLoginErrorHandler = this.facebookLoginErrorHandler.bind(this)
  }

  facebookLoginRequestHandler() {
    this.props.facebookLoginRequest()
  }

  facebookLoginSuccessHandler(response) {
    this.props.facebookLoginSuccess(response)
  }

  facebookLoginErrorHandler(response) {
    this.props.facebookLoginError({ message: 'Unexpected error (popup_closed?)' })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FacebookLogin
          appId='2533488746670930'
          callback={this.facebookLoginSuccessHandler}
          onClick={this.facebookLoginRequestHandler}
          onFailure={this.facebookLoginErrorHandler}
          fields='name,email,picture'
          icon='fa-facebook'
          
          render={renderProps => (
            <Button disableRipple className={classes.facebookBtn} onClick={this.facebookLoginRequestHandler}>
              <Box width="10%" style={{display:"flex", justifyContent: "center", marginRight: "1.5rem" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png" alt="new" height="22px" />
              </Box>
              <Box width="90%" style={{width:"max-content", display:"flex", justifyContent: "center"}}>
                Inscribite con Facebook
              </Box>
            </Button >
          )
          }
        />
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.facebookLogin.isLoading
})

const mapDispatchToProps = dispatch => ({
  facebookLoginRequest: () => dispatch(facebookLoginRequest()),
  facebookLoginSuccess: (data) => dispatch(facebookLoginSuccess(data)),
  facebookLoginError: (error) => dispatch(facebookLoginError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(FacebookLoginContainer))
