import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Paper from '@material-ui/core/Paper/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { Button, Link } from '@material-ui/core';
import GoogleLogin from '../../containers/googleLogin/index'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '5rem',
    flexWrap: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      height: 'calc(90vh - 56px)',
    },
    [theme.breakpoints.only('sm')]: {
      height: 'calc(90vh - 64px)',
    },
    [theme.breakpoints.only('md')]: {
      height: 'calc(100vh - 194px)',
      minHeight: '27rem',
      maxHeight: '37rem'
    },
    [theme.breakpoints.only('lg')]: {
      height: 'calc(80vh - 194px)',
      minHeight: '30rem',
      maxHeight: '35rem'
    },
    [theme.breakpoints.only('xl')]: {
      height: 'calc(50vh - 194px)',
      minHeight: '35rem',
      maxHeight: '40rem'
    }
  },
  titleContainer: {
    // border: '2px solid yellow',
  },
  loginButonContainer: {
    // border: '2px solid green',
    height: 'max-content',
    [theme.breakpoints.only('sm')]: {
      maxWidth: '336px'
    },
  },
  loginBottonItem: {
    marginBottom: '0.5rem'
  },
  textoComplementarioTitulo: {
    // border: '2px solid red',
    marginTop: '3rem',
    // [theme.breakpoints.down('sm')]: {
    //   width: '60%'
    // },
  },
  imgPrincipal: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  }
}))

export default function ComoFunciona() {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} direction="column" justify="space-between" alignItems="flex-start">
        <Grid container className={classes.titleContainer} direction="row" justify="space-between" alignItems="flex-start">
          <Grid item container md={6} style={{ height: '100%' }} direction="column" alignItems="flex-start">
            <Grid container direction="column">
              <Typography variant='h1'>Participa.</Typography>
              <Typography variant='h1'>Impacta.</Typography>
              <Typography variant='h1'>Gana.</Typography>
            </Grid>
            <div item className={classes.textoComplementarioTitulo}>
              <Typography variant='subtitle1'>
                Concurso anual de emprendimientos de alumn@s de los ultimos años de la secunadria.
              </Typography>
            </div>
          </Grid>
          <Grid item xs>
            <img className={classes.imgPrincipal} src={require('../../static/header.svg')} style={{ maxHeight: '21rem' }}></img>
          </Grid>
        </Grid>

        <Grid container className={classes.loginButonContainer} direction="column" justify="flex-start" alignItems="flex-start">
          <Grid item container md={4} className={classes.loginBottonItem}>
            <GoogleLogin />
          </Grid>

          <Grid item>
            <Typography variant='body2' color='textSecondary' align='center'>
              {'Ya tienes cuenta? '}
              <Link href=''>Inicia Sesion</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}