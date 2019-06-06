import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { googleLoginRequest, googleLoginError, googleLoginSuccess } from '../../state/googleLogin/actions'

class GoogleLoginContainer extends Component {
  constructor (props) {
    super(props)

    this.googleLoginRequestHandler = this.googleLoginRequestHandler.bind(this)
    this.googleLoginSuccessHandler = this.googleLoginSuccessHandler.bind(this)
    this.googleLoginErrorHandler = this.googleLoginErrorHandler.bind(this)
  }

  googleLoginRequestHandler () {
    this.props.googleLoginRequest()
  }

  googleLoginSuccessHandler (response) {
    this.props.googleLoginSuccess(response)
    // props.convertGoogleToken(response.Zi.access_token)
  }

  googleLoginErrorHandler (response) {
    this.props.googleLoginSuccess(response)
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <div>
          <GoogleLogin
            clientId='254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com'
            buttonText='Login with Google'
            onRequest={this.googleLoginRequestHandler}
            onSuccess={this.googleLoginSuccessHandler}
            onFailure={this.googleLoginErrorHandler}
            className='loginBtn loginBtn--google'
            prompt='select_account'
            redirectUri='http://localhost:3000/secret/'
          />
          {this.props.isLoading ? 'Loading' : 'Not loading'}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.googleLoginReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
  googleLoginRequest: () => dispatch(googleLoginRequest()),
  googleLoginSuccess: () => dispatch(googleLoginSuccess()),
  googleLoginError: () => dispatch(googleLoginError())
})

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginContainer)
