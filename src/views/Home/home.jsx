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
    border: '2px solid red',
    marginBottom: '5rem',
    flexWrap: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      height: 'calc(90vh - 56px)',
      minHeight: '22.8rem'
    },
    [theme.breakpoints.only('sm')]: {
      height: 'calc(70vh - 64px)',
      minHeight: '25rem',
      maxHeight: '25rem'
    },
    [theme.breakpoints.only('md')]: {
      maxHeight: '100rem',
    },
  },
  leftContainer: {
    border: '2px solid blue',
  },
  loginButonContainer: {
    border: '2px solid green',
  },
  loginBottonItem: {
    border: '2px solid red',
  },
  textoComplementarioTitulo: {
    marginTop: '2rem',
    marginBottom: '2rem',
    border: '2px solid red',
  },
  imgPrincipal: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      width: '30rem'
    },
  },
  rightContainer: {
    border: '2px solid brown',
  },
}))

export default function ComoFunciona() {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} direction="column" justify="space-between" alignItems="flex-start" >

        <Grid container direction="column" style={{ border: '2px solid brown' }} item sm={7} md={6} xl={5}>
          <Grid container direction="column">
            <Typography variant='h1'>Participa.</Typography>
            <Typography variant='h1'>Impacta.</Typography>
            <Typography variant='h1'>Gana.</Typography>
          </Grid>
          <Grid item className={classes.textoComplementarioTitulo}>
            <Typography variant='subtitle1'>
              Concurso anual de emprendimientos de alumn@s de los ultimos años de la secunadria.
              </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.loginButonContainer} direction="column" justify="flex-end" alignItems="flex-start" item sm={7} md={6} xl={5}>

          <Grid item md={7} lg={5} style={{ width: '100%' }} container direction="column" justify="flex-start" alignItems="flex-start">
            <GoogleLogin />
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