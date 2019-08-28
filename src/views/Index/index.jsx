import React from 'react'
import NavBar from '../../components/navbar'
import Home from '../Home/home'
import ComoFunciona from '../Home/components/comoFunciona'
import Contacto from '../Home/components/contacto'
import Organizan from '../Home/components/organizan'
import Proyectos from '../Home/components/proyectos'
import Footer from '../../components/footer/index'
import Sponsors from '../Home/components/sponsors'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Background1700 from '../../assets/fondo1700.svg'
import Background from '../../assets/fondoLg.svg'

const useStyles = makeStyles(theme => ({
  container: {
    border: '2px solid blue',
    paddingBottom: '5rem',
    paddingTop: '5rem',
    paddingLeft: '6rem',
    paddingRight: '6rem',

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem'
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    }
  },
  first: {
    paddingTop: '3rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0rem !important',
    }
  }

}))

export default function Index() {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth='xl' className={[classes.container, classes.first]}>
        <NavBar />
        <Home />
      </Container>
      <Container maxWidth='xl' className={classes.container}>
        <ComoFunciona />
      </Container>
      <Container maxWidth='xl' className={classes.container}>
        <Proyectos />
      </Container>
      <Container maxWidth='xl' className={classes.container}>
        <Organizan />
      </Container>
      <Container maxWidth='xl' className={classes.container}>
        <Contacto />
      </Container>
      <Container maxWidth='xl' className={classes.container}>
        <Sponsors />
        <Footer />
      </Container>
    </>
  )
}
