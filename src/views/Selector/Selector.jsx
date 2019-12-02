import React from 'react'
import { Grid, Typography, Button, Card, CardContent } from '@material-ui/core'
import CheckGroup from '../Groups/Check'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import theme from '../../theme/inscriptions_theme'
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    height: '100%'
  },
  opt_cont: {
    flexGrow: 1
  },
  card: {
    padding: theme.spacing(2),
    border: theme.border.primary,
    [theme.breakpoints.only('xs')]: {
      width: '100%'
    }
  },
  title: {
    marginBottom: '1.5rem'
  },
  divider: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  body:{
    marginBottom: '12px'
  }
}))

const Selector = props => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row" justify="space-around" alignItems="center" className={classes.root} spacing={4}>
        <Grid item container className={classes.opt_cont} xs={12} md={5} justify='center' alignItems='center'>
          <Card className={classes.card} elevation={0}>
            <CardContent style={{ padding: '8px' }}>
              <Grid item container justify='center' alignItems='center' direction='column'>
                <Typography className={classes.title} variant='h4'>
                  Inscribir a un grupo
                </Typography>
                <Typography variant='body1' align='center' className={classes.body}>
                  Registra un nuevo grupo para empezar a participar en el concurso
                </Typography>
                <Button variant='outlined' color='primary' style={{ marginTop: '8px', fontSize: '12px' }} to='/inscription' component={Link}>
                  Inscribir un grupo nuevo
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Divider orientation="vertical" className={classes.divider} />
        <Grid item container className={classes.opt_cont} xs={12} md={5} justify='center' alignItems='center'>
          <Card className={classes.card} elevation={0}>
            <CardContent style={{ padding: '8px' }}>
              <Grid item container justify='center' alignItems='center' direction='column'>
                <Typography className={classes.title} variant='h4'>
                  Sumarse a un grupo
                </Typography>
                <Typography variant='body1' align='center' className={classes.body}>
                  Sumate a un grupo ya existente para empezar a administrarlo
                </Typography>
                <CheckGroup />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Selector
