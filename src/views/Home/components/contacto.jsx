import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Button, FormControlLabel, Checkbox } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import fetchResource from '../../../services/apiHandler'
import ReCAPTCHA from 'react-google-recaptcha'

class Contacto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      captcha: false,
      response: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleClick = (key) => {
    if (this.state.captcha && this.state.name != '' && this.state.email != '' && this.state.message != '') {
      this.setState({
        name: '',
        email: '',
        message: '',
        captcha: false,
        response: "Su duda se ha enviado correctamente"
      })
      this.captcha.reset()

      return fetchResource('rest/message_email/', {
        method: 'POST',
        body: {
          ...this.state
        }
      }

      )

    } else {
      this.setState({
        response: "Asegurate de haber completado todos los campos y haber verificado el captcha"
      })
    }

  };

  handleCaptcha = (key) => {
    this.setState({
      captcha: true,
    })
  }


  render() {
    const isLoggedIn = this.state.response;

    const classes = makeStyles(theme => ({
      root: {
        display: 'flex',
        flexGrow: '1',
        [theme.breakpoints.up('lg')]: {
          paddingLeft: '8rem',
          paddingRight: '8rem'
        }
      },
      titleContainer: {
        marginBottom: '1rem'
      },
      formContainer: {
      }
    }))

    return (
      <>
        <Grid container className={classes.root} alignItems='flex-start' id='contacto'>
          <Grid container item md={6} className={classes.titleContainer} direction='column' justify='flex-start' alignItems='flex-start'>
            <Grid item lg={8} xl={8} md={10} style={{ marginBottom: '2rem' }}>
              <Typography variant='h3'>¿Te quedaste con alguna duda?</Typography>
            </Grid>
            <Grid item lg={8} xl={6} md={8}>
              <Typography variant='subtitle1'>
                ¡No hay problema! Dejanos tu pregunta y te respondemos a la brevedad.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item md={6} className={classes.formContainer} direction='column' justify='flex-start' alignItems='flex-start'>
            <form style={{ width: '100%' }}>
              <Grid item>
                <TextField
                  name='name'
                  label='Nombre'
                  fullWidth
                  margin='normal'
                  variant='outlined'
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </Grid>
              <Grid item>
                <TextField
                  name='email'
                  label='Email'
                  fullWidth
                  margin='normal'
                  variant='outlined'
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </Grid>
              <Grid item>
                <TextField
                  name='message'
                  label='Mensaje'
                  fullWidth
                  multiline
                  rows='4'
                  margin='normal'
                  variant='outlined'
                  onChange={this.handleChange}
                  value={this.state.message}
                />
              </Grid>
              <Grid item container direction='row' justify='space-between' alignItems='center' style={{ marginTop: '1rem' }}>
                <Grid item>
                  <ReCAPTCHA
                    onChange={this.handleCaptcha}
                    ref={e => (this.captcha = e)}
                    //This ref can be used to call captcha related functions in case you need.
                    sitekey="6Lexrb8UAAAAAKqGVOjJaLuTyM5rs9Kf1iLMDmW_"
                    theme="with"
                  />
                </Grid>
                <Grid item>
                  <Button variant='contained' color='primary' size='large' onClick={this.handleClick}>
                    Enviar
                  </Button>
                </Grid>
                <Grid item container direction='row' justify='space-between' alignItems='center' style={{ marginTop: '1rem' }}>
                  {this.state.response === "Su duda se ha enviado correctamente" ? <Typography style={{ color: "green" }}> {this.state.response} </Typography> : <Typography style={{ color: "red" }}> {this.state.response} </Typography>}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default Contacto
