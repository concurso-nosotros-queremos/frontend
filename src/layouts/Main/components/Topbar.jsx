import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 240px)'
    },
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
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
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
