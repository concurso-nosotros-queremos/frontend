import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ParticipantsWrapper, { participantsSchema } from './forms/participantsWrapper'
import LocationWrapper, { locationSchema } from './forms/group/locationWrapper'
import SchoolWrapper, { schoolSchema } from './forms/group/schoolWrapper'

const validationSchema = Yup.object().shape({
  raw_participants: participantsSchema,
  group_location: locationSchema,
  raw_school: schoolSchema
})

const initialValues = {
  raw_participants: [{
    first_name: '',
    last_name: '',
    dni: '',
    grade_choices: '',
    divition_choices: ''
  }],
  group_location: {
    street_name: '',
    street_number: '',
    zip_code: '',
    city: ''
  },
  raw_school: {
    name: '',
    address: '',
    principal_name: '',
    school_types: '',
    com_preference: ''
  }
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
            console.log(JSON.stringify(values, 0, 2))
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {[<ParticipantsWrapper errors={errors} touched={touched} />,
                <LocationWrapper errors={errors} touched={touched} />,
                <SchoolWrapper errors={errors} touched={touched} />
              ]}
              <Button type='submit'>Submit</Button>
            </Form>
          )}
        </Formik>
        <Button disabled={this.state.index === 0} onClick={() => {
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
