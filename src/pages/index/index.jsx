import React from 'react'
import NavBar from '../../components/navbar/index'
import Home from '../../components/home/index'
import ComoFunciona from '../../components/comoFunciona/index'
import Proyectos from '../../components/proyectos/index'
import Organizan from '../../components/organizan/index'
import Contacto from '../../components/contacto/index'
import InscriptionWrapper from '../../containers/projectInscription/index'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

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
      <ComoFunciona />
      <Proyectos />
      <Organizan />
      <Contacto />
    </Container>
  )
}
