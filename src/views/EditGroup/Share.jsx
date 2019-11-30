import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { connect } from 'react-redux'
import withGroupCount from '../../hoc/withDashboard'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import { Grid, useMediaQuery, Button, TextField } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import fetchResource from '../../services/apiHandler'


class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: null,
      open: null
    }

    this.submitToken = this.submitToken.bind(this)
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
  }

  submitToken = () => {
    return fetchResource('rest/group_token/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      },
      body: {
        "is_active": false,
        "max_uses": 1,
        "group": `${this.props.match.params.id}`
      }
    }).then(response => {
      this.setState({ token: response['token'] })
    })
  }
  
  render() {
    const classes = makeStyles(theme => ({

      title: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: '24px'
      }
    }))
    return (
      <>

        <Button onClick={this.handleClickOpen} >
          Compartir
      </Button>
        <Dialog onClose={this.handleClose} open={this.state.open} maxWidth='sm'>
          <DialogContent>
            <Typography className={classes.title} autoCapitalize>
              {this.state.token}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.submitToken} type='button'>
              Generar Token
            </Button>
          </DialogActions>
        </Dialog>
      </>

    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(withRouter(Modal))