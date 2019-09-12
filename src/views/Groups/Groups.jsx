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
import AddIcon from '@material-ui/icons/Add'

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    border: theme.border.primary
  },
  button: {
    border: theme.border.primary,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      height: '135px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '135px'
    },
    fontSize: '14px'
  },
  root: {
    padding: '16px'
  },
  title: {
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '22px'
  }
}))

const data = [
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    url: ''
  }
]

const Groups = props => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start'>

        {data.map((el, idx) =>
          <Grid container item xs={12} sm={6} md={4} lg={6} xl={3} key={idx} className={classes.root}>
            <Card className={classes.card} elevation={0}>
              <CardHeader
                title={
                  <Typography className={classes.title}>
                    {el.nombre}
                  </Typography>
                }
              />
              <CardActions style={{ padding: '16px' }}>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                  <Grid container item xs direction='row' justify='flex-start' alignItems='center'>
                    <Typography style={{ marginRight: '0.5rem', fontSize: '20px', fontWeight: '500' }}>
                      {el.total}
                    </Typography>
                    <PermIdentityOutlinedIcon htmlColor='rgba(35, 47, 52, 0.8)' />
                  </Grid>
                  <Grid item>
                    <Button variant='text' color='primary' href={el.url}>
                      <Typography color='primary'>
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
          <Button variant='outlined' className={classes.button} color='default' to='/groups/add' component={Link}>
            <Grid
              container direction='column' justify='center' alignItems='center'
              style={{ height: '100%' }}
            >
              <AddIcon fontSize='large' />
              Agregar un nuevo grupo
            </Grid>
          </Button>
        </Grid>
      </Grid>
    </>

  )
}

export default Groups
