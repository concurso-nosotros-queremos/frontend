import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navbar/index'
import Container from '@material-ui/core/Container';

const rootStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: "0rem", paddingRight: "0rem"
    },
    paddingLeft: "6rem", paddingRight: "6rem"
  },
}));


export default function Index() {
  const classes = rootStyles();
  return (
    <Container>
      <NavBar />
      <Container fixed className={classes.root}>
      </Container>
    </Container>
  )
}
