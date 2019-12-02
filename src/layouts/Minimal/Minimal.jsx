import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Topbar from '../Main/components/Topbar'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 64,
    height: 'calc(100vh - 64px)',
    [theme.breakpoints.only('xs')]: {
      paddingTop: 56,
      height: '100%'
    }
  },
  content: {
    height: '100%',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    }
  }
}))

const Minimal = props => {
  const { children } = props

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Topbar sideBar={false} />
      <Grid container direction='column' justify='flex-start' alignItems='center' className={classes.content}>
        <Grid container direction='row' justify='center' alignItems='flex-start' style={{ maxWidth: '1280px', height: '100%' }}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}

export default Minimal
