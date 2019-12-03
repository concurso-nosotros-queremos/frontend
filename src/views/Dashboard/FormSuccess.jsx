import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import ImagenError404 from '../../assets/successSvg.svg'

const useStyles = makeStyles(theme => ({
  imgError: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${ImagenError404})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain'
  },
  imgContainer: {
    marginTop: '1rem',
    width: '100%',
    height: '100%',
    marginBottom: '2rem'
  }
}))

const FormSuccess = props => {
  const classes = useStyles()

  return (
    <Grid container direction='column' justify='center' alignItems='center' className={classes.root} spacing={4}>
      <Grid item>
        <Typography variant='h3' style={{ fontFamily: 'Roboto' }}>
          Inscripcion enviada!
        </Typography>
      </Grid>
      <Grid item className={classes.imgContainer}>
        <div className={classes.imgError} />
      </Grid>
      <Grid item>
        <Typography variant='h6' style={{ fontFamily: 'Roboto', fontWeight: '400' }}>
          Pronto estaremos en contacto...
        </Typography>
      </Grid>
      <Grid item>
        <Button size='large' className={classes.button} disableRipple to='/groups' component={Link}>
          <KeyboardArrowLeftIcon style={{ width: '2rem', height: '2rem' }} />
          Regresar
        </Button>
      </Grid>
    </Grid>
  )
}

export default FormSuccess
