import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ParticipantsWrapper, { participantsSchema } from './forms/participantsWrapper'

const validationSchema = Yup.object().shape({
  raw_participants: participantsSchema
})

const initialValues = {
  raw_participants: [{
    first_name: '',
    last_name: '',
    dni: '',
    grade_choices: '',
    divition_choices: ''
  }]
}

export default class InscriptionWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  render () {
    return (
      <Paper style={{ margin: '1em' }}>
        <h1>Formulario de inscripcion</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            window.alert(JSON.stringify(values, 0, 2))
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {[<ParticipantsWrapper errors={errors} touched={touched} />][this.state.index]}
              <Button type='submit'>Submit</Button>
            </Form>
          )}
        </Formik>
        <Button onClick={() => {
          this.setState((state) => {
            return { index: state.index > 0 ? state.index - 1 : state.index }
          })
        }}>Atras</Button>
        <Button onClick={() => {
          this.setState((state) => {
            return { index: state.index + 1 }
          })
        }}>Siguiente</Button>
      </Paper>
    )
  }
}
