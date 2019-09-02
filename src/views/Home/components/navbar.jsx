import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade'
import MenuIcon from '@material-ui/icons/Menu'
import withWidth from '@material-ui/core/withWidth'
import CloseIcon from '@material-ui/icons/Close'

import { Link } from 'react-scroll'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0rem !important',
      paddingLeft: '0rem !important',
      paddingRight: '0rem !important',
      marginBottom: '0rem'
    }
  },
  appBarButton: {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0)',
      fontWeight: 'bold',
      '&::after': {
        content: '\'\'',
        width: '45px',
        height: '4px',
        position: 'absolute',
        backgroundColor: theme.palette.primary.main,
        borderRadius: 'inherit',
        marginTop: '1rem',
      }
    },
    textTransform: 'none',
    marginRight: '0.8rem',
    marginLeft: '0.8rem',
  },
  modal: {
    borderRadius: '0',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  cnq: {
    width: 'auto',
    height: '5rem'
  },
  closeButton: {
    position: 'absolute',
    [theme.breakpoints.only('xs')]: {
      margin: '.25rem'
    },
    [theme.breakpoints.only('sm')]: {
      margin: '0.5rem 0.5rem 0.5rem 0.2rem'
    }
  }
}))

function NavBar(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar className={classes.appBar} id='navbar'>
        <Toolbar disableGutters>
          <Hidden smDown>
            <img alt='Concurso Nosotros Queremos' src='https://sanmartinadiario.com.ar/fotos/4262_5681.jpg' className={classes.cnq} />
            <Grid container>
              <Button disableRipple className={classes.appBarButton}>
                <Link activeClass="active" className="test1" to="comoFunciona"
                  spy={true} smooth={true} duration={400} ignoreCancelEvents={true} offset={-20}>
                  Acerca
                  </Link>
              </Button>
              <Button disableRipple className={classes.appBarButton}>
                <Link activeClass="active" className="test1" to="proyectos"
                  spy={true} smooth={true} duration={500} ignoreCancelEvents={true} offset={-20}>
                  Proyectos
                  </Link>
              </Button>
              <Button disableRipple className={classes.appBarButton}>
                <Link activeClass="active" className="test1" to="organizan"
                  spy={true} smooth={true} duration={600} ignoreCancelEvents={true} offset={-20}>
                  Organizan
                  </Link>
              </Button>
              <Button disableRipple className={classes.appBarButton}>
                <Link activeClass="active" className="test1" to="contacto"
                  spy={true} smooth={true} duration={700} ignoreCancelEvents={true} offset={-20}>
                  Contactos
                  </Link>
              </Button>
              <Button disableRipple className={classes.appBarButton}>
                <Link activeClass="active" className="test1" to="sponsors"
                  spy={true} smooth={true} duration={800} ignoreCancelEvents={true} offset={-20}>
                  Sponsors
                  </Link>
              </Button>
            </Grid>
            <Grid item style={{ textAlign: 'right' }}>
              <img style={{ width: '12rem' }} alt='in' src={require('../../../assets/inclusion_logo_text.svg')} />
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <IconButton disableRipple edge='start' color='default' aria-label='menu' onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
              <Fade in={open}>
                <Paper className={classes.modal}>
                  <Grid container style={{ height: '100%' }}>
                    <Grid className={classes.closeIconStyle}>
                      <IconButton disableRipple color='inherit' aria-label='close' onClick={handleClose} className={classes.closeButton}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                    <Grid container direction='column' justify='center' alignItems='center'>
                      <Button disableRipple className={classes.appBarButton}>
                        <Link activeClass="active" className="test1" to="comoFunciona" onClick={handleClose} delay={50}
                          spy={true} smooth={true} duration={400} ignoreCancelEvents={true} offset={-20}>
                          Acerca
                        </Link>
                      </Button>
                      <Button disableRipple className={classes.appBarButton}>
                        <Link activeClass="active" className="test1" to="proyectos" onClick={handleClose} delay={50}
                          spy={true} smooth={true} duration={500} ignoreCancelEvents={true} offset={-20}>
                          Proyectos
                        </Link>
                      </Button>
                      <Button disableRipple className={classes.appBarButton}>
                        <Link activeClass="active" className="test1" to="organizan" onClick={handleClose} delay={50}
                          spy={true} smooth={true} duration={600} ignoreCancelEvents={true} offset={-20}>
                          Organizan
                        </Link>
                      </Button>
                      <Button disableRipple className={classes.appBarButton}>
                        <Link activeClass="active" className="test1" to="contacto" onClick={handleClose} delay={50}
                          spy={true} smooth={true} duration={700} ignoreCancelEvents={true} offset={-20}>
                          Contactos
                        </Link>
                      </Button>
                      <Button disableRipple className={classes.appBarButton}>
                        <Link activeClass="active" className="test1" to="sponsors" onClick={handleClose} delay={50}
                          spy={true} smooth={true} duration={800} ignoreCancelEvents={true} offset={-20}>
                          Sponsors
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Fade>
            </Modal>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default withWidth()(NavBar)
