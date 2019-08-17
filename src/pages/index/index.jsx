import React from 'react'
import NavBar from '../../components/navbar/index'
import Home from '../../components/home/index'
import ComoFunciona from '../../components/comoFunciona/index'
import InscriptionWrapper from '../../containers/projectInscription/index'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
  }
}))

export default function Index() {
  const classes = useStyles()

  return (
    <Container maxWidth="xl" className={classes.container}>
      <NavBar />
      <ComoFunciona />
    </Container>
  )
}
