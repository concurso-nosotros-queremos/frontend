import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Divider, Drawer, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import DashboardIconOutlined from '@material-ui/icons/DashboardOutlined'
import PeopleIconOutlined from '@material-ui/icons/PeopleOutlined'
import AddIconOutlined from '@material-ui/icons/AddOutlined'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

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
    margin: theme.spacing(1, 0),
    backgroundColor: '#FFFFFF24'
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  button: {
    padding: '10px 8px',
    marginBottom: theme.spacing(1),
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: 'calc(100% - 8px)',
    fontWeight: theme.typography.fontWeightMedium,
    color: '#FFFFFF',
    '& $icon': {
      color: '#FFFFFF'
    },
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '50px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '50px'
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    flexGrow: 1,
    marginTop: 'auto'
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
    },
    {
      title: 'Estadisticas',
      href: '/statistics',
      icon: <AssessmentOutlinedIcon color='inherit' />
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
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ marginTop: 'auto', width: '100%' }}>
            <Divider className={classes.divider} />
            <ListItem
              classes={{ root: classes.button }}
              dense
              button
              onClick={() => {
                window.localStorage.clear()
                window.location.href = '/'
              }}
            >
              <ListItemAvatar>
                <ExitToAppIcon />
              </ListItemAvatar>
              <ListItemText>
                Cerrar sesion
              </ListItemText>
            </ListItem>
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default Sidebar
