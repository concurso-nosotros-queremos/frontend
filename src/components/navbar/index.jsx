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
    paddingLeft: "6rem", 
    paddingRight: "6rem",
    position: "relative",
    backgroundColor: "rgba(125,125,125,0)",
    boxShadow: "none",
    marginBottom: "2rem",
    [theme.breakpoints.down('sm')]: {
      marginTop: "0",
      paddingLeft: "0rem", 
      paddingRight: "0rem",
    },
    marginTop: "1rem"
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
    fontSize: "1rem",
    textTransform: "none",
    marginRight: "1rem",
    marginLeft: "1rem",
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
  inSocLogo: {
    width: "3rem",
    marginRight:"3rem"
  },
  cnq: {
    width: "auto",
    height: "5rem"
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
    <AppBar className={classes.appBar}>
      <Toolbar disableGutters>
        <Hidden smDown>
          <Grid container>
            <img src="https://sanmartinadiario.com.ar/fotos/4262_5681.jpg" className={classes.cnq} />
            <Button disableRipple className={classes.appBarButton}>Acerca</Button>
            <Button disableRipple className={classes.appBarButton}>Noticias</Button>
            <Button disableRipple className={classes.appBarButton}>Proyectos</Button>
            <Button disableRipple className={classes.appBarButton}>Contactos</Button>
          </Grid>
          <Grid item style={{ textAlign: "right" }}>
            <img src={require("./IncluSocial[NoTxt].svg")} className={classes.inSocLogo} />
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
                <Grid container style={{ height: "100%" }}>
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

  );
}
