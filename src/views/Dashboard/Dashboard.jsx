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
    borderRadius: theme.shape.borderRadius
  },
  inscriptosLabelType: {
    border: '1.4px solid violet',
    borderRadius: '16px',
    padding: '2px 12px'
  }
}))

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
          <Grid container item xs={12} sm={6} md={4} className={classes.root}>
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
        <Grid container direction='row' justify='flex-end' alignItems='flex-start' >
          <Grid container direction='column' item xs={12} sm={6} md={4} className={classes.root}>
            <Grid container direction="row" justify="space-between" alignItems="center" className={classes.root}>
              <Typography style={{ fontWeight: 'bold', textTransform: 'uppercase' }} color="inherit">
                Grupos inscriptos
              </Typography>
              <PeopleIconOutlined color='primary' />
            </Grid>

            <Grid container direction="row" justify="space-between" alignItems="center" className={classes.inscriptoContainer}>
              <Grid item>
                <Typography style={{ fontWeight: 'bold' }} color='inherit'>
                  IgualAR
                </Typography>
                <Typography style={{ fontSize: '12px' }}>
                  13 participantes
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ fontWeight: 'bold' }} color='inherit'>
                  Entre Rios
                </Typography>
                <Typography style={{ fontSize: '12px' }}>
                  └ Parana
                </Typography>
              </Grid>
              <Grid item>
                <div className={classes.inscriptosLabelType}>
                  <Typography style={{ color: 'violet' }}>
                    Genero
                  </Typography>
                </div>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </>

  )
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(withGroupCount(Dashboard))
