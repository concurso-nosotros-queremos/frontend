import React, { Component } from 'react'
import { FieldArray, Field, getIn } from 'formik'
import { Table, TableRow, TableCell, TableHead, TableBody, TableFooter, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import AddOutlined from '@material-ui/icons/AddOutlined'
import { hasError, errorMessageBuilder } from './utils'

export default class ParticipantsWrapper extends Component {
  render () {
    return (
      <div>
        <h2>Lista de participantes</h2>
        <FieldArray
          name='raw_participant'
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
                {arrayHelpers.form.values.raw_participant.slice(0).reverse().map((participant, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Field
                        name={`raw_participant.${index}.first_name`}
                        render={({ field }) => (
                          <TextField {...field} label='Nombre *'
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                      />
                    </TableCell>
                    <TableCell>
                      <Field
                        name={`raw_participant.${index}.last_name`}
                        render={({ field }) => (
                          <TextField {...field} label='Apellido *'
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                      />
                    </TableCell>
                    <TableCell>
                      <Field
                        name={`raw_participant.${index}.dni`}
                        render={({ field }) => (
                          <TextField {...field} label='D.N.I.'
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                      />
                    </TableCell>
                    <TableCell>
                      <Field
                        name={`raw_participant.${index}.grade_choices`}
                        render={({ field }) => (
                          <TextField {...field} select label='Año *'
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
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
                        name={`raw_participant.${index}.divition_choices`}
                        render={({ field }) => (
                          <TextField {...field} select label='Curso *'
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
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
                        grade_choices: getIn(arrayHelpers.form.values.raw_participant, `${arrayHelpers.form.values.raw_participant.length - 1}.grade_choices`),
                        divition_choices: getIn(arrayHelpers.form.values.raw_participant, `${arrayHelpers.form.values.raw_participant.length - 1}.divition_choices`)
                      })
                    }}><AddOutlined /></Button>
                  </TableCell>
                </TableRow>
              </TableBody>
              {typeof getIn(this.props.errors, 'raw_participant') === 'string' ? <TableFooter>
                <TableRow>
                  <TableCell colSpan='6'>
                    <Typography color='error'>
                      {getIn(this.props.errors, 'raw_participant')}
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
