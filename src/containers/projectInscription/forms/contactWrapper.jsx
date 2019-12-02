import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Grid, Fade, Typography } from '@material-ui/core'
import CustomField from './customField'

const ContactWrapper = props => {
  return (
    <Fade in mountOnEnter unmountOnExit>
      <div>
        <Typography variant='h6'>Datos de contacto</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomField
              name='raw_contact.phone_number'
              fullWidth
              variant='outlined'
              label='Teléfono particular'
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomField
              name='raw_contact.alternative_phone_number'
              fullWidth
              variant='outlined'
              label='Teléfono alternativo'
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomField
              name='raw_contact.alternative_email'
              fullWidth
              variant='outlined'
              label='Email alternativo'
              component={TextField}
            />
          </Grid>
        </Grid>
      </div>
    </Fade>
  )
}

export default ContactWrapper
