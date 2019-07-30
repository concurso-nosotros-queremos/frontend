import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none",
  },
  menuShape: {
    position: "relative",
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 50% 70%, 100% 100%);",
    height: "50px",
    width: "60px",
    backgroundColor: "#0B7163",
    textAlign: "center",
  },
  loginButton: {
    borderRadius: "25px",
    color: "#4A6572",
    border: "2px solid #f9aa33",
    textTransform: "none",
  },
  appBarButton: {
    '&:hover': {
      backgroundColor: "rgba(0,255,0,0)",
    },
    margin: 0,
    padding: 0,
    height: "70px",
    position: "relative",
    paddingRight: "2rem",
    justifyContent: "start",
    textTransform: "none",
  },
  modalButton: {
    '&:hover': {
      backgroundColor: "rgba(0,255,0,0)",
    },
    textTransform: "none",
  },
  modal: {
    borderRadius: "0",
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  },
  closeIconStyle: {
    position: "absolute",
    padding: "4px"
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Hidden smDown>
            <Grid item style={{ justifyContent: "space-between" }}>
              <Button disableRipple className={classes.appBarButton}>Acerca</Button>
              <Button disableRipple className={classes.appBarButton}>Noticias</Button>
              <Button disableRipple className={classes.appBarButton}>Proyectos</Button>
              <Button disableRipple className={classes.appBarButton}>Contactos</Button>
            </Grid>
            <Grid item style={{ textAlign: "right" }}>
              <Button className={classes.loginButton} disableRipple size="small"
                variant="outlined">Iniciar Sesión</Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <IconButton disableRipple edge="start" color="default" aria-label="menu" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}>
              <Fade in={open}>
                <Paper className={classes.modal}>
                  <Grid container style={{height: "100%"}}>
                    <Grid className={classes.closeIconStyle} justify="center" alignItems="center">
                      <IconButton disableRipple color="inherit" aria-label="close" onClick={handleClose}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                    <Grid container direction="column" justify="center" alignItems="center">
                      <Button disableRipple className={classes.modalButton}>Acerca</Button>
                      <Button disableRipple className={classes.modalButton}>Noticias</Button>
                      <Button disableRipple className={classes.modalButton}>Proyectos</Button>
                      <Button disableRipple className={classes.modalButton}>Contactos</Button>
                      <Button className={classes.loginButton} disableRipple size="small"
                        variant="outlined">Iniciar Sesión</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Fade>
            </Modal>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
