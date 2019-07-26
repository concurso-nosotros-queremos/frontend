import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ParticipantsWrapper from './forms/participantsWrapper'
import LocationWrapper from './forms/locationWrapper'
import SchoolWrapper from './forms/schoolWrapper'
import { participantsSchema, locationSchema, schoolSchema } from './forms/schemas'
import fetchResource from '../../api/apiHandler'

const validationSchema = Yup.object().shape({
  raw_participant: participantsSchema,
  group_location: locationSchema,
  raw_school: schoolSchema
}).noUnknown()

const initialValues = {
  raw_participant: [{
    first_name: 'Francesco',
    last_name: 'Silvetti',
    dni: '42892462',
    grade_choices: '1',
    divition_choices: '1'
  }],
  group_location: {
    street_name: 'Street',
    street_number: '12',
    zip_code: '123',
    city: '1'
  },
  raw_school: {
    name: 'Villada',
    address: 'Km 7',
    principal_name: 'Carlos',
    school_types: '1',
    com_preference: '1'
  }
}

export default class InscriptionWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  submitHandler (form) {
    return fetchResource('rest/group/', {
      method: 'POST',
      body: {
        ...form
      }
    })
  }

  render () {
    return (
      <Paper style={{ margin: '1em' }}>
        <h1>Formulario de inscripcion</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setStatus }) => {
            this.submitHandler(validationSchema.cast(values)).then((response) => { console.log(response) }).catch((error) => { setStatus({ ...error.response }) })
          }}
        >
          {({ errors, touched, status }) => (
            <Form>
              {[<ParticipantsWrapper errors={errors} status={status} touched={touched} />,
                <LocationWrapper errors={errors} status={status} touched={touched} />,
                <SchoolWrapper errors={errors} status={status} touched={touched} />
              ][this.state.index]}
              <Button type='submit'>Submit</Button>
              {console.log(status)}
            </Form>
          )}
        </Formik>
        <Button disabled={this.state.index === 0} onClick={() => {
          this.setState((state) => {
            return { index: state.index > 0 ? state.index - 1 : state.index }
          })
        }}>Atras</Button>
        <Button disabled={this.state.index > 1} onClick={() => {
          this.setState((state) => {
            return { index: state.index + 1 }
          })
        }}>Siguiente</Button>
      </Paper>
    )
  }
}
