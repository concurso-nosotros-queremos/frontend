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
        marginTop: '1rem'
      }
    },
    textTransform: 'none',
    marginRight: '0.8rem',
    marginLeft: '0.8rem'
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

function NavBar (props) {
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
            <img alt='Concurso Nosotros Queremos' src={require('../../../assets/cnq.png')} className={classes.cnq} />
            <Grid container>
              <Link
                activeClass='active' className='test1' to='comoFunciona' spy smooth duration={400} ignoreCancelEvents offset={-20}
              >
                <Button disableRipple className={classes.appBarButton}>
                  Acerca
                </Button>
              </Link>
              <Link activeClass='active' className='test1' to='proyectos' spy smooth duration={500} ignoreCancelEvents offset={-20}>
                <Button disableRipple className={classes.appBarButton}>
                  Proyectos
                </Button>
              </Link>
              <Link
                activeClass='active' className='test1' to='organizan'
                spy smooth duration={600} ignoreCancelEvents offset={-20}
              >
                <Button disableRipple className={classes.appBarButton}>
                  Organizan
                </Button>
              </Link>
              <Link
                activeClass='active' className='test1' to='contacto'
                spy smooth duration={700} ignoreCancelEvents offset={-20}
              >
                <Button disableRipple className={classes.appBarButton}>
                  Contactos
                </Button>
              </Link>
              <Link
                activeClass='active' className='test1' to='sponsors'
                spy smooth duration={800} ignoreCancelEvents offset={-20}
              >
                <Button disableRipple className={classes.appBarButton}>
                  Sponsors
                </Button>
              </Link>
            </Grid>
            <Grid item style={{ textAlign: 'right' }}>
              <a href='https://www.inclusionsocial.org/' target='_blank' rel='noopener noreferrer'>
                <img style={{ width: '12rem' }} alt='in' src={require('../../../assets/inclusion_logo_text.svg')} />
              </a>
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
                      <Link
                        activeClass='active' className='test1' to='comoFunciona' onClick={handleClose} delay={50}
                        spy smooth duration={400} ignoreCancelEvents offset={-20}
                      >
                        <Button disableRipple className={classes.appBarButton}>
                          Acerca
                        </Button>
                      </Link>
                      <Link
                        activeClass='active' className='test1' to='proyectos' onClick={handleClose} delay={50}
                        spy smooth duration={500} ignoreCancelEvents offset={-20}
                      >
                        <Button disableRipple className={classes.appBarButton}>
                          Proyectos
                        </Button>
                      </Link>
                      <Link
                        activeClass='active' className='test1' to='organizan' onClick={handleClose} delay={50}
                        spy smooth duration={600} ignoreCancelEvents offset={-20}
                      >
                        <Button disableRipple className={classes.appBarButton}>
                          Organizan
                        </Button>
                      </Link>
                      <Link
                        activeClass='active' className='test1' to='contacto' onClick={handleClose} delay={50}
                        spy smooth duration={700} ignoreCancelEvents offset={-20}
                      >
                        <Button disableRipple className={classes.appBarButton}>
                          Contactos
                        </Button>
                      </Link>
                      <Link
                        activeClass='active' className='test1' to='sponsors' onClick={handleClose} delay={50}
                        spy smooth duration={800} ignoreCancelEvents offset={-20}
                      >
                        <Button disableRipple className={classes.appBarButton}>
                          Sponsors
                        </Button>
                      </Link>
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
