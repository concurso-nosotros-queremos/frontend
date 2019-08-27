import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Button, Card, CardActions, CardContent, CardMedia, Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '10rem',
    marginBottom: '10rem'
  },
  barraDecorativa: {
    width: '50%',
    height: '5px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '5px',
    marginTop: '.6rem'
  },
  card: {
    borderRadius: '10px'
  },
  contenedorCards: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between'
    }
  },
  itemCard: {
    borderRadius: '10px',
    marginBottom: '1rem',
    [theme.breakpoints.down('xl')]: {
      flexBasis: '30%'
    },
    [theme.breakpoints.down('md')]: {
      flexBasis: '30%',
      marginLeft: '0.5rem',
      marginRight: '0.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '45%',
      marginLeft: '0.3rem',
      marginRight: '0.3rem'
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%'
    }
  }
}))

export default function ComoFunciona () {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} justify='center'>
        <Grid container wrap='nowrap' direction='column' justify='center' alignItems='center' style={{ marginBottom: '3rem' }}>
          <Grid item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h3' align='center' style={{ fontWeight: 'bold' }}>
              Algunos proyectos
            </Typography>
            <div className={classes.barraDecorativa} />
          </Grid>
        </Grid>

        <Grid container direction='row' justify='space-between' alignItems='center' className={classes.contenedorCards}>
          <Grid item className={classes.itemCard}>
            <Box boxShadow={5} className={classes.itemCard}>
              <Card className={classes.card}>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={require('../../../assets/Estudiantes.jpg')}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>Animarse a más</Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>

                <CardActions>
                  <Grid container justify='flex-end' alignItems='center'>
                    <Grid item>
                      <Button size='large' color='secondary'>
                        Conocer mas
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item className={classes.itemCard}>
            <Box boxShadow={5} className={classes.itemCard}>
              <Card className={classes.card}>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={require('../../../assets/Estudiantes.jpg')}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>Animarse a más</Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container justify='flex-end' alignItems='center'>
                    <Grid item>
                      <Button size='large' color='secondary'>
                        Conocer mas
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item className={classes.itemCard}>
              <Box boxShadow={5} className={classes.itemCard}>
                <Card className={classes.card}>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='140'
                    image={require('../../../assets/Estudiantes.jpg')}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>Animarse a más</Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid container justify='flex-end' alignItems='center'>
                      <Grid item>
                        <Button size='large' color='secondary'>
                          Conocer mas
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Box>
            </Grid>

          </Hidden>
        </Grid>

        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item style={{ margin: '1rem 1rem 0rem 1rem' }}>
            <Button size='large' variant='contained' color='primary' href='#ver-proyectos'>
              Ver todos
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
