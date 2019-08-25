import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
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
      height: '6rem'
    },
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justify="space-between" className={classes.root}>
        <Grid item xs={6} sm={'auto'} className={classes.imgItem}>
          <img className={classes.imgSponsor} src={require('../../../static/sponsors/Luigi-Bosca.jpg')}></img>
        </Grid>
        <Grid item xs={6} sm={'auto'} className={classes.imgItem}>
          <img className={classes.imgSponsor} src={require('../../../static/sponsors/MinisterioEducacion.png')}></img>
        </Grid>
        <Grid item xs={6} sm={'auto'} className={classes.imgItem}>
          <img className={classes.imgSponsor} src={require('../../../static/sponsors/Luigi-Bosca.jpg')}></img>
        </Grid>
        <Grid item xs={6} sm={'auto'} className={classes.imgItem}>
          <img className={classes.imgSponsor} src={require('../../../static/sponsors/MinisterioEducacion.png')}></img>
        </Grid>
      </Grid>
    </>
  );
}