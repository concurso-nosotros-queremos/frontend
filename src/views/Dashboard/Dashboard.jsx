import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, CardContent } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PeopleIconOutlined from '@material-ui/icons/PeopleOutlined'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '16px'
  },
  card: {
    padding: '8px',
    width: '100%',
    border: theme.border.primary
  },
}))

const data = [
  {
    nombre: "Grupos inscriptos",
    total: "67",
    url: "",
  },
  {
    nombre: "Grupos inscriptos",
    total: "67",
    url: "",
  },
  {
    nombre: "Grupos inscriptos",
    total: "67",
    url: "",
  }
]

const Dashboard = props => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="column" justify="flex-start" alignItems="flex-start">
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">

          {data.map((el, idx) =>
            <Grid container item xs={12} sm={6} md={4} className={classes.root}>
              <Card className={classes.card} elevation={0}>
                <CardContent>
                  <Grid container justify="space-between" aling="center">
                    <Typography gutterBottom style={{ fontWeight: "bold", color: '#232F348F', textTransform: 'uppercase' }}>
                      {el.nombre}
                    </Typography>
                    <PeopleIconOutlined color="primary" />
                  </Grid>
                  <Typography variant="h4" style={{ fontFamily: 'Roboto' }}>
                    {el.total}
                  </Typography>
                </CardContent>

                <CardActions style={{ justifyContent: 'flex-end' }}>
                  <Button size="small" color='primary' style={{ fontWeight: 'bold', letterSpacing: '0.01rem' }}>Ver todos</Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>

  )
}

export default Dashboard