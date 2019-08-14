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
      paddingLeft: '2rem',
      paddingRight: '2rem'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '9rem',
      paddingRight: '9rem'
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
              <Typography variant='h3' align="center">
                ¿Como funciona?
            </Typography>
              <div className={classes.barraDecorativa}>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='subtitle1' align="center">
              El concurso Nosotros Queremos es un concurso anual de emprendimientos que apunta a despertar el espíritu emprendedor de los jovenes en los ultimos años de la secundaria
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.pasosContainer} direction="row" justify="space-around" alignItems="center">
        </Grid>
      </Grid>
    </Paper>
  );
}


