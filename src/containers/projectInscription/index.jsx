import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { Grid, Typography } from '@material-ui/core'
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

const InscriptionWrapper = props => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    active !== forms.length - 1 && setActive(active + 1)
  }

  const handlePrevious = () => {
    active !== 0 && setActive(active - 1)
  }

  const handleSubmit = (form) => {
    return fetchResource('rest/group/', {
      method: 'POST',
      body: {
        ...form
      }
    })
  }

  const Fragment = forms[active].component

  return (
    <Grid item xs={12}>
      <Typography variant='h4'>Inscripción</Typography>
      <HorizontalLinearStepper steps={forms} active={active} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur
        onSubmit={(values, { setStatus, setSubmitting }) => {
          handleSubmit(validationSchema.cast(values)).then((response) => {
            console.log(response)
          }).catch((error) => {
            setStatus({ ...error.response })
            setSubmitting(false)
          })
        }}
      >
        {({ errors, touched, status, submitForm }) => (
          <Form>
            <Fragment errors={errors} status={status} touched={touched} />
            <Grid container direction='row' spacing={2}>
              {active !== 0 &&
              <Button type='button' onClick={handlePrevious}>
                Atras
              </Button>}
              {active === forms.length - 1
                ? <Button type='button' variant='contained' color='primary' onClick={submitForm}>
                  Enviar
                </Button>
                : <Button type='button' variant='contained' onClick={handleNext}>
                Siguiente
                </Button>}
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  )
}

export default InscriptionWrapper
