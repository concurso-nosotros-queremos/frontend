import React, { Component } from 'react'
import { ParticipantsWrapper } from './forms/participantsWrapper'

export default class InscriptionWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fragments: [
        (<ParticipantsWrapper />),
        (<div>2</div>),
        (<div>3</div>)
      ],
      index: 0,
      form: {}
    }
  }

  render () {
    return (
      <div>
        {this.state.fragments[this.state.index]}
        {this.state.index !== 0 ? <button onClick={() => {
          this.setState((state) => {
            return { index: state.index - 1 }
          })
        }}>Atras</button> : null}
        {this.state.index !== this.state.fragments.length - 1 ? <button onClick={() => {
          this.setState((state) => {
            return { index: state.index + 1 }
          })
        }}>Siguiente</button> : null}
      </div>
    )
  }
}
