import React from 'react'
import { getGroupCount } from '../services/groupCount.service'
import { getParticipantCount } from '../services/participants.service'
import { getContestEnd } from '../services/contestEnd.service'
import { getGroup } from '../services/groups.service'
import Moment from 'moment'

function withDashboard (WrappedComponent, { ...props }) {
  function foo (arr) {
    var a = []; var b = []; var prev

    arr.sort()
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i])
        b.push(1)
      } else {
        b[b.length - 1]++
      }
      prev = arr[i]
    }

    return [a, b]
  }

  function inArray (element, array) {
    for (const el of array) {
      if (element === el) {
        return true
      }
    }

    return false
  }

  function countParticipants (groups) {
    var labels = []
    var count = []

    groups.forEach(group => {
      if (!inArray(group.raw_school.state_name, labels)) {
        labels.push(group.raw_school.state_name)
        count[labels.indexOf(group.raw_school.state_name)] = 0
        count[labels.indexOf(group.raw_school.state_name)] += group.raw_participant.length
      } else {
        count[labels.indexOf(group.raw_school.state_name)] += group.raw_participant.length
      }
    })

    return [labels, count]
  }
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        group: [],
        labels: [],
        data: [],
        diffusion: [],
        school: [],
        label_diffusion: [],
        label_school: [],
        label_participant: [],
        participant: []
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
        this.setState({ group: response, labels: foo(response.map(el => el.raw_school.state_name))[0], data: foo(response.map(el => el.raw_school.state_name))[1], label_diffusion: foo(response.map(el => el.raw_project.diffusion_name))[0], diffusion: foo(response.map(el => el.raw_project.diffusion_name))[1], label_school: foo(response.map(el => el.raw_school.school_types_name))[0], school: foo(response.map(el => el.raw_school.school_types_name))[1], label_participant: countParticipants(response)[0], participant: countParticipants(response)[1] })
      })
    }

    render () {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
}

export default withDashboard
