import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Topbar from '../Main/components/Topbar'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  content: {
    height: 'auto',
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
      <Topbar />
      {children}
    </div>
  )
}

export default Minimal
