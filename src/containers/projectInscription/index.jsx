import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ParticipantsWrapper from './forms/participantsWrapper'
import LocationWrapper from './forms/locationWrapper'
import SchoolWrapper from './forms/schoolWrapper'
import { validationSchema, initialValues } from './forms/schemas'
import fetchResource from '../../api/apiHandler'
import ProjectWrapper from './forms/projectWrapper'

export default class InscriptionWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      index: 0,
      isSubmitting: false
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
            this.setState({ isSubmitting: true })
            this.submitHandler(validationSchema.cast(values)).then((response) => { console.log(response); this.setState({ isSubmitting: false }) }).catch((error) => { setStatus({ ...error.response }) })
          }}
        >
          {({ errors, touched, status }) => (
            <Form>
              {[<ParticipantsWrapper errors={errors} status={status} touched={touched} />,
                <LocationWrapper errors={errors} status={status} touched={touched} />,
                <SchoolWrapper errors={errors} status={status} touched={touched} />,
                <ProjectWrapper errors={errors} status={status} touched={touched} />
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
        <Button disabled={this.state.index > 2} onClick={() => {
          this.setState((state) => {
            return { index: state.index + 1 }
          })
        }}>Siguiente</Button>
      </Paper>
    )
  }
}
