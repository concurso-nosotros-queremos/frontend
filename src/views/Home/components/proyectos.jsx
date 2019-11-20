import React from 'react'
import { makeStyles , useTheme } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Button, Card, CardActions, CardContent, CardMedia, DialogContent } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles(theme => ({
  barraDecorativa: {
    width: '50%',
    height: '5px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    marginTop: '.6rem'
  },
  contenedorCards: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between'
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '26rem',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
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
        height: 'auto'
      }
    }
  },
  solution: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  },
  name: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical'
  },
  dialogPaper: {
    [theme.breakpoints.only('xs')]: {
      margin: '22px'
    }
  }
}))

const data = [
  {
    name: 'IgualAR',
    solution: 'A medida que avanza el cronograma electoral, el Gobierno potencia la figura de Bullrich. Con la lucha contra el narcotráfico como principal bandera, la seguridad se transformó en uno de los ejes discursivos de la Casa Rosada. Es uno de los antídotos que utiliza el presidente Mauricio Macri para intentar morigerar los impactos de la crisis económica.',
    url: '/projects/3',
    image_url: 'https://source.unsplash.com/random/500x201'
  },
  {
    name: 'Comunidad unida',
    solution: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    url: '/projects/4',
    image_url: 'https://source.unsplash.com/random/500x200'
  },
  {
    name: 'Explosion creativa',
    solution: 'En el caso del primer tramo, la obra avanzará sobre bosques nativos de categoría 1, es decir, sobre áreas consideradas de muy alto valor de conservación y que no deben transformarse. Se trata de un ecosistema peculiar en Argentina, ya que es el único punto donde el bosque se encuentra con el mar. Hasta ahora, esa franja costera permanecía sin intervención significativa del ser humano.',
    url: '/projects/5',
    image_url: 'https://source.unsplash.com/random/501x200'
  }
]

export default function Proyectos () {
  const classes = useStyles()
  const [open, setOpen] = React.useState([false, false, false])

  const handleClickOpen = (idx) => {
    const newArray = [...open]
    newArray[idx] = true
    setOpen(newArray)
  }
  const handleClose = idx => {
    const newArray = [...open]
    newArray[idx] = false
    setOpen(newArray)
  }

  function Modal (props) {
    return (
      <>
        <Dialog onClose={() => { handleClose(props.idx) }} aria-labelledby='simple-dialog-title' open={open[props.idx]} maxWidth='lg' classes={{ paper: classes.dialogPaper }}>
          <DialogTitle id={props.idx}>{props.titulo}</DialogTitle>
          <DialogContent>
            <Typography>
              {props.detalle}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { handleClose(props.idx) }} size='small' color='secondary'>
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }

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
            <Card key={idx} className={classes.card} elevation={2}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='140'
                image={el.image_url}
              />
              <CardContent style={{ flex: '1' }}>
                <Typography gutterBottom variant='h5' className={classes.name}>
                  {el.name}
                </Typography>
                <Typography variant='body1' component='p' className={classes.solution}>
                  {el.solution}
                </Typography>
              </CardContent>

              <CardActions style={{ padding: '8px 16px' }}>
                <Grid container justify='flex-end' alignItems='center'>
                  <Grid item>
                    <Button size='small' color='secondary' onClick={() => { handleClickOpen(idx) }}>
                      Conocer más
                    </Button>
                    <Modal titulo={el.name} detalle={el.solution} idx={idx} />
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  )
}
