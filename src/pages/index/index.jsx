import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navbar/index'
import Container from '@material-ui/core/Container';

const rootStyles = makeStyles(theme => ({

}));


export default function Index() {
  const classes = rootStyles();
  return (
    <Container style={{padding:"0rem"}} maxWidth="xl">
      <NavBar />
    </Container>
  )
}
