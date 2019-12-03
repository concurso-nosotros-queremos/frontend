import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Button } from '@material-ui/core'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import { connect } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
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
  },
  centered: {
    justifyContent: "center",
    alignItems: "center"
  },
  downloadBtn: {
    marginTop: '8px', fontSize: '12px'
  }
}))

const Statistics = props => {
  const classes = useStyles()
  const theme = useTheme()

  const handleClickExport = () => {
    window.open(
      `https://queremosbackend.tk/rest/export/contest/${props.token}`,
      '_blank'
    );
  }

  return (
    <>
      <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
        <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
          <Grid item xl={4} lg={6} sm={6} xs={12} className={classes.itemsChart}>
            <div className={classes.chart}>
              <Bar
                data={{
                  labels: props.label_participant,
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
                        '#000075', '#a9a9a9'
                      ],
                      data: props.participant
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
                      '#e6194B', '#3cb44b',
                      '#ffe119', '#4363d8',
                      '#f58231', '#911eb4'
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
                    display: !useMediaQuery(theme.breakpoints.down('sm')),
                    position: 'right'
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
                      '#e6194B', '#3cb44b',
                      '#ffe119', '#4363d8',
                      '#f58231', '#911eb4'
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
                    display: !useMediaQuery(theme.breakpoints.down('sm')),
                    position: 'right'
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item xl={4} lg={6} sm={6} xs={12} className={classes.itemsChart}>
            <div className={clsx(classes.chart, classes.centered)}>
              <Button variant='outlined' color='primary' onClick={() => handleClickExport()} type='button' className={classes.downloadBtn}>
                Exportar informe general
              </Button>
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

