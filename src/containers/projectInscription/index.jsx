import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { validationSchema, initialValues } from './forms/_schemas'
import fetchResource from '../../services/apiHandler'
import ParticipantsWrapper from './forms/participantsWrapper'
import SchoolWrapper from './forms/schoolWrapper'
import ProjectWrapper from './forms/projectWrapper'
import ContactWrapper from './forms/contactWrapper'
import HorizontalLinearStepper from '../../components/horizontalLinearStepper'

const forms = [
  {
    title: 'Participantes',
    helper: '',
    component: ParticipantsWrapper
  },
  {
    title: 'Escuela',
    helper: '',
    component: SchoolWrapper
  },
  {
    title: 'Proyecto',
    helper: '',
    component: ProjectWrapper
  },
  {
    title: 'Contacto',
    helper: '',
    component: ContactWrapper
  }
]

export default class InscriptionWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: 0
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
    const Fragment = forms[this.state.active].component

    return (
      <Grid item xs={12}>
        <h1>Inscripción</h1>
        <HorizontalLinearStepper steps={forms} active={this.state.active} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur
          onSubmit={(values, { setStatus, setSubmitting }) => {
            this.submitHandler(validationSchema.cast(values)).then((response) => { console.log(response) }).catch((error) => { setStatus({ ...error.response }); setSubmitting(false) })
          }}
        >
          {({ errors, touched, status, isValid, isSubmitting }) => (
            <Form>
              <Fragment errors={errors} status={status} touched={touched} />
              <Button type='submit' disabled={!isValid || isSubmitting}>Enviar</Button>
            </Form>
          )}
        </Formik>
        <Button
          disabled={this.state.active === 0}
          onClick={() => {
            this.setState((state) => {
              return { active: state.active > 0 ? state.active - 1 : state.active }
            })
          }}
        >
          Atras
        </Button>
        <Button
          disabled={this.state.active > 2}
          onClick={() => {
            this.setState((state) => {
              return { active: state.active + 1 }
            })
          }}
        >
          Siguiente
        </Button>
      </Grid>
    )
  }
}
