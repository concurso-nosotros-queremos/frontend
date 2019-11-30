import Dialog from '@material-ui/core/Dialog'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import fetchResource from '../../services/apiHandler'
import ShareIcon from '@material-ui/icons/Share'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress';



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
    this.submitToken()
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
    this.setState({ token: null })
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
      token: {

      }
    }))
    return (
      <>
        <IconButton onClick={this.handleClickOpen} aria-label="compartir" >
          <ShareIcon />
        </IconButton>

        <Dialog onClose={this.handleClose} open={this.state.open} maxWidth='sm'>
          <Grid container direction="column" justify="center" alignItems="flex-start" style={{ padding: '2rem' }}>
            <Typography variant='h6'>
              Codigo de la clase
            </Typography>
            <Grid container direction="row" justify="center" alignItems="center" style={{ padding: '1rem' }}>
              {this.state.token ?
                <Typography style={{ fontSize: '5rem' }} >
                  {this.state.token}
                </Typography>
                :
                <CircularProgress />
              }
            </Grid>

          </Grid>
        </Dialog>

      </>

    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(withRouter(Modal))