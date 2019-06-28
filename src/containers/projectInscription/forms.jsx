import React, { Component } from 'react'
import { ParticipantsWrapper } from './forms/participantsWrapper'

export default class InscriptionWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      index: 0,
      form: {
        raw_participants: []
      }
    }

    this.formHandler = this.formHandler.bind(this)
  }

  formHandler (name, value) {
    console.log(this)
    this.setState((state) => {
      return { form: {
        ...state.form,
        [name]: value
      }}
    })
  }

  render () {
    let fragments = [
      (<ParticipantsWrapper rawParticipants={this.state.form.raw_participants} formHandler={this.formHandler} />),
      (<div>2</div>),
      (<div>3</div>)
    ]

    return (
      <div>
        {console.log(this.state)}
        {fragments[this.state.index]}
        {this.state.index !== 0 ? <button onClick={() => {
          this.setState((state) => {
            return { index: state.index - 1 }
          })
        }}>Atras</button> : null}
        {this.state.index !== fragments.length - 1 ? <button onClick={() => {
          this.setState((state) => {
            return { index: state.index + 1 }
          })
        }}>Siguiente</button> : null}
      </div>
    )
  }
}
