import React, { Component } from 'react'
import { Field, getIn } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'

export const schoolSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es un campo obligatorio'),
  address: Yup.string().required('Direccion es un campo obligatorio'),
  principal_name: Yup.string().required('Nombre del director/a es un campo obligatorio'),
  school_types: Yup.number().integer().typeError('Introduzca un tipo de escuela valido').required('Tipo de escuela es un campo obligatorio'),
  com_preference: Yup.number().integer().typeError('Introduzca un tipo de comunicacion valido').required('Preferencia de comunicacion es un campo obligatorio')
})

export default class SchoolWrapper extends Component {
  render () {
    return (
      <div>
        <h2>Datos de la escuela</h2>
        <Field
          name='raw_school.name'
          render={({ field }) => (
            <TextField {...field} label='Nombre *'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
        <Field
          name='raw_school.address'
          render={({ field }) => (
            <TextField {...field} label='Direccion *'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
        <Field
          name='raw_school.school_types'
          render={({ field }) => (
            <TextField {...field} label='Tipo de escuela'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
        <Field
          name='raw_school.principal_name'
          render={({ field }) => (
            <TextField {...field} label='Nombre del director'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
        <Field
          name='raw_school.com_preference'
          render={({ field }) => (
            <TextField {...field} label='Preferencia de comunicacion *'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
      </div>
    )
  }
}
