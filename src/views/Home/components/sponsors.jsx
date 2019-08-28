import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    border: '2px solid red',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
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
  }
}))

export default function Footer () {
  const classes = useStyles()

  return (
    <>
      <Grid container direction='row' justify='space-between' className={classes.root}>
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
