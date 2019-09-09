import React, { forwardRef } from 'react'
import { NavLink as RouterLink, withRouter } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '16px 0px'
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
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
  buttonActive: {
    background: `${theme.palette.primary.main}36`
  },
  icon: {
    color: '#FFFFFFCC',
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  }
}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
))

const SidebarNav = props => {
  const { pages, className, ...rest } = props

  const classes = useStyles()

  console.log(props)
  console.log(pages)

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          {console.log(props.location.pathname === page.href)}
          <Button
            classes={{ root: clsx({ [classes.button]: true, [classes.buttonActive]: props.location.pathname === page.href }) }}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

export default withRouter(SidebarNav)
