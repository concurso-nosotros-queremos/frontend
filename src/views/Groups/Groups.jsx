import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, CardContent } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import AddIcon from '@material-ui/icons/Add';

import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    border: '1px solid',
    borderColor: theme.palette.text.disabled,
  },
  button: {
    borderColor: theme.palette.text.disabled,
    width: '100%',
    [theme.breakpoints.only('xs')]: {
      height: '129px'
    },
    [theme.breakpoints.up('sm')]: {
      height: '135px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '139px'
    },
    fontSize: '14px'
  },
  root: {
    padding: '16px'
  }
}))

const data = [
  {
    nombre: 'IgualAR',
    total: '23',
    url: '/groups/1'
  },
  {
    nombre: 'Explosion creativa escolar',
    total: '41',
    url: '/groups/1'
  },
  {
    nombre: 'Comunidad unida',
    total: '8',
    url: '/groups/1'
  },
]

const Groups = props => {
  const classes = useStyles()

  return (
    <>
      {data.map((el, idx) =>
        <Grid container item xs={12} sm={6} md={4} lg={6} xl={3} key={idx} className={classes.root}>
          <Card className={classes.card} elevation={0}>
            <CardHeader
              title={
                <Typography variant="h4"
                  style={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {el.nombre}
                </Typography>}
            />

            <CardActions style={{ padding: '16px' }}>
              <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid container item xs direction="row" justify="flex-start" alignItems="center" >
                  <Typography variant="h5" style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                    {el.total}
                  </Typography>
                  <PermIdentityOutlinedIcon />
                </Grid>
                <Grid item>
                  <Button variant="text" color="primary" href={el.url}>
                    <Typography color="primary">
                      Ver mas
                      </Typography>
                    <NavigateNextIcon />
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      )}

      <Grid container item xs={12} sm={6} md={4} lg={6} xl={3} className={classes.root}>
        <Button variant="outlined" className={classes.button} color='inherit' to="/groups/add" component={Link} >
          <Grid container direction="column" justify="center" alignItems="center"
            style={{ height: '100%' }}>
            <AddIcon fontSize="large" />
            Agregar un nuevo grupo
          </Grid>
        </Button>
      </Grid>
    </>

  )
}

export default Groups
