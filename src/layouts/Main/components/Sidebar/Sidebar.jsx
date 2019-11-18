import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Divider, Drawer, ListItem, ListItemAvatar, ListItemText, Grid } from '@material-ui/core'
import DashboardIconOutlined from '@material-ui/icons/DashboardOutlined'
import PeopleIconOutlined from '@material-ui/icons/PeopleOutlined'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'

import SidebarNav from './components/SidebarNav'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56,
      height: 'calc(100% - 56px)'
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
      height: 'calc(100% - 64px)'
    },
    backgroundColor: '#232F34'
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
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
  },
  cnq: {
    width: 'auto',
    height: '6.5rem',
    [theme.breakpoints.down('xs')]: {
      height: '5.5rem'
    },
    marginBottom: '1rem'
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
      title: 'Grupos',
      href: '/groups',
      icon: <PeopleIconOutlined color='inherit' />,
      children: [
        {
          title: 'Inscribir grupo',
          href: '/inscription',
          icon: <AssignmentOutlinedIcon color='inherit' />
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
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          <img alt='Concurso Nosotros Queremos' src={require('../../../../assets/cnq.png')} className={classes.cnq} />
        </Grid>
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
