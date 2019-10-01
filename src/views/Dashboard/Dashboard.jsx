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

import withGroupCount from '../../hoc/withDashboard'

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
              <CardContent>
                <Grid container justify='space-between' aling='center'>
                  <Typography gutterBottom style={{ fontWeight: 'bold', color: 'rgba(35, 47, 52, 0.56)', textTransform: 'uppercase' }}>
                    Grupos inscriptos
                  </Typography>
                  <PeopleIconOutlined color='primary' />
                </Grid>
                <Typography variant='h4' style={{ fontFamily: 'Roboto' }}>
                  {props.groupTotal}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size='small' className={classes.button} color='primary'>Ver todos</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid container item xs={12} sm={6} md={4} className={classes.root}>
            <Card className={clsx(classes.card, classes.green)} elevation={0}>
              <CardContent>
                <Grid container justify='space-between' aling='center'>
                  <Typography gutterBottom style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.56)', textTransform: 'uppercase' }}>
                    Alumnos inscriptos
                  </Typography>
                  <PersonOutlinedIcon style={{ color: 'white' }} />
                </Grid>
                <Typography variant='h4' style={{ fontFamily: 'Roboto', color: 'white' }}>
                  {props.participantTotal}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size='small' className={classes.button} style={{ color: 'white' }}>Ver todos</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid container item xs={12} sm={6} md={4} className={classes.root}>
            <Card className={clsx(classes.card, classes.red)} elevation={0}>
              <CardContent>
                <Grid container justify='space-between' aling='center'>
                  <Typography gutterBottom style={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.56)', textTransform: 'uppercase' }}>
                    Cierre inscripciones
                  </Typography>
                  <AssignmentOutlinedIcon style={{ color: 'white' }} />
                </Grid>
                <Typography variant='h4' style={{ fontFamily: 'Roboto', color: 'white' }}>
                  {props.contestEnd}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end' }}>

                <Button size='small' className={classes.button} style={{ color: 'white' }}>Cerrar</Button>
                <Button size='small' variant='contained' className={clsx(classes.button, classes.containedButton)}>Extender</Button>
              </CardActions>
            </Card>
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
