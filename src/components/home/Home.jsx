import React from 'react'
import {makeStyles} from '@material-ui/core/styles/index'
import CssBaseline from '@material-ui/core/CssBaseline/index'
import Toolbar from '@material-ui/core/Toolbar/index'
import Paper from '@material-ui/core/Paper/index'
import Typography from '@material-ui/core/Typography/index'
import Button from '@material-ui/core/Button/index'
import Container from '@material-ui/core/Container/index'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Grid from '@material-ui/core/Grid'
import {Box} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import GoogleFontLoader from 'react-google-font-loader'
import Hidden from '@material-ui/core/Hidden';
import {ReactComponent as LogoMain} from '../../static/header.svg'
import {ReactComponent as Logo1} from '../../static/1.svg'
import {ReactComponent as Logo2} from '../../static/2.svg'
import {ReactComponent as Logo3} from '../../static/3.svg'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    flex: 1
  },
  logo: {
    width: '100%',
    height: '100%',
    margin: 'auto'
  },
  logo2: {
    width: '95%',
    height: '95%',
    marginLeft: '5%',
    marginTop: '8%'
  },
  avatar: {
    fontFamily: 'Roboto',
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid #F9AA33',
    width: '45px',
    height: '45px',
    fontWeight: 'bold',
    margin: 'auto'
  },
  txt: {
    fontFamily: 'Space Mono',
    textAlign: 'center'
  },
  txt2: {
    fontFamily: 'Space Mono',
    textAlign: 'center',
    marginTop: '5%',
    margin: 'auto',
    fontSize: 'auto',
    fontWeight: 'bold'
  },
  toolbarTitle: {
    flex: 1
  },
  divbtn: {
    textAlign: 'center',
    marginTop: '10%'
  },
  div: {
    width: '100%',
    height: '100%',
    margin: 'auto'
  },
  seccion2: {
    position: 'relative',
  },
  seccion1: {
    position: 'relative',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(12)
  },
  box: {
    flexWrap: 'nowrap',
    fontSize: '50px'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}))

export default function Home() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth='xl'>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Roboto'
            },
            {
              font: 'Space Mono'
            }
          ]}
        />
        {/* NavBar */}
        <Toolbar className={classes.toolbar}>
          <Button size='small'>Acerca</Button>
          <Button size='small'>Proyectos</Button>
          <div
            className={classes.toolbarTitle}
          />
          <Button variant='outlined' size='small' className={classes.button}>
            <AccountCircle/>
            Ingresa
          </Button>
        </Toolbar>
        {/* Medio */}
        <main>
          <div className={classes.seccion1}>
            <Grid container spacing={4}>
              <Grid item xs={5}>
                <Box className={classes.box}>
                  <Box> <Logo2 className={classes.logo}/>
                  </Box>
                  <Box className={classes.box}>
                    <Typography component='div' className={classes.txt2}>
                      Concurso anual de emprendimientos de chicos entre 4to y 7mo año de la secundaria
                    </Typography>
                  </Box>
                  <Box className={classes.divbtn}>
                    <Button variant='outlined' size='small' className={classes.button}>Mas Informacion</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <LogoMain className={classes.logo2}/>
              </Grid>
            </Grid>
          </div>

          <Paper className={classes.seccion2}>
            <Hidden smUp>
              <Grid container spacing={4} direction={'column'} alignContent={'center'} alignItems={'center'}>
                <Grid item xs={4}>
                  <Avatar className={classes.avatar}>1</Avatar>
                </Grid>
                <Grid item xs={4}>
                  <Logo1 className={classes.logo}/>

                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.txt}>
                    Tu profe inscribe el grupo de alum@s
                  </Typography>

                </Grid>
              </Grid>

              <Grid container spacing={4} direction={'column'} alignContent={'center'} alignItems={'center'}>
                <Grid item xs={4}>
                  <Avatar className={classes.avatar}>2</Avatar>
                </Grid>
                <Grid item xs={4}>
                  <Logo2 className={classes.logo}/>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.txt}>
                    La fundacion valida y contacta al grupo
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={4} direction={'column'} alignContent={'center'} alignItems={'center'}>
                <Grid item xs={4}>
                  <Avatar className={classes.avatar}>3</Avatar>
                </Grid>
                <Grid item xs={4}>
                  <Logo3 className={classes.logo}/>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.txt}>
                    El grupo participa en el concurso por un premio de $15.000
                  </Typography>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <Avatar className={classes.avatar}>1</Avatar>
                </Grid>
                <Grid item xs={4}>
                  <Avatar className={classes.avatar}>2</Avatar>
                </Grid>
                <Grid item xs={4}>
                  <Avatar className={classes.avatar}>3</Avatar>
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <Logo1 className={classes.logo}/>
                </Grid>
                <Grid item xs={4}>
                  <Logo2 className={classes.logo}/>
                </Grid>
                <Grid item xs={4}>
                  <Logo3 className={classes.logo}/>
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <Typography className={classes.txt}>
                    Tu profe inscribe el grupo de alum@s
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.txt}>
                    La fundacion valida y contacta al grupo
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.txt}>
                    El grupo participa en el concurso por un premio de $15.000
                  </Typography>
                </Grid>
              </Grid>
            </Hidden>
          </Paper>

        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
            Something here to give the footer a purpose!
          </Typography>
        </Container>
      </footer>
      {/* End footer */
      }
    </React.Fragment>
  )
}
