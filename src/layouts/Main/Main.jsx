import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Grid, useMediaQuery } from '@material-ui/core'

import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    }
  }
}))

const Main = props => {
  const { children } = props

  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const shouldOpenSidebar = isDesktop ? true : openSidebar

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <Grid container direction='column' justify='flex-start' alignItems='center' className={classes.content}>
        <Grid container direction='row' justify='center' alignItems='flex-start' style={{ maxWidth: '1280px', height: '100%' }}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}

export default Main
