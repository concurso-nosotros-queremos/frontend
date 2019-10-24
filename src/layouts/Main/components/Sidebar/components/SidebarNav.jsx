import React, { forwardRef, useState } from 'react'
import { NavLink as RouterLink, withRouter } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, ListItemText, Collapse, IconButton, ListItemSecondaryAction, ListItemAvatar } from '@material-ui/core'
import { getIn } from 'formik'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

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
    color: '#FFFFFFCC'
  },
  nested: {
    paddingLeft: theme.spacing(4)
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

const CollapsibleList = props => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { page, children } = props

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem
        className={classes.item}
        classes={{ root: clsx({ [classes.button]: true, [classes.buttonActive]: props.location.pathname === page.href }) }}
        dense
        button
        component={CustomRouterLink}
        to={page.href}
        key={page.title}
      >
        <ListItemAvatar>
          {page.icon}
        </ListItemAvatar>
        <ListItemText>
          {page.title}
        </ListItemText>
        <ListItemSecondaryAction>
          {open
            ? (
              <IconButton onClick={handleClick}>
                <ExpandLess className={classes.icon} />
              </IconButton>
            )
            : (
              <IconButton onClick={handleClick}>
                <ExpandMore className={classes.icon} />
              </IconButton>
            )}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List className={classes.nested} component='div' disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  )
}

const SidebarNav = props => {
  const { className, ...rest } = props
  const classes = useStyles()

  const buildPages = (pages) => {
    return pages.map((page, idx) => (
      <>
        {getIn(page, 'children.length')
          ? (
            <CollapsibleList page={page} {...props}>
              {buildPages(page.children)}
            </CollapsibleList>
          )
          : (
            <ListItem
              className={classes.item}
              classes={{ root: clsx({ [classes.button]: true, [classes.buttonActive]: props.location.pathname === page.href }) }}
              dense
              button
              component={CustomRouterLink}
              to={page.href}
              key={idx}
            >
              <ListItemAvatar>
                {page.icon}
              </ListItemAvatar>
              <ListItemText>
                {page.title}
              </ListItemText>
            </ListItem>
          )}
      </>
    ))
  }

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {buildPages(props.pages)}
    </List>
  )
}

export default withRouter(SidebarNav)
