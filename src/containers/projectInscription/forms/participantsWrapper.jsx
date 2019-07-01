import React, { Component } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Paper, Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import AddOutlined from '@material-ui/icons/AddOutlined'

const participantSchema = Yup.object().shape({
  raw_participants: Yup.array().of(
    Yup.object().shape({
      first_name: Yup.string().required('Nombre es un campo obligatorio'),
      last_name: Yup.string().required('Apeliido es un campo obligatorio'),
      dni: Yup.string(),
      email: Yup.string().email(),
      phone_number: Yup.string(),
      grade_choices: Yup.number('Seleccione un año correcto').typeError('Seleccione un curso correcto').required('Año es un campo obligatorio'),
      divition_choices: Yup.number().typeError('Seleccione un curso correcto').required('Curso es un campo obligatorio')
    })
  ).required().min(1)
})

export class ParticipantsWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { rawParticipants: props.rawParticipants }
  }

  getNestedObject (pathArr, nestedObj) {
    return pathArr.reduce((obj, key) =>
      (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
  }

  render () {
    return (
      <Paper>
        {console.log(this.props.rawParticipants)}
        <h1>Lista de participantes</h1>
        <p>Por favor introduzca los campos obligatorios (*):</p>
        <Formik
          initialValues={{
            raw_participants: [{
              first_name: '',
              last_name: '',
              dni: '',
              grade_choices: '',
              divition_choices: ''
            }]
          }}
          validationSchema={participantSchema}
          onSubmit={(values) => {
            window.alert(JSON.stringify(values, 0, 2))
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {console.log(errors)}
              <FieldArray
                name='raw_participants'
                render={(arrayHelpers) => (
                  <Table size='small'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Apellido</TableCell>
                        <TableCell>D.N.I.</TableCell>
                        <TableCell>Año</TableCell>
                        <TableCell>Curso</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {arrayHelpers.form.values.raw_participants.slice(0).reverse().map((participant, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Field
                              name={`raw_participants.${index}.first_name`}
                              render={({ field }) => (
                                <TextField {...field} label='Nombre *'
                                  error={this.getNestedObject(['raw_participants', index, 'first_name'], errors) && this.getNestedObject(['raw_participants', index, 'first_name'], touched)}
                                  helperText={this.getNestedObject(['raw_participants', index, 'first_name'], errors) && this.getNestedObject(['raw_participants', index, 'first_name'], touched) ? this.getNestedObject(['raw_participants', index, 'first_name'], errors) : null} />)}
                            />
                          </TableCell>
                          <TableCell>
                            <Field
                              name={`raw_participants.${index}.last_name`}
                              render={({ field }) => (
                                <TextField {...field} label='Apellido *'
                                  error={this.getNestedObject(['raw_participants', index, 'last_name'], errors) && this.getNestedObject(['raw_participants', index, 'last_name'], touched)}
                                  helperText={this.getNestedObject(['raw_participants', index, 'last_name'], errors) && this.getNestedObject(['raw_participants', index, 'last_name'], touched) ? this.getNestedObject(['raw_participants', index, 'last_name'], errors) : null} />)}
                            />
                          </TableCell>
                          <TableCell>
                            <Field
                              name={`raw_participants.${index}.dni`}
                              render={({ field }) => (
                                <TextField {...field} label='D.N.I.'
                                  error={this.getNestedObject(['raw_participants', index, 'dni'], errors) && this.getNestedObject(['raw_participants', index, 'dni'], touched)}
                                  helperText={this.getNestedObject(['raw_participants', index, 'dni'], errors) && this.getNestedObject(['raw_participants', index, 'dni'], touched) ? this.getNestedObject(['raw_participants', index, 'dni'], errors) : null} />)}
                            />
                          </TableCell>
                          <TableCell>
                            <Field
                              name={`raw_participants.${index}.grade_choices`}
                              render={({ field }) => (
                                <TextField {...field} select label='Año *'
                                  error={this.getNestedObject(['raw_participants', index, 'grade_choices'], errors) && this.getNestedObject(['raw_participants', index, 'grade_choices'], touched)}
                                  helperText={this.getNestedObject(['raw_participants', index, 'grade_choices'], errors) && this.getNestedObject(['raw_participants', index, 'grade_choices'], touched) ? this.getNestedObject(['grade_choices', index, 'first_name'], errors) : null}
                                >
                                  <MenuItem value='3'>7mo</MenuItem>
                                  <MenuItem value='2'>6to</MenuItem>
                                  <MenuItem value='1'>5to</MenuItem>
                                  <MenuItem value='0'>4to</MenuItem>
                                </TextField>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <Field
                              name={`raw_participants.${index}.divition_choices`}
                              render={({ field }) => (
                                <TextField {...field} select label='Curso *'
                                  error={this.getNestedObject(['raw_participants', index, 'divition_choices'], errors) && this.getNestedObject(['raw_participants', index, 'divition_choices'], touched)}
                                  helperText={this.getNestedObject(['raw_participants', index, 'divition_choices'], errors) && this.getNestedObject(['raw_participants', index, 'divition_choices'], touched) ? this.getNestedObject(['raw_participants', index, 'divition_choices'], errors) : null}
                                >
                                  <MenuItem value='2'>"C"</MenuItem>
                                  <MenuItem value='1'>"B"</MenuItem>
                                  <MenuItem value='0'>"A"</MenuItem>
                                </TextField>
                              )}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell>
                          {console.log(arrayHelpers)}
                          <Button onClick={() => {
                            arrayHelpers.push({
                              first_name: '',
                              last_name: '',
                              dni: '',
                              grade_choices: arrayHelpers.form.values.raw_participants[arrayHelpers.form.values.raw_participants.length - 1].grade_choices,
                              divition_choices: arrayHelpers.form.values.raw_participants[arrayHelpers.form.values.raw_participants.length - 1].divition_choices
                            })
                          }}><AddOutlined /></Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                )}
              />
              <Button type='submit'>Submit</Button>
            </Form>
          )}
        </Formik>
      </Paper>
    )
  }
}
