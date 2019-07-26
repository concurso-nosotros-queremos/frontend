import React, { Component } from 'react'
import { Field, getIn } from 'formik'
import TextField from '@material-ui/core/TextField'

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
              error={(getIn(this.props.errors, field.name) || getIn(this.props.status, field.name)) && getIn(this.props.touched, field.name)}
              helperText={(getIn(this.props.errors, field.name) || getIn(this.props.status, field.name)) ? getIn(this.props.errors, field.name) + getIn(this.props.status, field.name)[0] : null} />)}
        />
      </div>
    )
  }
}
