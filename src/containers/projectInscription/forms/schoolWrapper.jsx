import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { Grid, Fade, Typography } from '@material-ui/core'
import CityPicker from './cityPicker'
import CustomField from './customField'

const SchoolWrapper = props => {
  return (
    <Fade in mountOnEnter unmountOnExit>
      <div>
        <Typography variant='h6'>Información de la escuela</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomField
              name='raw_school.name'
              fullWidth
              variant='outlined'
              label='Nombre de la escuela'
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CustomField
              name='raw_school.street_name'
              fullWidth
              variant='outlined'
              label='Nombre de la calle'
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomField
              name='raw_school.street_number'
              fullWidth
              variant='outlined'
              label='Altura'
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomField
              name='raw_school.city'
              fullWidth
              variant='outlined'
              label='Ciudad'
              component={CityPicker}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomField
              name='raw_school.school_types'
              fullWidth
              select
              variant='outlined'
              label='Tipo de escuela'
              component={TextField}
            >
              <MenuItem value='5'>Residencia</MenuItem>
              <MenuItem value='4'>Escuela Rural</MenuItem>
              <MenuItem value='3'>Tecnica Privada</MenuItem>
              <MenuItem value='2'>Tecnica Publica</MenuItem>
              <MenuItem value='1'>Privada</MenuItem>
              <MenuItem value='0'>Publica</MenuItem>
            </CustomField>
          </Grid>
        </Grid>
      </div>
    </Fade>
  )
}

export default SchoolWrapper
