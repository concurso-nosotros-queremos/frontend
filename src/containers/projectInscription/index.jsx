import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ParticipantsWrapper from './forms/participantsWrapper'
import SchoolWrapper from './forms/schoolWrapper'
import { validationSchema, initialValues } from './forms/schemas'
import fetchResource from '../../api/apiHandler'
import ProjectWrapper from './forms/projectWrapper'
import ContactWrapper from './forms/contactWrapper'

export default class InscriptionWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  submitHandler (form) {
    console.log(JSON.stringify(form, null, 2))

    return fetchResource('rest/group/', {
      method: 'POST',
      body: {
        ...form
      }
    })
  }

  render () {
    return (
      <Grid item xs={10} sm={6}>
        <h1>Inscripción</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setStatus, setSubmitting }) => {
            this.submitHandler(validationSchema.cast(values)).then((response) => { console.log(response) }).catch((error) => { setStatus({ ...error.response }); setSubmitting(false) })
          }}
        >
          {({ errors, touched, status, isValid, isSubmitting }) => (
            <Form>
              <ParticipantsWrapper errors={errors} status={status} touched={touched} />
              <SchoolWrapper errors={errors} status={status} touched={touched} />
              <ProjectWrapper errors={errors} status={status} touched={touched} />
              <ContactWrapper errors={errors} status={status} touched={touched} />
              <Button type='submit' disabled={!isValid || isSubmitting}>Enviar</Button>
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
      </Grid>
    )
  }
}
