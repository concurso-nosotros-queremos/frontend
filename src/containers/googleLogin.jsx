import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { withStyles } from '@material-ui/core/styles'
import { googleLoginRequest, googleLoginSuccess, googleLoginError } from '../redux/googleLogin/actions'
import { Button, Box, Typography } from '@material-ui/core'

const useStyles = ({
  googleBtn: {
    display: 'flex !important',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%',
    textTransform: 'none',
    backgroundColor: 'rgba(240,240,240,255)',
    padding: '0.8rem',
    '&:hover': {
      backgroundColor: 'rgba(240,240,240,255)'
    }
  },
  text: {
    textTransform: 'none',
    fontFamily: 'Roboto',
    fontSize: '1rem',
  }
})

class GoogleLoginContainer extends Component {
  constructor(props) {
    super(props)

    this.googleLoginRequestHandler = this.googleLoginRequestHandler.bind(this)
    this.googleLoginSuccessHandler = this.googleLoginSuccessHandler.bind(this)
    this.googleLoginErrorHandler = this.googleLoginErrorHandler.bind(this)
  }

  googleLoginRequestHandler() {
    this.props.googleLoginRequest()
  }

  googleLoginSuccessHandler(response) {
    this.props.googleLoginSuccess(response)
  }

  googleLoginErrorHandler(response) {
    this.props.googleLoginError(response)
  }

  render() {
    const { classes } = this.props
    return (
      <GoogleLogin
        render={renderProps => (
          <Box boxShadow={2} style={{ borderRadius: '4px', width: '100%' }}>
            <Button disableRipple onClick={renderProps.onClick} disabled={renderProps.disabled} className={classes.googleBtn}>
              <Box width='10%' style={{ display: 'flex', justifyContent: 'center', marginRight: '1.5rem' }}>
                <img src={require('../assets/google.png')} alt='facebook' height='22px' />
              </Box>
              <Box width='90%' style={{ width: 'max-content', display: 'flex', justifyContent: 'center' }}>
                <Typography color='textSecondary' className={classes.text}>Inscribite con Google</Typography>
              </Box>
            </Button>
          </Box>
        )}
        className={classes.google}
        clientId='254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com'
        buttonText='Login with Google'
        onRequest={this.googleLoginRequestHandler}
        onSuccess={this.googleLoginSuccessHandler}
        onFailure={this.googleLoginErrorHandler}
        prompt='select_account'
        redirectUri='http://localhost:3000/secret/'
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.googleLogin.isLoading
})

const mapDispatchToProps = dispatch => ({
  googleLoginRequest: () => dispatch(googleLoginRequest()),
  googleLoginSuccess: (data) => dispatch(googleLoginSuccess(data)),
  googleLoginError: (error) => dispatch(googleLoginError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(GoogleLoginContainer))
