import React from 'react'
import NavBar from '../../components/navbar'
import Home from '../../components/home'
import InscriptionWrapper from '../../containers/projectInscription'
import { Grid, Container } from '@material-ui/core'

export default function Index() {
  return (
    <Container maxWidth="xl">
      <NavBar />
      <Home />
      <Grid container justify='center'>
        <InscriptionWrapper />
      </Grid>
    </Container>
  )
}
