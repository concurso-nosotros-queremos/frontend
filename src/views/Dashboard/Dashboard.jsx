import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Grid, CardContent } from '@material-ui/core'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PeopleIconOutlined from '@material-ui/icons/PeopleOutlined'
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'

import withGroupCount from '../../hoc/withGroupCount'

import { Bar } from 'react-chartjs-2'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '16px'
  },
  card: {
    padding: '8px',
    width: '100%',
    border: theme.border.primary
  },
  green: {
    backgroundColor: theme.palette.primary.main
  },
  red: {
    backgroundColor: theme.palette.error.main
  },
  button: {
    fontWeight: '500',
    letterSpacing: '0.01rem'
  },
  containedButton: {
    backgroundColor: 'white',
    color: theme.palette.error.main,
    boxShadow: 'none',
    '&:active': {
      boxShadow: 'none'
    }
  },
  inscriptoContainer: {
    padding: '16px',
    border: theme.border.primary,
    borderRadius: theme.shape.borderRadius,
    margin: '4px'
  },
  inscriptosLabelcategory: {
    borderRadius: '16px',
    padding: '2px 12px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    gridTemplateRows: '1fr',
    width: '100%',
    justifyItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '2fr',
    }
  },
  chart: {
    border: '1px solid red',
    position: 'relative',
    display: 'grid',
    alignSelf: 'stretch',
    minHeight: '250px',
    maxHeight: '450px',
    minWidth: '100%',
    maxWidth: '100%',

  },
  ocultarXs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

const data = [
  {
    nombre: 'IgualAr',
    num_participantes: '13',
    provincia: 'Entre Rios',
    city: 'Parana',
    category: 'Genero',
    color: 'red'
  },
  {
    nombre: 'Bosques nativos',
    num_participantes: '11',
    provincia: 'Cordoba',
    city: 'Capital',
    category: 'Ambiente',
    color: 'brown'
  },
  {
    nombre: 'Miel cooperativa',
    num_participantes: '37',
    provincia: 'Santa Fe',
    city: 'Capital',
    category: 'Economico',
    color: 'red'
  },
  {
    nombre: 'Animarese a más',
    num_participantes: '52',
    provincia: 'Mendoza',
    city: 'Capital',
    category: 'Social',
    color: 'green'
  }
]

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}

const Dashboard = props => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
        <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
          <Grid container item xs={12} sm={6} md={4} className={classes.root}>
            <Card className={classes.card} elevation={0}>
              <CardContent style={{ padding: '8px' }}>
                <Grid container justify='space-between' aling='center'>
                  <Typography gutterBottom style={{ fontWeight: 'bold', color: 'rgba(35, 47, 52, 0.56)', textTransform: 'uppercase' }}>
                    Grupos inscriptos
                  </Typography>
                  <PeopleIconOutlined color='primary' />
                </Grid>
                <Typography variant='h4' style={{ fontFamily: 'Roboto' }}>
                  36
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size='small' className={classes.button} color='primary'>Ver todos</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid container item xs={12} sm={6} md={4} className={classes.root}>
            <Card className={clsx(classes.card, classes.green)} elevation={0}>
              <CardContent style={{ padding: '8px' }}>
                <Grid container justify='space-between' aling='center'>
                  <Typography gutterBottom style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.56)', textTransform: 'uppercase' }}>
                    Alumnos inscriptos
                  </Typography>
                  <PersonOutlinedIcon style={{ color: 'white' }} />
                </Grid>
                <Typography variant='h4' style={{ fontFamily: 'Roboto', color: 'white' }}>
                  297
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size='small' className={classes.button} style={{ color: 'white' }}>Ver todos</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid container item xs={12} sm={12} md={4} className={classes.root}>
            <Card className={clsx(classes.card, classes.red)} elevation={0}>
              <CardContent style={{ padding: '8px' }}>
                <Grid container justify='space-between' aling='center'>
                  <Typography gutterBottom style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.56)', textTransform: 'uppercase' }}>
                    Cierre inscripciones
                  </Typography>
                  <AssignmentOutlinedIcon style={{ color: 'white' }} />
                </Grid>
                <Typography variant='h4' style={{ fontFamily: 'Roboto', color: 'white' }}>
                  30/05/2019
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end' }}>

                <Button size='small' className={classes.button} style={{ color: 'white' }}>Cerrar</Button>
                <Button size='small' variant='contained' className={clsx(classes.button, classes.containedButton)}>Extender</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container direction='row' justify='flex-start' alignItems='flex-start'>

          <div className={classes.grid}>
            <div className={clsx(classes.chart, classes.ocultarXs)}>
              <Bar
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>

            <div style={{ display: 'grid', alignSelf: 'stretch', border: '1px solid blue' }} className={classes.root}>
              <Grid container direction='row' justify='space-between' alignItems='center' className={classes.root}>
                <Typography style={{ fontWeight: 'bold', textTransform: 'uppercase' }} color='inherit'>
                  Grupos inscriptos
                </Typography>
                <PeopleIconOutlined color='primary' />
              </Grid>

              {data.map((el, idx) =>
                <Grid key={idx} container direction='row' justify='space-between' alignItems='center' className={classes.inscriptoContainer}>
                  <Grid item>
                    <Typography style={{ fontWeight: 'bold' }} color='inherit'>
                      {el.nombre}
                    </Typography>
                    <Typography style={{ fontSize: '12px' }}>
                      {el.num_participantes} participantes
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontWeight: 'bold' }} color='inherit'>
                      {el.provincia}
                    </Typography>
                    <Typography style={{ fontSize: '12px' }}>
                      └ {el.city}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.ocultarXs}>
                    <div className={classes.inscriptosLabelcategory} style={{ border: '1.4px solid ' + el.color }}>
                      <Typography style={{ color: el.color }}>
                        {el.category}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </>

  )
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(withGroupCount(Dashboard))
