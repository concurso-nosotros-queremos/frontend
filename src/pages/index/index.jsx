import React from 'react'
import NavBar from '../../components/navbar'
import Home from '../../components/home'
import InscriptionWrapper from '../../containers/projectInscription'
import { Grid } from '@material-ui/core';

export default function Index () {
  return (
    <>
      <NavBar />
      <Home />
      <Grid container justify='center'>
        <InscriptionWrapper />
      </Grid>
    </>
  )
}
