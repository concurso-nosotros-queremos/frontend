import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Paper from '@material-ui/core/Paper/index'
import Typography from '@material-ui/core/Typography/index'
import Link from '@material-ui/core/Link/index'
import Container from '@material-ui/core/Container/index'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import GoogleFontLoader from 'react-google-font-loader'
import Hidden from '@material-ui/core/Hidden'
import GoogleLogin from '../../containers/googleLogin/index'
import FacebookLogin from '../../containers/facebookLogin/index'
import { ReactComponent as LogoMain } from '../../static/header.svg'
import { ReactComponent as Logo1 } from '../../static/1.svg'
import { ReactComponent as Logo2 } from '../../static/2.svg'
import { ReactComponent as Logo3 } from '../../static/3.svg'
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: '1',
    padding: '1rem'
  },
  titleContainer: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '1rem',
      marginBottom: '1rem',
      paddingLeft: '5rem',
      paddingRight: '5rem'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '12rem',
      paddingRight: '12rem'
    },
  },
  pasosContainer:{
    [theme.breakpoints.down('md')]: {
      height: 'max-content'
    },
  },
  pasosItem: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      margin: '1rem'
    },
  },
  imgPasosItem: {
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '70%',
      width: '70%',
    },
    [theme.breakpoints.only('xs')]: {
      height: '50%',
      width: '50%',
    },
  },
  containerImgPasos: {
    height: '50%',
  },
  avatar: {
    color: 'black',
    backgroundColor: 'transparent',
    border: '3.5px solid',
    borderColor: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  barraDecorativa: {
    width: '50%',
    height: '5px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '5px',
    marginTop: '.6rem'
  },
}))

export default function ComoFunciona() {
  const classes = useStyles()

  return (
    <Paper elevation={5}>
      <Grid container className={classes.root} justify="center">
        <Grid container wrap="nowrap" className={classes.titleContainer} direction="column" justify="center" alignItems="center">
          <Grid item container style={{ marginBottom: '2rem' }} direction="column" justify="center" alignItems="center">
            <Grid item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant='h3' align="center" style={{fontWeight:'bold'}}>
                ¿Como funciona?
            </Typography>
              <div className={classes.barraDecorativa}>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='subtitle1' align="center">
              Nosotros Queremos es un concurso anual de emprendimientos que apunta a despertar el espíritu emprendedor de los jovenes en los ultimos años de la secundaria.
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.pasosContainer} direction="row" justify="space-around" alignItems="center">
          <Grid container item xs={12} sm={3} direction="column" justify="space-evenly" alignItems="center" className={classes.pasosItem} spacing={2}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <Typography variant="h5">1</Typography>
              </Avatar>
            </Grid>
            <Grid item container justify="center" alignItems="center" className={classes.containerImgPasos}>
              <Logo1 className={classes.imgPasosItem} />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ fontWeight: 'bold' }} align="center">Inscribite</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center">Tu profe inscribe al grupo de alumn@s</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={3} direction="column" justify="space-evenly" alignItems="center" className={classes.pasosItem} spacing={2}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <Typography variant="h5">2</Typography>
              </Avatar>
            </Grid>
            <Grid item container justify="center" alignItems="center" className={classes.containerImgPasos}>
              <Logo2 className={classes.imgPasosItem} />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ fontWeight: 'bold' }} align="center">Te validamos</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center">La fundación valida y contesta al grupo</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={3} direction="column" justify="space-evenly" alignItems="center" className={classes.pasosItem} spacing={2}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <Typography variant="h5">3</Typography>
              </Avatar>
            </Grid>
            <Grid item container justify="center" alignItems="center" className={classes.containerImgPasos}>
              <Logo3 className={classes.imgPasosItem} />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>Participa</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center">El grupo participa en el concurso por un premio!</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item style={{margin: '1rem'}}>
            <Button size='large' variant="contained" color="primary" href="#contained-buttons" className={classes.button}>
              Inscribi a tu grupo
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper >
  );
}
