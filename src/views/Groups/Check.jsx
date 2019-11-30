import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { connect } from 'react-redux'
import withGroupCount from '../../hoc/withDashboard'
import Typography from '@material-ui/core/Typography'
import React, { forwardRef } from 'react'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import { Grid, useMediaQuery, Button, TextField } from '@material-ui/core'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({

    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '24px'
    }
  }))


const Modal = props => {
    const classes = useStyles()
    const [token, setToken] = React.useState("")
    const [rta, setRta] = React.useState("")
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
      }
      const handleClose = () => {
        setOpen(false)
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
          setRta('Introduzca un token')
        }
        else if (response.status === 401) {
          setRta('Token incorrecto')
        } else if (response.status === 200) {
          setRta('Acceso garantizado')
        } else if (response.status === 403) {
          setRta('No estas autorizado')
        } else {
          setRta('Error')
        }
      })
    }
    return (
        <>

            <Button variant='outlined' color='primary' style={{ marginTop: '8px' }} onClick={handleClickOpen} type='button'>
            Agregar por codigo
          </Button>
        <Dialog onClose={handleClose} open={open} maxWidth='sm'>
          <DialogContent>
          <TextField
            name='token'
            label='Token'
            fullWidth
            margin='normal'
            variant='outlined'
            onChange={(event) => setToken(event.target.value)}
            value={token}
          />
          <Typography className={classes.title} autoCapitalize>
            {rta}
          </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={checkToken} type='button'>
              Agregar
            </Button>
          </DialogActions>
        </Dialog>
          </>

    )
  }
 
  const mapStateToProps = (state) => ({
    token: state.auth.convertedToken.accessToken
  })
  
  export default connect(mapStateToProps)(withRouter(Modal))