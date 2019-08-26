import React from 'react'
import NavBar from '../../components/navbar/index'
import Home from '../Home/home'
import ComoFunciona from '../Home/components/comoFunciona'
import Contacto from '../Home/components/contacto'
import Organizan from '../Home/components/organizan'
import Proyectos from '../Home/components/proyectos'
import Footer from '../../components/footer/index'
import Sponsors from '../Home/components/sponsors'
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
      <Sponsors />
      <Footer />
    </Container>
  )
}
