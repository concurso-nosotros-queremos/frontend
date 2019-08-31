import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Paper from '@material-ui/core/Paper/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '10rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5rem'
    }
  },
  mainGrid: {
    padding: '1rem'
  },
  titleContainer: {
    marginTop: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '0.5rem',
      paddingLeft: '5rem',
      paddingRight: '5rem'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '12rem',
      paddingRight: '12rem'
    },
    marginBottom: '1rem'
  },
  pasosItem: {
    paddingTop: '1rem',
    minWidth: 'min-content',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  },
  PasosTextContainer: {
    minHeight: '3.2rem'
  },
  avatar: {
    color: 'black',
    backgroundColor: 'transparent',
    border: '3.5px solid',
    borderColor: theme.palette.secondary.light,
    fontWeight: 'bold'
  },
  barraDecorativa: {
    width: '50%',
    height: '5px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '5px',
    marginTop: '.6rem'
  }
}))

export default function ComoFunciona() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper elevation={5} id='comoFunciona'>
        <Grid container className={classes.mainGrid} justify='center'>
          <Grid container wrap='nowrap' className={classes.titleContainer} direction='column' justify='center' alignItems='center'>
            <Grid item container style={{ marginBottom: '2rem' }} direction='column' justify='center' alignItems='center'>
              <Grid item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h3' align='center' style={{ fontWeight: 'bold' }}>
                  ¿Como funciona?
                </Typography>
                <div className={classes.barraDecorativa} />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' align='center'>
                Nosotros Queremos es un concurso anual de emprendimientos que apunta a despertar el espíritu emprendedor de los jovenes en los ultimos años de la secundaria.
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.pasosContainer} direction='row' justify='space-around' alignItems='center'>
            <Grid container item xs={12} sm={3} direction='column' justify='space-evenly' alignItems='center' className={classes.pasosItem}>
              <Grid item>
                <Avatar className={classes.avatar}>
                  <Typography variant='h6'>1</Typography>
                </Avatar>
              </Grid>
              <Grid item container justify='center' alignItems='center'>
                <img src={require('../../../assets/1.svg')} style={{ width: '12rem' }} alt='pasos' />
              </Grid>
              <Grid item>
                <Typography variant='h5' style={{ fontWeight: 'bold' }} align='center'>Inscribite</Typography>
              </Grid>
              <Grid item className={classes.PasosTextContainer}>
                <Typography variant='body1' align='center'>Tu profe inscribe al grupo de alumn@s</Typography>
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={3} direction='column' justify='space-evenly' alignItems='center' className={classes.pasosItem}>
              <Grid item>
                <Avatar className={classes.avatar}>
                  <Typography variant='h6'>2</Typography>
                </Avatar>
              </Grid>
              <Grid item container justify='center' alignItems='center'>
                <img src={require('../../../assets/2.svg')} style={{ width: '12rem' }} alt='pasos' />
              </Grid>
              <Grid item>
                <Typography variant='h5' style={{ fontWeight: 'bold' }} align='center'>Te validamos</Typography>
              </Grid>
              <Grid item className={classes.PasosTextContainer}>
                <Typography variant='body1' align='center'>La fundación se pone en contacto</Typography>
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={3} direction='column' justify='space-evenly' alignItems='center' className={classes.pasosItem}>
              <Grid item>
                <Avatar className={classes.avatar}>
                  <Typography variant='h6'>3</Typography>
                </Avatar>
              </Grid>
              <Grid item container justify='center' alignItems='center'>
                <img src={require('../../../assets/3.svg')} style={{ width: '12rem' }} alt='pasos' />
              </Grid>
              <Grid item>
                <Typography variant='h5' style={{ fontWeight: 'bold' }} align='center'>Participa</Typography>
              </Grid>
              <Grid item className={classes.PasosTextContainer}>
                <Typography variant='body1' align='center'>El grupo participa en el concurso por un premio!</Typography>
              </Grid>
            </Grid>

          </Grid>
          <Grid container direction='row' justify='space-around' alignItems='center'>
            <Grid item style={{ marginTop: '2rem', marginBottom: '1rem' }}>
              <Button size='large' variant='contained' color='primary' href='#root'>
                Inscribi a tu grupo
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
