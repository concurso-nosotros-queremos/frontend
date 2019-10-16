import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import { connect } from 'react-redux'

import withGroupCount from '../../hoc/withDashboard'

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid red'
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
  itemsChart: {
    padding: '16px'
  }
}))

const Statistics = props => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
        <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
          <Grid item xl={4} lg={6} sm={6} xs={12} className={classes.itemsChart}>
            <div className={classes.chart}>
              <Bar
                data={{
                  labels: props.labels,
                  datasets: [
                    {
                      hoverBackgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      backgroundColor: [
                        'rgba(255, 99, 132,0.8)',
                        'rgba(255, 159, 64,0.8)',
                        'rgba(255, 205, 86,0.8)',
                        'rgba(75, 192, 192,0.8)',
                        'rgba(54, 162, 235,0.8)',
                        'rgba(153, 102, 255,0.8)'
                      ],
                      data: props.data
                    }
                  ]
                }}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    xAxes: [{
                      barPercentage: 0.5,
                      gridLines: {
                        display: false
                      }
                    }],
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  },
                  title: {
                    text: 'ALUMNOS POR PROVINCIA',
                    fontColor: 'rgba(35, 47, 52, 0.56)',
                    fontSize: 14,
                    display: true
                  },
                  legend: {
                    display: false
                  },
                  tooltips: {
                    enabled: true
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item xl={4} lg={6} sm={6} xs={12} className={classes.itemsChart}>
            <div className={classes.chart}>
              <Doughnut
                data={{
                  labels: props.label_diffusion,
                  datasets: [{
                    data: props.diffusion,
                    borderWidth: 1,
                    backgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                    ]
                  }]
                }}
                options={{
                  maintainAspectRatio: false,
                  title: {
                    text: '¿COMO CONOCIERON EL CONCURSO?',
                    fontColor: 'rgba(35, 47, 52, 0.56)',
                    fontSize: 14,
                    display: true
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  },
                  tooltips: {
                    enabled: true
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item xl={4} lg={6} sm={6} xs={12} className={classes.itemsChart}>
            <div className={classes.chart}>
              <Pie
                data={{
                  labels: props.label_school,
                  datasets: [{
                    data: props.school,
                    borderWidth: 1,
                    backgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56',
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56',
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                    ]
                  }]
                }}
                options={{
                  maintainAspectRatio: false,
                  title: {
                    text: 'TIPOS DE ESCUELA',
                    fontColor: 'rgba(35, 47, 52, 0.56)',
                    fontSize: 14,
                    display: true
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  },
                  tooltips: {
                    enabled: true
                  }
                }}
              />
            </div>
          </Grid>

        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(withGroupCount(Statistics))
