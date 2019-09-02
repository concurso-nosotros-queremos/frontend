import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Hidden, IconButton, Avatar, Typography, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 240px)'
    },
    boxShadow: 'none',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #232F3424',
    flexGrow: 1
  },
  userContainer: {
    marginRight: theme.spacing(2)
  }
}))

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props

  const classes = useStyles()

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            color='primary'
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div style={{ flexGrow: 1 }} />
        <Grid container className={classes.userContainer}>
          <Grid item container xs={12} justify='flex-end'>
            <Typography variant='body1' color='textPrimary'>
              Inclusion social
            </Typography>
          </Grid>
          <Grid item container xs={12} justify='flex-end'>
            <Typography variant='body2' color='textPrimary'>
              Usuario administrador
            </Typography>
          </Grid>
        </Grid>
        <Avatar style={{ marginRight: 12 }} src='https://i.pinimg.com/originals/f1/01/42/f1014279f4408172017f0c84c26cf639.jpg' className={classes.avatar} />
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
