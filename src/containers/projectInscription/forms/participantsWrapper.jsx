import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'

const participantSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  dni: Yup.string(),
  email: Yup.string().email(),
  phone_number: Yup.string(),
  grade_choices: Yup.number().integer().min(0).max(3).required(),
  divition_choices: Yup.number().integer().min(0).max(2).required()
})

export class ParticipantsWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { raw_participants: [] }
  }

  handleSubmit (values) {
    values.isChecked = false

    participantSchema.isValid(values).then((valid) => {
      if (valid) {
        this.setState((state) => {
          return { raw_participants: state.raw_participants.concat([participantSchema.cast(values)]) }
        })
      }
    })
  }

  handleUpdate (event, index) {
    let name = event.target.name
    let value = event.target.value
    this.setState((state) => {
      let rawParticipants = state.raw_participants
      rawParticipants[index][name] = value
      return { raw_participants: rawParticipants }
    })
  }

  handleDelete (index) {
    if (window.confirm(`Seguro que quiere borrar a ${this.state.raw_participants[index].first_name}?`)) {
      this.setState((state) => {
        let rawParticipants = state.raw_participants
        rawParticipants.splice(index, 1)
        return { raw_participants: rawParticipants }
      })
    }
  }

  handleCheck (index, isChecked) {
    this.setState((state) => {
      let rawParticipants = state.raw_participants
      rawParticipants[index].isChecked = isChecked
      if (!isChecked) {
        rawParticipants[index].phone_number = ''
        rawParticipants[index].email = ''
      }
      return { raw_participants: rawParticipants }
    })
  }

  render () {
    return (
      <div>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            dni: '',
            email: '',
            phone_number: '',
            grade_choices: '',
            divition_choices: ''
          }}
          validationSchema={participantSchema}
          onSubmit={(values, { resetForm }) => {
            this.handleSubmit(values)
            resetForm()
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {console.log(this.state.raw_participants)}
              <Field
                type='text'
                name='first_name'
                render={({ field }) => (
                  <TextField {...field} label='Nombre*' variant='outlined' fullWidth
                    error={errors.first_name && touched.first_name}
                    helperText={errors.first_name && touched.first_name ? errors.first_name : null} />)}
              />
              <Field
                type='text'
                name='last_name'
                render={({ field }) => (
                  <TextField {...field} label='Apellido*' variant='outlined' fullWidth
                    error={errors.last_name && touched.last_name}
                    helperText={errors.last_name && touched.last_name ? errors.last_name : null} />)}
              />
              <Field
                type='text'
                name='dni'
                render={({ field }) => (
                  <TextField {...field} label='D.N.I.' variant='outlined' fullWidth
                    error={errors.dni && touched.dni}
                    helperText={errors.dni && touched.dni ? errors.dni : null} />)}
              />
              <Field
                name='grade_choices'
                render={({ field }) => (
                  <TextField {...field} select label='Año*' variant='outlined'
                    error={errors.grade_choices && touched.grade_choices}
                    helperText={errors.grade_choices && touched.grade_choices ? errors.grade_choices : null}
                  >
                    <MenuItem value='3'>7</MenuItem>
                    <MenuItem value='2'>6</MenuItem>
                    <MenuItem value='1'>5</MenuItem>
                    <MenuItem value='0'>4</MenuItem>
                  </TextField>
                )}
              />
              <Field
                name='divition_choices'
                render={({ field }) => (
                  <TextField {...field} select label='Curso*' variant='outlined'
                    error={errors.divition_choices && touched.divition_choices}
                    helperText={errors.divition_choices && touched.divition_choices ? errors.divition_choices : null}
                  >
                    <MenuItem value='2'>"C"</MenuItem>
                    <MenuItem value='1'>"B"</MenuItem>
                    <MenuItem value='0'>"A"</MenuItem>
                  </TextField>
                )}
              />
              <Button type='submit'>Submit</Button>
            </Form>
          )}
        </Formik>
        <ol>
          {this.state.raw_participants.map((participant, index) => (
            <li key={index}>{participant.first_name}
              <Button onClick={() => { this.handleDelete(index) }}>Borrar</Button>
              <Checkbox value={this.state.raw_participants[index].isChecked} onChange={(e, isChecked) => { this.handleCheck(index, isChecked) }} />
              {this.state.raw_participants[index].isChecked
                ? <div>
                  <TextField required name='phone_number' label='Telefono' variant='outlined' onChange={(e) => { this.handleUpdate(e, index) }} />
                  <TextField required name='email' label='Email' variant='outlined' onChange={(e) => { this.handleUpdate(e, index) }} />
                </div> : null}
            </li>))
          }
        </ol>
      </div>
    )
  }
}
