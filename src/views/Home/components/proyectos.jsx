import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Button, Card, CardActions, CardContent, CardMedia, Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import LinesEllipsis from 'react-lines-ellipsis'

const useStyles = makeStyles(theme => ({
  barraDecorativa: {
    width: '50%',
    height: '5px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '5px',
    marginTop: '.6rem'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '26rem',
    height: "100%",
    borderRadius: '10px'
  },
  contenedorCards: {
    maxHeight: '40rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between'
    }
  },
  itemCard: {
    height: "100%",
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
      marginRight: '0.3rem',
      '&:last-child': {
        display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        flexBasis: '100%',
        height: "auto",
      }
    }
  }
}))

const data = [
  {
    name: 'Nombre bonito',
    solution: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrap',
    url: '/projects/3',
    image_url: 'https://source.unsplash.com/random/500x200',
  },
  {
    name: 'Nombre bonito',
    solution: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    url: '/projects/4',
    image_url: 'https://source.unsplash.com/random/500x200',
  },
  {
    name: 'Nombre bonito',
    solution: 'Lizards',
    url: '/projects/5',
    image_url: 'https://source.unsplash.com/random/500x200',
  },
]

export default function Proyectos() {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} justify='center' id='proyectos'>
        <Grid container wrap='nowrap' direction='column' justify='center' alignItems='center' style={{ marginBottom: '3rem' }}>
          <Grid item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h3' align='center'>
              Algunos proyectos
            </Typography>
            <div className={classes.barraDecorativa} />
          </Grid>
        </Grid>

        <Grid container direction='row' justify='space-between' alignItems='center' className={classes.contenedorCards}>
          {data.map((el, idx) =>
            <Box boxShadow={6} className={classes.itemCard}>
              <Card className={classes.card}>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={el.image_url}
                />
                <CardContent style={{ flex: '1' }}>
                  <Typography gutterBottom variant='h5'>
                    <LinesEllipsis
                      text={el.name}
                      maxLine='2'
                      ellipsis='...'
                      trimRight
                      basedOn='words' />
                  </Typography>
                  <Typography variant='body1' component='p'>
                    <LinesEllipsis
                      text={el.solution}
                      maxLine='4'
                      ellipsis='...'
                      trimRight
                      basedOn='words'
                    />
                  </Typography>
                </CardContent>

                <CardActions>
                  <Grid container justify='flex-end' alignItems='center'>
                    <Grid item>
                      <Button size='small' color='secondary' href={el.url}>
                        Conocer mas
                    </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Box>
          )}
        </Grid>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item style={{ marginTop: '3rem' }}>
            <Button size='large' variant='contained' color='primary' href='/ver-proyectos'>
              Ver todos
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
