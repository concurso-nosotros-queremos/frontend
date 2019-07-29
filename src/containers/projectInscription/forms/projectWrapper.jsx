import React, { Component } from 'react'
import { Field } from 'formik'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { errorMessageBuilder, hasError } from './utils'

export default class ProjectWrapper extends Component {
  render () {
    return (
      <div>
        <h2>Idea emprendedora</h2>
        <Field
          name='raw_project.name'
          render={({ field }) => (
            <TextField {...field} label='Nombre *'
              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
        />
        <Field
          name='raw_project.problem'
          render={({ field }) => (
            <TextField {...field} label='Problema *'
              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
        />
        <Field
          name='raw_project.solution'
          render={({ field }) => (
            <TextField {...field} label='Solucion *'
              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
        />
        <Field
          name='raw_project.diffusion'
          render={({ field }) => (
            <TextField {...field} select label='Difusion *'
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
      </div>
    )
  }
}
