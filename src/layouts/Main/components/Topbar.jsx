import React from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Hidden, IconButton, Avatar, Typography, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  const { className, onSidebarOpen, dispatch, sideBar = true, ...rest } = props

  const classes = useStyles()

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        {sideBar ? (
          <Hidden lgUp>
            <IconButton
              color='primary'
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        ) : null}
        <div style={{ flexGrow: 1 }} />
        <Grid container className={classes.userContainer}>
          <Grid item container xs={12} justify='flex-end'>
            {props.user.name
              ? (<Typography variant='body1' color='textPrimary' style={{ fontWeight: 600 }}>
                {props.user.name}
              </Typography>)
              : (<Skeleton variant='rect' width={100} height={12} style={{ marginBottom: '0.65em' }} />)}
          </Grid>
          <Grid item container xs={12} justify='flex-end'>
            {props.user.email
              ? (<Typography variant='body2' color='textPrimary'>
                {props.user.email}
              </Typography>)
              : (<Skeleton variant='rect' width={165} height={12} />)}
          </Grid>
        </Grid>

        {props.user.imageUrl
          ? (<Avatar style={{ marginRight: 12 }} src={props.user.imageUrl} className={classes.avatar} />)
          : (<Skeleton variant='circle' width={42.25} height={40} />)}
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state) => ({
  user: state.googleLogin.user
})

export default connect(mapStateToProps)(Topbar)
