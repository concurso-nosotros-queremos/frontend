import React from 'react'
import InscriptionWrapper from '../../containers/projectInscription'
import { makeStyles } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme/inscriptions_theme'

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
      <ThemeProvider theme={theme}>
        <InscriptionWrapper />
      </ThemeProvider>
    </div>
  )
}

export default Inscription
