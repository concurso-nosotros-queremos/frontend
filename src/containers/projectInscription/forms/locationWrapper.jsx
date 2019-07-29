import React, { Component } from 'react'
import { Field } from 'formik'
import TextField from '@material-ui/core/TextField'
import { errorMessageBuilder, hasError } from './utils'

export default class LocationWrapper extends Component {
  render () {
    return (
      <div>
        <h2>Ubicacion del grupo</h2>
        <Field
          name='group_location.street_name'
          render={({ field }) => (
            <TextField {...field} label='Calle *'
              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
        />
        <Field
          name='group_location.street_number'
          render={({ field }) => (
            <TextField {...field} label='Numero de calle *'
              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
        />
        <Field
          name='group_location.zip_code'
          render={({ field }) => (
            <TextField {...field} label='Codigo postal'
              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
        />
        <Field
          name='group_location.city'
          render={({ field }) => (
            <TextField {...field} label='Ciudad *'
              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
        />
      </div>
    )
  }
}
