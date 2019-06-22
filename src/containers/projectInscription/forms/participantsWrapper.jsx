import React from 'react'
import { FieldArray, Field } from 'formik'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'
import MenuItem from '@material-ui/core/MenuItem'

export const ParticipantsWrapper = () => {
  return (
    <FieldArray
      name='raw_participants'
      render={(arrayHelpers) => (
        <div>
          {console.log(arrayHelpers)}
          {arrayHelpers.form.values.raw_participants.map((participant, index) => (
            <div key={index}>
              <Field
                name={`raw_participants.${index}.first_name`}
                render={({ field }) => (
                  <TextField {...field} label='Nombre' variant='outlined' fullWidth />
                )} />
              <Field
                name={`raw_participants.${index}.last_name`}
                render={({ field }) => (
                  <TextField {...field} label='Apellido' variant='outlined' fullWidth />
                )} />
              <Field
                name={`raw_participants.${index}.dni`}
                render={({ field }) => (
                  <TextField {...field} label='DNI' variant='outlined' fullWidth />
                )} />
              <Field
                name={`raw_participants.${index}.email`}
                render={({ field }) => (
                  <TextField {...field} label='Email' variant='outlined' fullWidth />
                )} />
              <Field
                name={`raw_participants.${index}.grade_choices`}
                render={({ field }) => (
                  <TextField {...field} select label='Año' variant='outlined' autoWidth>
                    <MenuItem {...field} value='3'>7</MenuItem>
                    <MenuItem {...field} value='2'>6</MenuItem>
                    <MenuItem {...field} value='1'>5</MenuItem>
                    <MenuItem {...field} value='0'>4</MenuItem>
                  </TextField>
                )} />
              <Field
                name={`raw_participants.${index}.divition_choices`}
                render={({ field }) => (
                  <TextField {...field} select label='Curso' variant='outlined' autoWidth>
                    <MenuItem {...field} value='2'>"C"</MenuItem>
                    <MenuItem {...field} value='1'>"B"</MenuItem>
                    <MenuItem {...field} value='0'>"A"</MenuItem>
                  </TextField>
                )} />
              {arrayHelpers.form.values.raw_participants && arrayHelpers.form.values.raw_participants.length > 1 ? (
                <Button onClick={() => arrayHelpers.remove(index)}>
                  <DeleteIcon />
                </Button>) : (null)}
              <Button onClick={() => {
                if (participant.first_name && participant.last_name) {
                  arrayHelpers.push({
                    first_name: '',
                    last_name: '',
                    dni: '',
                    email: ''
                  })
                } else {
                  window.alert('Por favor introduzca los campos obligatorios')
                }
              }}>
                <DoneIcon />
              </Button>
            </div>))}
          <div>
            <button type='submit'>Submit</button>
          </div>
        </div>
      )}
    />
  )
}
