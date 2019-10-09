import React from 'react'
import { getGroupCount } from '../services/groupCount.service'
import { getParticipantCount } from '../services/participants.service'
import { getContestEnd } from '../services/contestEnd.service'
import { getGroup } from '../services/groups.service'
import { getState } from '../services/groupState.service'
import Moment from 'moment'

function withDashboard (WrappedComponent, { ...props }) {
  function foo(arr){
    var a = [], b = [], prev;
  
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
  
    return [a, b];
  }
  
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        group: [],
        labels: [],
        data: []
      }
      console.log(props.token)
    }

    componentDidMount () {
      getGroupCount(this.props.token).then(response => {
        this.setState({ groupTotal: response.total })
      })
      getParticipantCount(this.props.token).then(response => {
        this.setState({ participantTotal: response.total })
      })
      getContestEnd(this.props.token).then(response => {
        this.setState({ contestEnd: Moment(response[0].inscription_date_to).format('YYYY/MM/DD') })
      })
      getGroup(this.props.token).then(response => {
        this.setState({ group: response, labels: foo(response.map(el => el.raw_school.state_name))[0], data: foo(response.map(el => el.raw_school.state_name))[1] })
      })
    }

    render () {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
}

export default withDashboard
