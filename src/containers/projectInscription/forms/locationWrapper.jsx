import React, { Component } from 'react'
import { Field, getIn } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'

export const locationSchema = Yup.object().shape({
  street_name: Yup.string().required('Calle es un campo obligatorio'),
  street_number: Yup.number().integer().typeError('Introduzca un numero de calle valido').required('Numero de calle es un campo obligatorio'),
  zip_code: Yup.number().integer().typeError('Introduzca un codigo postal valido'),
  city: Yup.number().integer().typeError('Introduzca una ciudad valida').required('Ciudad es un campo obligatorio')
})

export default class LocationWrapper extends Component {
  render () {
    return (
      <div>
        <h2>Ubicacion del grupo</h2>
        <Field
          name='group_location.street_name'
          render={({ field }) => (
            <TextField {...field} label='Calle *'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
        <Field
          name='group_location.street_number'
          render={({ field }) => (
            <TextField {...field} label='Numero de calle *'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
        <Field
          name='group_location.zip_code'
          render={({ field }) => (
            <TextField {...field} label='Codigo postal'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
        <Field
          name='group_location.city'
          render={({ field }) => (
            <TextField {...field} label='Ciudad *'
              error={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name)}
              helperText={getIn(this.props.errors, field.name) && getIn(this.props.touched, field.name) ? getIn(this.props.errors, field.name) : null} />)}
        />
      </div>
    )
  }
}
