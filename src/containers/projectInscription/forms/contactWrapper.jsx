import React from 'react'
import { FastField } from 'formik'
import TextField from '@material-ui/core/TextField'
import { errorMessageBuilder, hasError } from './_utils'
import { Grid, Fade, Typography } from '@material-ui/core'

const ContactWrapper = props => {
  return (
    <Fade in mountOnEnter unmountOnExit>
      <div>
        <Typography variant='h6'>Datos de contacto</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FastField
              name='raw_contact.phone_number'
              render={({ field }) => (
                <TextField {...field}
                  fullWidth
                  variant='outlined'
                  label='Telefono particular'
                  error={hasError(props.errors, props.status, props.touched, field.name)}
                  helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)} />)}
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
                  error={hasError(props.errors, props.status, props.touched, field.name)}
                  helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)} />)}
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
                  error={hasError(props.errors, props.status, props.touched, field.name)}
                  helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)} />)}
            />
          </Grid>
        </Grid>
      </div>
    </Fade>
  )
}

export default ContactWrapper
