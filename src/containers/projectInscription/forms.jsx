import React from 'react'
import { Formik, Form } from 'formik'
import { ParticipantsWrapper } from './forms/participantsWrapper'

export const FormContainer = () => (
  <div>
    <Formik
      initialValues={{ raw_participants: [{
        first_name: '',
        last_name: '',
        dni: '',
        email: '',
        grade_choices: '',
        divition_choices: ''
      }] }}
      onSubmit={values =>
        setTimeout(() => {
          window.alert(JSON.stringify(values, 0, 2))
        }, 500)
      }
      render={() => (
        <Form>
          <ParticipantsWrapper />
        </Form>
      )}
    />
  </div>
)

/*
{
  "id": 1,
  "first_name": "Juan Cruz",
  "last_name": "Mare",
  "dni": "43232227",
  "email": "jcmare18@gmail.com",
  "phone_number": "3517724454",
  "grade_choices": 3,
  "divition_choices": 2
}
*/
