import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'
import { Paper, Table, TableRow, TableCell, TableHead } from '@material-ui/core'

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
    this.state = { rawParticipants: props.rawParticipants }
  }

  handleSubmit (values) {
    values.isChecked = false

    participantSchema.isValid(values).then((valid) => {
      if (valid) {
        this.setState((state) => {
          let newState = state.rawParticipants.concat([participantSchema.cast(values)])
          this.props.formHandler('raw_participants', newState)
          return { rawParticipants: newState }
        })
      }
    })
  }

  handleUpdate (event, index) {
    let name = event.target.name
    let value = event.target.value
    this.setState((state) => {
      let rawParticipants = state.rawParticipants
      rawParticipants[index][name] = value
      return { rawParticipants: rawParticipants }
    })
  }

  handleDelete (index) {
    if (window.confirm(`Seguro que quiere borrar a ${this.state.rawParticipants[index].first_name}?`)) {
      this.setState((state) => {
        let rawParticipants = state.rawParticipants
        rawParticipants.splice(index, 1)
        return { rawParticipants: rawParticipants }
      })
    }
  }

  handleCheck (index, isChecked) {
    this.setState((state) => {
      let rawParticipants = state.rawParticipants
      rawParticipants[index].isChecked = isChecked
      if (!isChecked) {
        rawParticipants[index].phone_number = ''
        rawParticipants[index].email = ''
      }
      return { rawParticipants: rawParticipants }
    })
  }

  render () {
    return (
      <Paper>
        {console.log(this.props.rawParticipants)}
        <h1>Lista de participantes</h1>
        <p>Por favor introduzca los campos obligatorios (*):</p>
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
            resetForm({
              first_name: '',
              last_name: '',
              dni: '',
              email: '',
              phone_number: '',
              grade_choices: values.grade_choices,
              divition_choices: values.divition_choices
            })
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                type='text'
                name='first_name'
                render={({ field }) => (
                  <TextField {...field} label='Nombre *' variant='outlined'
                    error={errors.first_name && touched.first_name}
                    helperText={errors.first_name && touched.first_name ? errors.first_name : null} />)}
              />
              <Field
                type='text'
                name='last_name'
                render={({ field }) => (
                  <TextField {...field} label='Apellido *' variant='outlined'
                    error={errors.last_name && touched.last_name}
                    helperText={errors.last_name && touched.last_name ? errors.last_name : null} />)}
              />
              <Field
                type='text'
                name='dni'
                render={({ field }) => (
                  <TextField {...field} label='D.N.I.' variant='outlined'
                    error={errors.dni && touched.dni}
                    helperText={errors.dni && touched.dni ? errors.dni : null} />)}
              />
              <Field
                name='grade_choices'
                render={({ field }) => (
                  <TextField {...field} select label='Año *' variant='outlined'
                    error={errors.grade_choices && touched.grade_choices}
                    helperText={errors.grade_choices && touched.grade_choices ? errors.grade_choices : null}
                  >
                    <MenuItem value='3'>7mo</MenuItem>
                    <MenuItem value='2'>6to</MenuItem>
                    <MenuItem value='1'>5to</MenuItem>
                    <MenuItem value='0'>4to</MenuItem>
                  </TextField>
                )}
              />
              <Field
                name='divition_choices'
                render={({ field }) => (
                  <TextField {...field} select label='Curso *' variant='outlined'
                    error={errors.divition_choices && touched.divition_choices}
                    helperText={errors.divition_choices && touched.divition_choices ? errors.divition_choices : null}
                  >
                    <MenuItem value='2'>"C"</MenuItem>
                    <MenuItem value='1'>"B"</MenuItem>
                    <MenuItem value='0'>"A"</MenuItem>
                  </TextField>
                )}
              />
              <Button type='submit'>Añadir</Button>
            </Form>
          )}
        </Formik>
        {this.state.rawParticipants.length > 0
          ? <Table size='small'>
            <TableHead>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>D.N.I.:</TableCell>
              <TableCell>Año</TableCell>
              <TableCell>Curso</TableCell>
              <TableCell>¿Contacto?</TableCell>
              <TableCell>Campos opcionales</TableCell>
              <TableCell>Acciones</TableCell>
            </TableHead>
            {this.state.rawParticipants.slice(0).reverse().map((participant, index) => (
              <TableRow key={index}>
                <TableCell>{participant.first_name}</TableCell>
                <TableCell>{participant.last_name}</TableCell>
                <TableCell>{participant.dni}</TableCell>
                <TableCell>{participant.grade_choices}</TableCell>
                <TableCell>{participant.divition_choices}</TableCell>
                <TableCell>
                  <Checkbox value={this.state.rawParticipants[index].isChecked} onChange={(e, isChecked) => { this.handleCheck(index, isChecked) }} />
                </TableCell>
                <TableCell>
                  {this.state.rawParticipants[index].isChecked
                    ? <div>
                      <TextField name='phone_number' label='Telefono' onChange={(e) => { this.handleUpdate(e, index) }} />
                      <TextField name='email' label='Email' onChange={(e) => { this.handleUpdate(e, index) }} />
                    </div>
                    : <div>
                      <TextField disabled label='Telefono' />
                      <TextField disabled label='Email' />
                    </div>
                  }
                </TableCell>
                <TableCell>
                  <Button onClick={() => { this.handleDelete(index) }}>Borrar</Button>
                </TableCell>
              </TableRow>))
            }
          </Table> : null}
      </Paper>
    )
  }
}
