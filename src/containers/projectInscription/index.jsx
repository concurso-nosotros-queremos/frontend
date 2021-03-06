import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, getIn } from 'formik'
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
import { Link } from 'react-router-dom'

const forms = [
  {
    title: 'Participantes',
    helper: '',
    component: ParticipantsWrapper,
    raw: 'raw_participant'
  },
  {
    title: 'Escuela',
    helper: '',
    component: SchoolWrapper,
    raw: 'raw_school'
  },
  {
    title: 'Proyecto',
    helper: '',
    component: ProjectWrapper,
    raw: 'raw_project'
  },
  {
    title: 'Contacto',
    helper: '',
    component: ContactWrapper,
    raw: 'raw_contact'
  }
]

const useStyles = makeStyles(theme => ({
  fixedActions: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    padding: '8px 34px',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #232F3424',
    width: '100%',
    zIndex: 1
  },
  root: {
    width: '100%',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1440px'
    }
  },
  cancelarBtn: {
    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
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
      headers: {
        Authorization: `Bearer ${props.token}`
      },
      body: {
        ...form
      }
    }).then(response => { window.location.href = '/success' })
  }

  const Fragment = forms[active]

  return (
    <Grid item xs={12} className={classes.root}>
      <div style={{ marginTop: '1rem' }}>
        <Typography variant='h4' style={{ fontWeight: 'bold' }}>Inscripción - CNQ</Typography>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur
        validateOnMount
        onSubmit={(values, { setStatus, setSubmitting }) => {
          handleSubmit(validationSchema.cast(values)).then((response) => {
          }).catch((error) => {
            setStatus({ ...error.response })
            setSubmitting(false)
          })
        }}
      >
        {({ errors, touched, status, submitForm, values }) => (
          <>
            <HorizontalLinearStepper steps={forms} active={active} errors={errors} status={status} touched={touched} />
            <Form>
              <div style={{ marginBottom: '65px' }}>
                <Fragment.component errors={errors} status={status} touched={touched} />
              </div>
              <Grid container direction='row' justify='space-between' alignItems='center' className={classes.fixedActions}>
                <Grid item>
                  <Button className={classes.cancelarBtn} to='/' component={Link}>
                    Cancelar
                  </Button>
                </Grid>

                <Grid item>
                  <Grid container direction='row' justify='flex-end'>
                    {active !== 0 && (
                      <Grid item style={{ margin: '0px 12px' }}>
                        <Button type='button' onClick={handlePrevious}>
                          Atras
                        </Button>
                      </Grid>
                    )}
                    {active === forms.length - 1
                      ? (
                        <Grid item>
                          <Button disabled={getIn(errors, Fragment.raw) !== undefined} type='button' variant='contained' color='primary' onClick={submitForm}>
                            Enviar
                          </Button>
                        </Grid>
                      )
                      : (
                        <Grid item>
                          <Button disabled={getIn(errors, Fragment.raw) !== undefined} type='button' variant='contained' color='primary' onClick={handleNext}>
                            Siguiente
                          </Button>
                        </Grid>
                      )}
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </>
        )}
      </Formik>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(InscriptionWrapper)
