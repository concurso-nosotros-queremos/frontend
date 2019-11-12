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
import Dialog from './components/Dialog'
import withGroupCount from '../../hoc/withDashboard'
import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import moment from 'moment'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '16px'
  },
  card: {
    padding: '8px',
    width: '100%',
    border: theme.border.primary,
    height: '126.891px'
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
  ultInscriptosBtnContainer: {
    padding: '12px',
    border: theme.border.primary,
    borderRadius: theme.shape.borderRadius,
    marginTop: '8px',
    maxHeight: '73px',
    textTransform: 'none',
    width: '100%'
  },
  inscriptosLabelcategory: {
    borderRadius: '16px',
    padding: '2px 12px',
    textAlign: 'end',
    width: 'min-content',
    float: 'right',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '90px'
  },
  grid: {
    display: 'grid',
    gridColumnGap: '16px',
    padding: '16px',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateRows: '1fr',
    width: '100%',
    justifyItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '2fr'
    }
  },
  chart: {
    position: 'relative',
    display: 'grid',
    alignSelf: 'stretch',
    minHeight: '250px',
    maxHeight: '450px',
    minWidth: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    border: theme.border.primary,
    borderRadius: theme.shape.borderRadius,
    padding: '16px'
  },
  ocultarXs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  cityName: {
    fontSize: '12px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('xs')]: {
      width: '100px'
    }
  },
  projetName: {
    fontWeight: 'bold', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '110px'
  },
}))

const Dashboard = props => {
  const classes = useStyles()
  const data = []
  for (const [index, value] of props.group.reverse().entries()) { // eslint-disable-line no-unused-vars
    if (data.length < 4) {
      data.push(value)
    }
  }

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

                {props.groupTotal ?
                  (<Typography variant='h4' style={{ fontFamily: 'Roboto' }}>
                    {props.groupTotal}
                  </Typography>) :
                  <CircularProgress style={{ width: '35px', height: '35px' }} />
                }
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size='small' className={classes.button} color='primary' to='/groups' component={Link}>Ver todos</Button>
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

                {props.participantTotal ?
                  (<Typography variant='h4' style={{ fontFamily: 'Roboto', color: 'white' }}>
                    {props.participantTotal}
                  </Typography>) :
                  <CircularProgress style={{ width: '35px', height: '35px', color: 'white' }} />
                }

              </CardContent>
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
                {props.contestEnd ?
                  (<Typography variant='h4' style={{ fontFamily: 'Roboto', color: 'white' }}>
                    {moment(props.contestEnd).format('DD/MM/YYYY')}
                  </Typography>) :
                  <CircularProgress style={{ width: '35px', height: '35px', color: 'white' }} />
                }
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size='small' className={classes.button} style={{ color: 'white' }}>Cerrar</Button>
                <Dialog estilos={clsx(classes.button, classes.containedButton)} contestEnd={moment(props.contestEnd)} />
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container direction='row' justify='flex-start' alignItems='flex-start'>

          <div className={classes.grid}>
            <div className={classes.chart}>
              <Bar
                data={{
                  labels: props.labels,
                  datasets: [
                    {
                      backgroundColor: [
                        '#e6194B', '#3cb44b',
                        '#ffe119', '#4363d8',
                        '#f58231', '#911eb4',
                        '#42d4f4', '#f032e6',
                        '#bfef45', '#fabebe',
                        '#469990', '#e6beff',
                        '#9A6324', '#fffac8',
                        '#800000', '#aaffc3',
                        '#808000', '#ffd8b1',
                        '#000075', '#a9a9a9',
                      ],
                      data: props.data
                    }
                  ]
                }}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    xAxes: [{
                      barPercentage: 0.7,
                      gridLines: {
                        display: false
                      }
                    }],
                    yAxes: [{
                      ticks: {
                        suggestedMax: 30,
                        beginAtZero: true
                      }
                    }]
                  },
                  title: {
                    text: 'GRUPOS POR PROVINCIA',
                    fontColor: 'rgba(35, 47, 52, 0.56)',
                    fontSize: 14,
                    display: true
                  },
                  legend: {
                    display: false
                  },
                }}
              />
            </div>
            <div style={{ display: 'grid', alignSelf: 'self-start', overflow: 'hidden' }}>

              <Grid container direction='row' justify='space-between' alignItems='center' style={{ padding: '16px' }}>
                <Typography style={{ fontWeight: 'bold', textTransform: 'uppercase' }} color='inherit'>
                  Ultimos inscriptos
                </Typography>
                <PeopleIconOutlined color='primary' />
              </Grid>

              <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
                {data.map((el, idx) =>
                  <Button disableRipple key={idx} className={classes.ultInscriptosBtnContainer} to={'/groups/' + (el.id)} component={Link}>
                    <Grid container direction='row' justify='space-between' alignItems='center'>
                      <Grid item xs='auto' sm={5}>
                        <Typography className={classes.projetName} color='inherit'>
                          {el.raw_project.name}
                        </Typography>
                        <Typography style={{ fontSize: '12px' }}>
                          {el.raw_participant.length} participantes
                        </Typography>
                      </Grid>
                      <Grid item xs='auto' sm={3}>
                        <Typography style={{ fontWeight: 'bold', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '110px' }} color='inherit'>
                          {el.raw_school.state_name}
                        </Typography>
                        <Typography className={classes.cityName}>
                          └ {el.raw_school.city_name}
                        </Typography>
                      </Grid>
                      <Grid item className={classes.ocultarXs} sm={4}>
                        {el.raw_project.category_name.length > 1
                          ? (
                            <div className={classes.inscriptosLabelcategory}>
                              <Typography style={{ fontSize: '12px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '90px' }}>
                                {el.raw_project.category_name[0].name}
                              </Typography>
                              <Typography style={{ fontSize: '12px' }}>
                                {'+ ' + (el.raw_project.category_name.length - 1) + ' más'}
                              </Typography>
                            </div>
                          )
                          : (
                            <div className={classes.inscriptosLabelcategory}>
                              <Typography style={{ fontSize: '12px' }}>
                                {el.raw_project.category_name[0].name}
                              </Typography>
                            </div>
                          )}
                      </Grid>
                    </Grid>
                  </Button>
                )}
              </Grid>
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
