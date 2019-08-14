import React from 'react'
import NavBar from '../../components/navbar'
import Home from '../../components/home'
import InscriptionWrapper from '../../containers/projectInscription'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'red',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0rem !important',
      paddingRight: '0rem !important'
    }
  }
}))

export default function Index() {
  const classes = useStyles()

  return (
    <Container maxWidth="xl" className={classes.container}>
      <NavBar />
      <Home />
      <Grid container justify='center'>
        <InscriptionWrapper />
      </Grid>
    </Container>
  )
}
