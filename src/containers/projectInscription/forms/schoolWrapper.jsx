import React, { Component } from 'react'
import { FastField } from 'formik'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { errorMessageBuilder, hasError } from './utils'
import { Grid } from '@material-ui/core'

export default class SchoolWrapper extends Component {
  render () {
    return (
      <>
        <h2>Información de la escuela</h2>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FastField
              name='raw_school.name'
              render={({ field }) => (
                <TextField {...field}
                  fullWidth
                  variant='outlined'
                  label='Nombre *'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_school.address'
              render={({ field }) => (
                <TextField {...field}
                  fullWidth
                  variant='outlined'
                  label='Direccion *'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_school.school_types'
              render={({ field }) => (
                <TextField {...field}
                  select
                  fullWidth
                  variant='outlined'
                  label='Tipo de escuela'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                >
                  <MenuItem value='5'>Residencia</MenuItem>
                  <MenuItem value='4'>Escuela Rural</MenuItem>
                  <MenuItem value='3'>Tecnica Privada</MenuItem>
                  <MenuItem value='2'>Tecnica Publica</MenuItem>
                  <MenuItem value='1'>Privada</MenuItem>
                  <MenuItem value='0'>Publica</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_school.principal_name'
              render={({ field }) => (
                <TextField {...field}
                  fullWidth
                  variant='outlined'
                  label='Nombre del director'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_school.com_preference'
              render={({ field }) => (
                <TextField {...field}
                  select
                  fullWidth
                  variant='outlined'
                  label='Preferencia de comunicacion'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                >
                  <MenuItem value='1'>Telefonica</MenuItem>
                  <MenuItem value='0'>Email</MenuItem>
                </TextField>
              )}
            />
          </Grid>
        </Grid>
      </>
    )
  }
}
