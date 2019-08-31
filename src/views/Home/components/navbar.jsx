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
    fontFamily: 'Roboto Slab',
    fontWeight: 500,
  },
  modalButton: {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0)'
    },
    textTransform: 'none'
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
            <img alt='Concurso Nosotros Queremos' src='https://sanmartinadiario.com.ar/fotos/4262_5681.jpg' className={classes.cnq} />
            <Grid container>
              <Button disableRipple className={classes.appBarButton} href='#comoFunciona'>Acerca</Button>
              <Button disableRipple className={classes.appBarButton} href='#proyectos'>Proyectos</Button>
              <Button disableRipple className={classes.appBarButton} href='#organizan'>Organizan</Button>
              <Button disableRipple className={classes.appBarButton} href='#contacto'>Contactos</Button>
              <Button disableRipple className={classes.appBarButton} href='#sponsors'>Sponsors</Button>
            </Grid>
            <Grid item style={{ textAlign: 'right' }}>
              <img style={{ width: '12rem' }} alt='in' src={require('../../../assets/inclusion_logo_text.svg')}/>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <IconButton disableRipple edge='start' color='default' aria-label='menu' onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
            >
              <Fade in={open}>
                <Paper className={classes.modal}>
                  <Grid container style={{ height: '100%' }}>
                    <Grid className={classes.closeIconStyle}>
                      <IconButton disableRipple color='inherit' aria-label='close' onClick={handleClose} className={classes.closeButton}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                    <Grid container direction='column' justify='center' alignItems='center'>
                      <Button disableRipple className={classes.modalButton} href='#comoFunciona' onClick={handleClose}>Acerca</Button>
                      <Button disableRipple className={classes.modalButton} href='#proyectos' onClick={handleClose}>Proyectos</Button>
                      <Button disableRipple className={classes.modalButton} href='#organizan' onClick={handleClose}>Organizan</Button>
                      <Button disableRipple className={classes.modalButton} href='#contacto' onClick={handleClose}>Contactos</Button>
                      <Button disableRipple className={classes.modalButton} href='#sponsors' onClick={handleClose}>Sponsors</Button>
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
