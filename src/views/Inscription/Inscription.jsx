import React from 'react'
import InscriptionWrapper from '../../containers/projectInscription'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    },
  }
}))

const Inscription = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <InscriptionWrapper />
    </div>
  )
}

export default Inscription
