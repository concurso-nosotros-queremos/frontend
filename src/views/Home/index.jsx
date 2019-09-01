import React from 'react'
import NavBar from './components/navbar'
import Home from '../Home/components/main'
import ComoFunciona from './components/comoFunciona'
import Contacto from './components/contacto'
import Organizan from './components/organizan'
import Proyectos from './components/proyectos'
import Footer from './components/footer'
import Sponsors from './components/sponsors'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import svgLeft from '../../assets/homePageLeft.svg'
import svgRight from '../../assets/homePageRight.svg'
import svgRightMd from '../../assets/homePageRightMd.svg'
import svgLeftSm from '../../assets/homePageLeftSm.svg'
import svgLeftXs from '../../assets/homePageLeftXs.svg'

import svgRightXs from '../../assets/homePageRightXs.svg'
import svgRightSm from '../../assets/homePageRightSm.svg'

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
      paddingTop: '3rem'
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    },
    [theme.breakpoints.only('xl')]: {
      paddingLeft: '15rem',
      paddingRight: '15rem'
    }
  },
  first: {
    paddingTop: '3rem !important',
    backgroundImage: `url('${svgRight}'), url('${svgLeft}')`,
    backgroundPosition: 'right center, left center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('${svgRightMd}'), url('${svgLeft}')`,
      backgroundPosition: 'right center, left center'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0rem !important',
      backgroundImage: `url('${svgLeftSm}'), url('${svgRightSm}')`,
      backgroundPosition: 'left 320px, right top',
      backgroundSize: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `url('${svgLeftXs}'), url('${svgRightXs}')`,
      backgroundPosition: 'left 60vh, right top',
      backgroundSize: 'auto',
    }
  },
  last: {
    paddingBottom: '2rem'
  }
}))

export default function Index () {
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
