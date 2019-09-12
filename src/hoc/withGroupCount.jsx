import React from 'react'
import { getGroupCount } from '../services/groups.service'
import fetchResource from '../services/apiHandler'

function withState (WrappedComponent, { ...props }) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        data: null
      }
      console.log(props.token)
    }

    componentDidMount () {
      fetchResource('rest/group_total/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      }).then(response => {
        this.setState({ total: response.total })
      })
    }

    render () {
      return <WrappedComponent total={this.state.total} {...this.props} />
    }
  }
}

export default withState
