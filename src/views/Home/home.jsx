import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Link } from '@material-ui/core'
import GoogleLogin from '../../containers/googleLogin'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '5rem',
    flexWrap: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      height: 'calc(90vh - 56px)',
      minHeight: '22.8rem',
      maxHeight: '30rem'
    },
    [theme.breakpoints.only('sm')]: {
      height: 'calc(70vh - 64px)',
      minHeight: '25rem',
      marginBottom: '10rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '28rem',
      marginBottom: '10rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '28rem',
      marginBottom: '10rem'
    }
  },
  textoComplementarioTitulo: {
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  imgPrincipal: {
    zIndex: '-2',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.only('md')]: {
      top: '220px',
      right: 'calc(100vw / 17)',
      width: '28rem'
    },
    [theme.breakpoints.only('lg')]: {
      top: '200px',
      right: 'calc(100vw / 13)',
      width: '34rem'
    },
    [theme.breakpoints.only('xl')]: {
      top: '200px',
      width: '34rem',
      right: 'calc(((100vw - 1920px) / 2 + 6rem) * 1.06)'
    }
  },
  titleText: {
    [theme.breakpoints.down('md')]: {
      fontSize: '4rem'
    }
  }
}))

export default function ComoFunciona () {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} direction='column' justify='space-between' alignItems='flex-start'>
        <Grid container direction='column' item sm={7} md={6} xl={5}>
          <Grid container direction='column'>
            <Typography variant='h1' className={classes.titleText}>Participa.</Typography>
            <Typography variant='h1' className={classes.titleText}>Impacta.</Typography>
            <Typography variant='h1' className={classes.titleText}>Gana.</Typography>
          </Grid>
          <Grid item className={classes.textoComplementarioTitulo}>
            <Typography variant='subtitle1'>
              Concurso anual de emprendimientos de alumn@s de los ultimos años de la secunadria.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.loginButonContainer} direction='column' justify='flex-end' alignItems='flex-start' item sm={7} md={6} xl={5}>
          <Grid item md={7} lg={5} style={{ width: '100%' }} container direction='column' justify='flex-start' alignItems='flex-start'>
            <GoogleLogin />
            <Typography variant='body2' color='textSecondary' align='center'>
              {'Ya tienes cuenta? '}
              <Link href=''>Inicia Sesion</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <img className={classes.imgPrincipal} src={require('../../assets/header.svg')} alt='imagen principal' />
    </>
  )
}
