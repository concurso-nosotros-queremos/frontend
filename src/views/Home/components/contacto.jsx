import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Button, FormControlLabel, Checkbox } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import fetchResource from '../../../services/apiHandler'

const useStyles = theme => ({
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
})

class Contacto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleClick () {
    return fetchResource('rest/message_email/', {
      method: 'POST',
      body: {
        ...this.state
      }
    })
  };

  render () {
    const { classes } = this.props
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        value='checkedB'
                        color='primary'
                      />
                    }
                    label={
                      <Typography variant='body1'>
                        No soy un robot
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item>
                  <Button variant='contained' color='primary' size='large' onClick={this.handleClick}>
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default withStyles(useStyles)(Contacto);

