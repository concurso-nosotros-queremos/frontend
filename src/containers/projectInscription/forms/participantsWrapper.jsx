import React, { Component } from 'react'
import { FieldArray, Field, getIn } from 'formik'
import * as Yup from 'yup'
import { Table, TableRow, TableCell, TableHead, TableBody, TableFooter, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import AddOutlined from '@material-ui/icons/AddOutlined'

export const participantsSchema = Yup.array().of(
  Yup.object().shape({
    first_name: Yup.string().required('Nombre es un campo obligatorio'),
    last_name: Yup.string().required('Apeliido es un campo obligatorio'),
    dni: Yup.string(),
    email: Yup.string().email(),
    phone_number: Yup.string(),
    grade_choices: Yup.number('Seleccione un año correcto').typeError('Seleccione un curso correcto').required('Año es un campo obligatorio'),
    divition_choices: Yup.number().typeError('Seleccione un curso correcto').required('Curso es un campo obligatorio')
  })
).min(3, 'Debe agregar al menos 3 participantes')

export default class ParticipantsWrapper extends Component {
  render () {
    return (
      <div>
        <h2>Lista de participantes</h2>
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
                  <TableCell>Acciones</TableCell>
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
                            error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
                            helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
                      />
                    </TableCell>
                    <TableCell>
                      <Field
                        name={`raw_participants.${index}.last_name`}
                        render={({ field }) => (
                          <TextField {...field} label='Apellido *'
                            error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
                            helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
                      />
                    </TableCell>
                    <TableCell>
                      <Field
                        name={`raw_participants.${index}.dni`}
                        render={({ field }) => (
                          <TextField {...field} label='D.N.I.'
                            error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
                            helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
                      />
                    </TableCell>
                    <TableCell>
                      <Field
                        name={`raw_participants.${index}.grade_choices`}
                        render={({ field }) => (
                          <TextField {...field} select label='Año *'
                            error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
                            helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null}
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
                            error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
                            helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null}
                          >
                            <MenuItem value='2'>"C"</MenuItem>
                            <MenuItem value='1'>"B"</MenuItem>
                            <MenuItem value='0'>"A"</MenuItem>
                          </TextField>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => { arrayHelpers.remove(index) }}>Borrar</Button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan='6' align='center'>
                    <Button fullWidth variant='contained' color='primary' onClick={() => {
                      arrayHelpers.push({
                        first_name: '',
                        last_name: '',
                        dni: '',
                        grade_choices: getIn(arrayHelpers.form.values.raw_participants, `${arrayHelpers.form.values.raw_participants.length - 1}.grade_choices`),
                        divition_choices: getIn(arrayHelpers.form.values.raw_participants, `${arrayHelpers.form.values.raw_participants.length - 1}.divition_choices`)
                      })
                    }}><AddOutlined /></Button>
                  </TableCell>
                </TableRow>
              </TableBody>
              {typeof getIn(this.props.errors, 'raw_participants') === 'string' ? <TableFooter>
                <TableRow>
                  <TableCell colSpan='6'>
                    <Typography color='error'>
                      {getIn(this.props.errors, 'raw_participants')}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableFooter> : null}
            </Table>
          )}
        />
      </div>
    )
  }
}
