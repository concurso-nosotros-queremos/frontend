import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'


import ImagenError404 from '../../assets/error404.svg'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    paddingLeft: '10rem',
    paddingRight: '10rem',
  },
  imgError: {
    width: '100%',
    maxWidth: '60vh'
  },
  button: {
    height: '3rem'
  }
}))

export default function Error404() {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" spacing={0} className={classes.root}>

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant='h1' style={{ fontSize: '15rem' }}>
              UPS!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h1'>
              Pagina
            </Typography>
            <Typography variant='h1'>
              no
            </Typography>
            <Typography variant='h1'>
              encontrada
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <img src={ImagenError404} alt="pagina no encontrada" className={classes.imgError} />
        </Grid>

        <Grid item className={classes.button}>
          <Button variant="outlined" size="large" color="secondary" className={classes.button} href='/'>
            <KeyboardArrowLeftIcon />
            Volver
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
