import React from 'react'
import InscriptionWrapper from '../../containers/projectInscription'
import { makeStyles } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../theme/inscriptions_theme'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '12rem',
    paddingRight: '12rem',
    display: 'flex',
    placeContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '4rem',
      paddingRight: '4rem',
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem'
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '25rem',
      paddingRight: '25rem',
    }
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
