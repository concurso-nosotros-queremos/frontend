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
import { makeStyles } from '@material-ui/styles'

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

const useStyles = makeStyles(theme => ({
  fixedActions: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(4),
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #232F3424',
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 232px)'
    },
    zIndex: 1
  }
}))

const InscriptionWrapper = props => {
  const classes = useStyles()
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
    <Grid item xs={12} style={{width: '100%'}}>
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
            <Grid className={classes.fixedActions} container direction='row' justify='flex-end' spacing={2}>
              {active !== 0 &&
              <Grid item>
                <Button type='button' onClick={handlePrevious}>
                  Atras
                </Button>
              </Grid>}
              {active === forms.length - 1
                ? <Grid item>
                  <Button type='button' variant='contained' color='primary' onClick={submitForm}>
                    Enviar
                  </Button>
                </Grid>
                : <Grid item>
                  <Button type='button' variant='contained' onClick={handleNext}>
                    Siguiente
                  </Button>
                </Grid>}
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  )
}

export default InscriptionWrapper
