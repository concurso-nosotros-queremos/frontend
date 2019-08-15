import React, { Component } from 'react'
import { FastField } from 'formik'
import TextField from '@material-ui/core/TextField'
import { errorMessageBuilder, hasError } from './_utils'
import { Grid } from '@material-ui/core'

export default class ContactWrapper extends Component {
  render () {
    return (
      <>
        <Grid container spacing={2}>
          <h2>Datos de contacto</h2>
          <Grid item xs={12}>
            <FastField
              name='raw_contact.phone_number'
              render={({ field }) => (
                <TextField {...field}
                  fullWidth
                  variant='outlined'
                  label='Telefono particular'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_contact.alternative_phone_number'
              render={({ field }) => (
                <TextField {...field}
                  fullWidth
                  variant='outlined'
                  label='Telefono alternativo'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_contact.alternative_email'
              render={({ field }) => (
                <TextField {...field}
                  fullWidth
                  variant='outlined'
                  label='Telefono alternativo'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
        </Grid>
      </>
    )
  }
}
