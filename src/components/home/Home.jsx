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
  container: {
    paddingLeft: '6rem',
    paddingRight: '6rem'
  },
  logo: {
    width: '85%',
    height: '85%',
    margin: 'auto'
  },
  logo2: {
    width: '80%',
    height: '80%',
    marginLeft: '20%',
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
    fontFamily: 'Roboto Slab',
    marginTop: '5%',
    margin: 'auto',
    fontSize: '2.5rem',
    fontWeight: 'bold'
  },
  mainTxt: {
    fontFamily: 'Roboto',
    textAlign: 'left'
  },
  boxBtn: {
    textAlign: 'center',
    marginTop: '10%'
  },
  div: {
    width: '100%',
    height: '100%',
    margin: 'auto'
  },
  seccion2: {
    position: 'relative'
  },
  seccion1: {
    position: 'relative',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(12)
  },
  box: {
    fontSize: '3rem'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}))

export default function Home () {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container maxWidth='xl' className={classes.container}>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Roboto Slab'
            },
            {
              font: 'Space Mono'
            }
          ]}
        />
        {/* Medio */}
        <main>
          <div className={classes.seccion1}>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Box className={classes.box}>
                  <Box>
                    <Typography className={classes.txt2}>
                      Participa. <br />
                      Impacta. <br />
                      Gana.
                    </Typography>
                  </Box>
                  <Box className={classes.box}>
                    <Typography className={classes.mainTxt}>
                      Concurso anual de emprendimientos de alumn@s de los ultimos años de la secunadria
                    </Typography>
                  </Box>
                  <Box className={classes.boxBtn}>
                    <GoogleLogin />
                    <FacebookLogin />
                    <Typography variant='body2' color='textSecondary' align='center'>
                      {'Ya tienes cuenta? '}
                      <Link href='https://material-ui.com/'>
                        Inicia Sesion
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={9}>
                <LogoMain className={classes.logo2} />
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
                  <Logo1 className={classes.logo} />

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
                  <Logo2 className={classes.logo} />
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
                  <Logo3 className={classes.logo} />
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.txt}>
                    El grupo participa en el concurso por un premio de $15.000
                  </Typography>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden xsDown>
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
                  <Logo1 className={classes.logo} />
                </Grid>
                <Grid item xs={4}>
                  <Logo2 className={classes.logo} />
                </Grid>
                <Grid item xs={4}>
                  <Logo3 className={classes.logo} />
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
      </Container>
      {/* End footer */
      }
    </React.Fragment>
  )
}
