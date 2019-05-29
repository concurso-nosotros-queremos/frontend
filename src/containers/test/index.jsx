import React, { Component } from 'react'
import { connect } from 'react-redux'

class TestComponent extends Component {
  render () {
    return (<div />)
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
