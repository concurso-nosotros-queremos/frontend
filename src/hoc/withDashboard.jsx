import React from 'react'
import { getGroupCount } from '../services/groups.service'
import { getParticipantCount } from '../services/participants.service'

function withDashboard (WrappedComponent, { ...props }) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {}
      console.log(props.token)
    }

    componentDidMount () {
      getGroupCount(this.props.token).then(response => {
        this.setState({ groupTotal: response.total })
      })
      getParticipantCount(this.props.token).then(response => {
        this.setState({ participantTotal: response.total })
      })
    }

    render () {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
}

export default withDashboard
