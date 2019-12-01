import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import { Button, TextField, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '24px',
    marginBottom: '8px'
  }
}))


const Modal = props => {
  const classes = useStyles()
  const [token, setToken] = React.useState("")
  const [err, setErr] = React.useState(null)
  const [rta, setRta] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setRta(null)
    setErr(null)
    setToken("")

    if (rta === true) {
      window.location.reload();
    }
  }

  const checkToken = () => {
    fetch('https://queremosbackend.tk/rest/check/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.token}`
      },
      body: JSON.stringify({
        token: token,
      })
    }).then(response => {
      if (response.status === 400) {
        setErr('Introduzca un token')
      }
      else if (response.status === 401) {
        setErr('Ese código no es válido.')
      } else if (response.status === 200) {
        setRta(true)
      } else if (response.status === 403) {
        setErr('No estas autorizado.')
      } else {
        setErr('Error. Comunicate con nosotros.')
      }
    })
  }

  return (
    <>
      <Button variant='outlined' color='primary' style={{ marginTop: '8px', fontSize: "12px" }} onClick={handleClickOpen} type='button'>
        Agregar por codigo
      </Button>
      <Dialog onClose={handleClose} open={open} maxWidth='xs'>
        <DialogTitle style={{ padding: "16px 24px 0px" }}>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item>
              <Typography className={classes.title}>
                Agregar usando codigo
            </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Pedile el codigo de grupo al encargado del grupo
                al que te queres sumar para poder empezar administrarlo.
            </Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          {rta ?
            <Grid container direction='column' justify='center' alignItems='center'>
              <img src={require('../../assets/green_check.svg')} style={{ width: '5rem' }} alt='check' />
            </Grid> :
            <TextField
              name='token'
              label='Codigo'
              fullWidth
              margin='normal'
              variant='outlined'
              onChange={(event) => setToken(event.target.value)}
              onBlur={() => setErr(null)}
              value={token}
              helperText={err}
              error={err ? true : false}
            />
          }
        </DialogContent>
        <DialogActions>
          {rta ? null :
            <Button onClick={checkToken} type='button' style={{ color: "rgba(35, 47, 52, 0.8)" }}>
              Aceptar
            </Button>
          }
        </DialogActions>
      </Dialog>
    </>

  )
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(withRouter(Modal))