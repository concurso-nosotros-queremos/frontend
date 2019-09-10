import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8)
  }
}))

const Groups = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link to='/groups/add'>
        Añadir grupo
      </Link>
    </div>
  )
}

export default Groups
