import React from 'react'
import NavBar from '../../components/navbar/index'
import Home from '../../views/Home/home'
import ComoFunciona from '../../views/Home/components/comoFunciona'
import Contacto from '../../views/Home/components/contacto'
import Organizan from '../../views/Home/components/organizan'
import Proyectos from '../../views/Home/components/proyectos'
import InscriptionWrapper from '../../containers/projectInscription/index'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '6rem',
    paddingRight: '6rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }
  }
}))

export default function Index() {
  const classes = useStyles()

  return (
    <Container maxWidth="xl" className={classes.container}>
      <NavBar />
      <Home />
      <ComoFunciona />
      <Proyectos />
      <Organizan />
      <Contacto />
    </Container>
  )
}
