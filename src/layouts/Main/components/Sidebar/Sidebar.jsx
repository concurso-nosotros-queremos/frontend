import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Divider, Drawer } from '@material-ui/core'
import DashboardIconOutlined from '@material-ui/icons/DashboardOutlined'
import PeopleIconOutlined from '@material-ui/icons/PeopleOutlined'
import AddIconOutlined from '@material-ui/icons/AddOutlined'

import SidebarNav from './components/SidebarNav'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 24,
      height: 'calc(100% - 24px)'
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 32,
      height: 'calc(100% - 32px)'
    },
    backgroundColor: '#232F34'
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: '#FFFFFF24'
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
      icon: <DashboardIconOutlined color='inherit' />
    },
    {
      title: 'Mis grupos',
      href: '/groups',
      icon: <PeopleIconOutlined color='inherit' />,
      children: [
        {
          title: 'Añadir',
          href: '/groups/add',
          icon: <AddIconOutlined color='inherit' />
        }
      ]
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
