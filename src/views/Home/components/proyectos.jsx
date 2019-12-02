import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Button, Card, CardActions, CardContent, CardMedia, DialogContent } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

import cl_2018 from '../../../assets/cl_2018.jpg'
import ipem_94 from '../../../assets/ipem_94.jpg'
import concretando from '../../../assets/concretando.jpg'

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
    name: 'CL´s 2018',
    solution: 'Este es el proyecto que plantean las/os alumnas/os de la escuela N° 4093 Pte Julio Argentino Rocaen, en la ciudad de Plamira (Mendoza). Detectan la contaminación causada por residuos plásticos en la comunidad de Palmira. Y la idea es generar conciencia en los vecinos para cuidar el medio ambiente. Proyecto: Mejorar la calidad de vida de la comunidad de Palmira, reduciendo la contaminación causada por éstos residuos y a su vez colaborar de manera solidaria para que todos tengamos una mejor calidad de vida.',
    url: '/projects/1',
    image_url: cl_2018
  },
  {
    name: 'Alumnos de IPEM 94 Anexo Chajan',
    solution: 'Ellos son los alumnos del IPEM 94 Anexo Chajan, un pequeño y humilde pueblo ubicado al sur de Córdoba, al límite con San Luís. Atentos a las problematica social que existe en su localidad, la cual se relaciona con la falta de trabajo, ya que los jóvenes en su mayoría no tienen la posibilidad de continuar con estudios terciarios o universitarios terminan ocupados en el municipio con sueldos bajos acordes a las posibilidades del mismo o como peón rural bajo condiciones poco dignas de vida. Es por esto que el proyecto consiste en que los alumnos y miembros de la sociedad puedan adquirir los conocimientos y habilidades necesarias para poder llevar adelante producciones alternativas, con muy bajo costo inicial y que con la integración vertical o el agregado de valor se puede transformar la misma en una actividad sumamente rentable que le permita a los mismos comenzar con un microemprendimiento. Además de los conocimientos de producción y agregado de valor, se capacitan en la comercialización y destino final de los productos obtenidos.',
    url: '/projects/2',
    image_url: ipem_94
  },
  {
    name: 'Concretando ..¿utopías?',
    solution: 'Es un proyecto desarrollado por las/os alumnas/os del IPEA 179 "SAUL TABORDA", en la ciudad de Villa Valeria (Córdoba). Ellas y ellos plantean: En nuestra comunidad tenemos problemas de contaminación por los productos fitosanitarios: hay depósitos de agroquimicos en el centro, maquinas pulverizadoras que entran a la localidad y estacionan sin problema, hay casos de enfermedades causadas que pueden ser ocasionadas por estos descuidos. Nuestra propuesta es hacer un relevamiento de todo lo que, teniendo en cuenta la ley provincial 9164 , esta mal, realizar charlas en los distintos establecimientos educativos, informar y dejar folleteria del uso y abuso de los fitosanitarios. Documentar todo con fotos , elaborar un informe, presentarlo en el municipio y pedirles hagan lo que este a su alcance , por ejemplo, dictar una ordenanza que rija el uso de los fitosanitarios respaldando a la 9164.',
    url: '/projects/3',
    image_url: concretando
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
        <Dialog
          onClose={() => { handleClose(props.idx) }} aria-labelledby='simple-dialog-title' open={open[props.idx]} maxWidth='sm'
          classes={{ paper: classes.dialogPaper }}
        >
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

        <Grid container direction='row' justify='space-around' alignItems='center' className={classes.contenedorCards}>
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
