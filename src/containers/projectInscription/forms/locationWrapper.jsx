import React, { Component } from 'react'
import { FastField } from 'formik'
import TextField from '@material-ui/core/TextField'
import { errorMessageBuilder, hasError } from './utils'
import { Grid } from '@material-ui/core'

export default class LocationWrapper extends Component {
  render () {
    return (
      <>
        <h2>Ubicacion del grupo</h2>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FastField
              name='group_location.street_name'
              render={({ field }) => (
                <TextField {...field} fullWidth variant='outlined' label='Calle'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={6}>
            <FastField
              name='group_location.street_number'
              render={({ field }) => (
                <TextField {...field} fullWidth variant='outlined' label='Numero de calle'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='group_location.zip_code'
              render={({ field }) => (
                <TextField {...field} fullWidth variant='outlined' label='Codigo postal'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='group_location.city'
              render={({ field }) => (
                <TextField {...field} fullWidth variant='outlined' label='Ciudad'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
        </Grid>
      </>
    )
  }
}
