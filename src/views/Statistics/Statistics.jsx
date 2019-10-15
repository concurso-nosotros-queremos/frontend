import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { Bar, Doughnut } from 'react-chartjs-2'

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
                  labels: ['a', 'b', 'c', 'd', 'e'],
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
                      data: ['2', '3', '5', '1', '2']
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
                        beginAtZero: true,
                        stepSize: 1
                      }
                    }]
                  },
                  title: {
                    text: 'DISTRIBUCIÓN PROVINCIAL DE LOS GRUPOS',
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
                  labels: [
                    'Participacion previa',
                    'Medios tradicionales',
                    'Redes sociales',
                    'Afiches del concurso',
                    'Mail'
                  ],
                  datasets: [{
                    data: [13, 37, 10, {}, 28],
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
        </Grid>
      </Grid>
    </>
  )
}

export default Statistics
