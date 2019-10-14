import React from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

import { Bar } from 'react-chartjs-2'

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
                    text: 'DISTRIBUCIÓN PROVINCIAL DE LOS GRUPOS',
                    fontColor: 'rgba(35, 47, 52, 0.56)',
                    fontSize: 14,
                    display: true
                  },
                  legend: {
                    display: false
                  },
                  tooltips: {
                    enabled: false
                  },
                  animation: {
                    onProgress: function () {
                      var chartInstance = this.chart
                      var ctx = chartInstance.ctx
                      ctx.textAlign = 'center'
                      ctx.fillStyle = 'rrgba(35, 47, 52, 0.56)'
                      ctx.textBaseline = 'bottom'

                      this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i)
                        meta.data.forEach(function (bar, index) {
                          var data = dataset.data[index]
                          ctx.fillText(data, bar._model.x, bar._model.y)
                        })
                      })
                    }
                  }
                }}
              />
            </div>
          </Grid>
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
                    text: 'DISTRIBUCIÓN PROVINCIAL DE LOS GRUPOS',
                    fontColor: 'rgba(35, 47, 52, 0.56)',
                    fontSize: 14,
                    display: true
                  },
                  legend: {
                    display: false
                  },
                  tooltips: {
                    enabled: false
                  },
                  animation: {
                    onProgress: function () {
                      var chartInstance = this.chart
                      var ctx = chartInstance.ctx
                      ctx.textAlign = 'center'
                      ctx.fillStyle = 'rrgba(35, 47, 52, 0.56)'
                      ctx.textBaseline = 'bottom'

                      this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i)
                        meta.data.forEach(function (bar, index) {
                          var data = dataset.data[index]
                          ctx.fillText(data, bar._model.x, bar._model.y)
                        })
                      })
                    }
                  }
                }}
              />
            </div>
          </Grid>
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
                    text: 'DISTRIBUCIÓN PROVINCIAL DE LOS GRUPOS',
                    fontColor: 'rgba(35, 47, 52, 0.56)',
                    fontSize: 14,
                    display: true
                  },
                  legend: {
                    display: false
                  },
                  tooltips: {
                    enabled: false
                  },
                  animation: {
                    onProgress: function () {
                      var chartInstance = this.chart
                      var ctx = chartInstance.ctx
                      ctx.textAlign = 'center'
                      ctx.fillStyle = 'rrgba(35, 47, 52, 0.56)'
                      ctx.textBaseline = 'bottom'

                      this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i)
                        meta.data.forEach(function (bar, index) {
                          var data = dataset.data[index]
                          ctx.fillText(data, bar._model.x, bar._model.y)
                        })
                      })
                    }
                  }
                }}
              />
            </div>
          </Grid>
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
                    text: 'DISTRIBUCIÓN PROVINCIAL DE LOS GRUPOS',
                    fontColor: 'rgba(35, 47, 52, 0.56)',
                    fontSize: 14,
                    display: true
                  },
                  legend: {
                    display: false
                  },
                  tooltips: {
                    enabled: false
                  },
                  animation: {
                    onProgress: function () {
                      var chartInstance = this.chart
                      var ctx = chartInstance.ctx
                      ctx.textAlign = 'center'
                      ctx.fillStyle = 'rrgba(35, 47, 52, 0.56)'
                      ctx.textBaseline = 'bottom'

                      this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i)
                        meta.data.forEach(function (bar, index) {
                          var data = dataset.data[index]
                          ctx.fillText(data, bar._model.x, bar._model.y)
                        })
                      })
                    }
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
