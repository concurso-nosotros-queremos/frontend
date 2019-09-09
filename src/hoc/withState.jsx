import React from 'react'
import { getStates } from '../services/state.service'

function withState (WrappedComponent) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        states: null
      }
    }

    componentDidMount () {
      getStates().then(response => {
        this.setState({ states: response })
      })
    }

    render () {
      return <WrappedComponent states={this.state.states} {...this.props} />
    }
  }
}

export default withState
