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

import svgLeft from '../../assets/homePageLeft.svg'
import svgRight from '../../assets/homePageRight.svg'
import svgRightMd from '../../assets/homePageRightMd.svg'
import svgLeftSm from '../../assets/homePageLeftSm.svg'
import svgLeftXs from '../../assets/homePageLeftXs.svg'

const useStyles = makeStyles(theme => ({
  container: {
    paddingBottom: '5rem',
    paddingTop: '5rem',

    paddingLeft: '6rem',
    paddingRight: '6rem',

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
      paddingBottom: '3rem',
      paddingTop: '3rem',
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    },
    [theme.breakpoints.only('xl')]: {
      paddingLeft: '15rem',
      paddingRight: '15rem'
    },
  },
  first: {
    paddingTop: '3rem !important',
    backgroundImage: `url('${svgRight}'), url('${svgLeft}')`,
    backgroundPosition: 'right center, left center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('${svgRightMd}'), url('${svgLeft}')`,
      backgroundPosition: 'right center, left center',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0rem !important',
      backgroundSize: 'auto',
      backgroundImage: `url('${svgLeftSm}')`,
      backgroundPosition: 'left 300px',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: 'auto',
      backgroundImage: `url('${svgLeftXs}')`,
      backgroundPosition: 'left 60vh',
    },
  },
  last:{
    paddingBottom: '2rem',
  }
}))

export default function Index() {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth='xl' className={`${classes.container} ${classes.first}`}>
        <NavBar />
        <Home />
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
      <Container maxWidth='xl' className={`${classes.container} ${classes.last}`}>
        <Sponsors />
        <Footer />
      </Container>
    </>
  )
}
