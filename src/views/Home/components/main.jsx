import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Link } from '@material-ui/core'
import GoogleLogin from '../../../containers/googleLogin'

const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: 'nowrap',
    [theme.breakpoints.only('xs')]: {
      height: 'calc(90vh - 56px)'
    },
    [theme.breakpoints.only('sm')]: {
      height: 'calc(70vh - 64px)',
      minHeight: '25rem',
      maxHeight: '35rem'
    },
    [theme.breakpoints.up('md')]: {
      height: '28rem'
    }
  },
  secondaryContainer: {
    [theme.breakpoints.only('xs')]: {
      marginTop: '1.5rem'
    }
  },
  textoComplementarioTitulo: {
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  imgPrincipal: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.only('md')]: {
      top: 'calc((100% - 19.5rem) / 2)',
      right: '0px',
      width: '28rem'
    },
    [theme.breakpoints.only('lg')]: {
      top: '0',
      right: '0px',
      height: '99%'
    },
    [theme.breakpoints.only('xl')]: {
      top: '0',
      right: '0px',
      height: '99%'
    }
  },
  titleText: {
    [theme.breakpoints.down('md')]: {
      fontSize: '4rem'
    }
  }
}))

export default function Main () {
  const classes = useStyles()

  return (
    <div style={{ position: 'relative' }} id='main'>
      <Grid container className={classes.root} direction='column' justify='space-between' alignItems='flex-start'>
        <Grid container direction='column' item sm={8} md={5} lg={4} className={classes.secondaryContainer}>
          <Grid container direction='column'>
            <Typography variant='h1' className={classes.titleText}>Participa.</Typography>
            <Typography variant='h1' className={classes.titleText}>Impacta.</Typography>
            <Typography variant='h1' className={classes.titleText}>Gana.</Typography>
          </Grid>
          <Grid item className={classes.textoComplementarioTitulo}>
            <Typography variant='subtitle1'>
              Concurso anual de emprendimientos de alumn@s de los últimos años de la secundaria.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          id='googleLogin' container className={classes.loginButonContainer} direction='column' justify='flex-end' alignItems='flex-start'
          item sm={7} md={6} xl={5}
        >
          <Grid item sm={9} md={7} lg={5} style={{ width: '100%', maxHeight: 'min-content' }} container direction='column' justify='flex-start' alignItems='flex-start'>
            <GoogleLogin />
            <Typography variant='body2' align='center' style={{ marginTop: '0.5rem', color: 'white', fontSize: '12px' }}>
              {'Al ingresar aceptas los '}
              <Link style={{ color: 'white', textDecoration: 'underline' }} href='http://shorturl.at/quILS'>términos y condiciones.</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <img className={classes.imgPrincipal} src={require('../../../assets/compass.svg')} alt='imagen principal' />
    </div>
  )
}
