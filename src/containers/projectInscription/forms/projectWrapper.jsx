import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { Grid, Fade, Typography } from '@material-ui/core'
import CategoryPicker from './categoryPicker'
import CustomField from './customField'

const ProjectWrapper = props => {
  return (
    <Fade in mountOnEnter unmountOnExit>
      <div>
        <Typography variant='h6'>Detalles del proyecto</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomField
              name='raw_project.name'
              fullWidth
              variant='outlined'
              label='Nombre'
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomField
              name='raw_project.problem'
              fullWidth
              multiline
              variant='outlined'
              label='Problema'
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomField
              name='raw_project.solution'
              fullWidth
              multiline
              variant='outlined'
              label='Solución'
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomField
              name='raw_project.diffusion'
              select
              fullWidth
              variant='outlined'
              label='Difusión'
              component={TextField}
            >
              <MenuItem value='4'>He participado en años anteriores</MenuItem>
              <MenuItem value='3'>Medios de comunicacion tradicionales</MenuItem>
              <MenuItem value='2'>Redes sociales</MenuItem>
              <MenuItem value='1'>Afiches del concurso</MenuItem>
              <MenuItem value='0'>Mail</MenuItem>
            </CustomField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>Categoria/s del proyecto</Typography>
            <CategoryPicker />
          </Grid>
        </Grid>
      </div>
    </Fade>
  )
}

export default ProjectWrapper
