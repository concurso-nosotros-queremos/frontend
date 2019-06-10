import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { googleLoginRequest, googleLoginSuccess, googleLoginError } from '../../state/googleLogin/actions'

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
  }

  googleLoginErrorHandler (response) {
    this.props.googleLoginError(response)
  }

  render () {
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
  isLoading: state.googleLogin.isLoading
})

const mapDispatchToProps = dispatch => ({
  googleLoginRequest: () => dispatch(googleLoginRequest()),
  googleLoginSuccess: (data) => dispatch(googleLoginSuccess(data)),
  googleLoginError: (error) => dispatch(googleLoginError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginContainer)
