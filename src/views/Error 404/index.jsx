import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import ImagenError404 from '../../assets/error404.svg'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  imgError: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${ImagenError404})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
  },
  button: {
    color: theme.palette.text.primary,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0)',
    },
  }
}));

export default function Error404() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm" style={{ overflow: 'hidden'}}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={5} className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center" spacing={2} item>
          <Grid item>
            <Typography variant='h1' >
              UPS! Error 404
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' style={{ fontFamily: 'Roboto' }} color='textSecondary' >
              La página que estás buscando no existe
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ width: '100%', height: '25rem', }}>
          <div className={classes.imgError}></div>
        </Grid>
        <Grid item>
          <Button size="large" className={classes.button} disableRipple href='/'>
            <KeyboardArrowLeftIcon style={{ width: '2rem', height: '2rem' }} />
            Regresar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}