import React, { Component } from 'react'
import { FastField } from 'formik'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { errorMessageBuilder, hasError } from './_utils'
import { Grid } from '@material-ui/core'

export default class ProjectWrapper extends Component {
  render () {
    return (
      <>
        <Grid container spacing={2}>
          <h2>Idea emprendedora</h2>
          <Grid item xs={12}>
            <FastField
              name='raw_project.name'
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant='outlined'
                  label='Nombre'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_project.problem'
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  variant='outlined'
                  label='Problema'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_project.solution'
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  variant='outlined'
                  label='Solucion'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_project.diffusion'
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  variant='outlined'
                  label='Difusion'
                  error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                  helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                >
                  <MenuItem value='4'>He participado en años anteriores</MenuItem>
                  <MenuItem value='3'>Medios de comunicacion tradicionales</MenuItem>
                  <MenuItem value='2'>Redes sociales</MenuItem>
                  <MenuItem value='1'>Afiches del concurso</MenuItem>
                  <MenuItem value='0'>Mail</MenuItem>
                </TextField>
              )}
            />
          </Grid>
        </Grid>
      </>
    )
  }
}
