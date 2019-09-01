import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Divider, Drawer } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'

import SidebarNav from './components/SidebarNav'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      paddingTop: 64,
      height: 'calc(100% - 64px)'
    },
    backgroundColor: '#232F34'
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}))

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props

  const classes = useStyles()

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    }
  ]

  return (
    <Drawer
      anchor='left'
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  )
}

export default Sidebar
