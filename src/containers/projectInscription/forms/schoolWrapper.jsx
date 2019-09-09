import React from 'react'
import { FastField } from 'formik'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { errorMessageBuilder, hasError } from './_utils'
import { Grid, Fade, Typography } from '@material-ui/core'
import CityPicker from './cityPicker'

const SchoolWrapper = props => {
  return (
    <Fade in mountOnEnter unmountOnExit>
      <div>
        <Typography variant='h6'>Información de la escuela</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FastField
              name='raw_school.name'
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant='outlined'
                  label='Nombre'
                  error={hasError(props.errors, props.status, props.touched, field.name)}
                  helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <FastField
              name='raw_school.street_name'
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant='outlined'
                  label='Nombre de la calle'
                  error={hasError(props.errors, props.status, props.touched, field.name)}
                  helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FastField
              name='raw_school.street_number'
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant='outlined'
                  label='Altura'
                  error={hasError(props.errors, props.status, props.touched, field.name)}
                  helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_school.city'
              render={({ field }) => (
                <CityPicker
                  field={field}
                  fullWidth
                  variant='outlined'
                  label='Ciudad'
                  error={hasError(props.errors, props.status, props.touched, field.name)}
                  helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)} />)}
            />
          </Grid>
          <Grid item xs={12}>
            <FastField
              name='raw_school.school_types'
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  variant='outlined'
                  label='Tipo de escuela'
                  error={hasError(props.errors, props.status, props.touched, field.name)}
                  helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)}
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
        </Grid>
      </div>
    </Fade>
  )
}

export default SchoolWrapper
