import React, { Component } from 'react'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login'
import { facebookLoginRequest, facebookLoginSuccess, facebookLoginError } from '../../state/facebookLogin/actions'

class FacebookLoginContainer extends Component {
  constructor (props) {
    super(props)

    this.facebookLoginRequestHandler = this.facebookLoginRequestHandler.bind(this)
    this.facebookLoginSuccessHandler = this.facebookLoginSuccessHandler.bind(this)
    this.facebookLoginErrorHandler = this.facebookLoginErrorHandler.bind(this)
  }

  facebookLoginRequestHandler () {
    this.props.facebookLoginRequest()
  }

  facebookLoginSuccessHandler (response) {
    this.props.facebookLoginSuccess(response)
  }

  facebookLoginErrorHandler (response) {
    this.props.facebookLoginError({ message: 'Unexpected error (popup_closed?)' })
  }

  render () {
    return (
      <div>
        <div>
          <FacebookLogin
            appId='2533488746670930'
            callback={this.facebookLoginSuccessHandler}
            onClick={this.facebookLoginRequestHandler}
            onFailure={this.facebookLoginErrorHandler}
            fields='name,email,picture'
          />
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginContainer)
