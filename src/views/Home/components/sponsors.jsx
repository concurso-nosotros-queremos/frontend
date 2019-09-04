import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root:{
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    },
  },
  imgSponsor: {
    maxWidth: '100%',
    maxHeight: '100%',
    opacity: '0.5'
  },
  imgItem: {
    height: '100%',
    alignSelf: 'center',
    [theme.breakpoints.only('xs')]: {
      height: '5rem'
    },
    [theme.breakpoints.up('sm')]: {
      height: '4rem'
    }
  },
  barraDecorativa: {
    width: '50%',
    height: '5px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    marginTop: '.6rem'
  },
}))

export default function Sponsors() {
  const classes = useStyles()

  return (
    <>
      <Grid container wrap='nowrap' direction='column' justify='center' alignItems='center' style={{ marginBottom: '3rem' }} id='sponsors'>
        <Grid item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h3' align='center'>
            Sponsors
            </Typography>
          <div className={classes.barraDecorativa} />
        </Grid>
      </Grid>

      <Grid container direction='row' justify='space-around' className={classes.root}>
        <Grid item xs={6} sm='auto' className={classes.imgItem}>
          <img className={classes.imgSponsor} alt='sponsor' src={require('../../../assets/sponsors/Luigi-Bosca.jpg')} />
        </Grid>
        <Grid item xs={6} sm='auto' className={classes.imgItem}>
          <img className={classes.imgSponsor} alt='sponsor' src={require('../../../assets/sponsors/MinisterioEducacion.png')} />
        </Grid>
        <Grid item xs={6} sm='auto' className={classes.imgItem}>
          <img className={classes.imgSponsor} alt='sponsor' src={require('../../../assets/sponsors/Luigi-Bosca.jpg')} />
        </Grid>
        <Grid item xs={6} sm='auto' className={classes.imgItem}>
          <img className={classes.imgSponsor} alt='sponsor' src={require('../../../assets/sponsors/MinisterioEducacion.png')} />
        </Grid>
      </Grid>
    </>
  )
}
