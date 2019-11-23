import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import ImagenSuccess from '../../assets/successSvg.svg'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  imgError: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${ImagenSuccess})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain'
  },
  button: {
    color: theme.palette.text.primary,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  imgContainer: {
    width: '100%',
    height: '25rem',
    [theme.breakpoints.up('lg')]: {
      height: '20rem'
    }
  }
}))

export default function Error404 (props) {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='sm' style={{ overflow: 'hidden' }}>
      <Grid container direction='column' justify='center' alignItems='center' spacing={5} className={classes.root}>
        <Grid item className={classes.imgContainer}>
          <div className={classes.imgError} />
        </Grid>
        <Grid container direction='column' justify='center' alignItems='center' spacing={2} item>
          <Grid item>
            <Typography variant='h5' style={{ fontWeight: '400' }} color='textSecondary'>
              La inscripcion se realizo con exito
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button size='large' className={classes.button} disableRipple onClick={() => props.history.push('/dashboard')}>
            <KeyboardArrowLeftIcon style={{ width: '2rem', height: '2rem' }} />
            Regresar
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
