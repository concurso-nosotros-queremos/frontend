import React, { useState } from 'react'
import { MenuItem, TextField, Grid, CircularProgress } from '@material-ui/core'
import withState from '../../../hoc/withState'
import { FastField, useFormikContext } from 'formik'

const CityPicker = props => {
  const context = useFormikContext()
  console.log(context)

  const buildCities = () => {
    const state = context.values.raw_school.state

    if (state) {
      const city = props.states.find(el => el.id === state).city
      if (city) {
        return city.map(el => <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>)
      }
    }

    return []
  }

  const buildStates = () => {
    return props.states.map(el => <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>)
  }

  return (
    <Grid container spacing={2}>
      {props.states
        ? (
          <>
            <Grid item xs={12} sm={6}>
              <FastField name='raw_school.state'>
                {field =>
                  <TextField
                    {...props}
                    {...field.field}
                    label='Provincia'
                    error={false}
                    helperText={null}
                    select

                  >
                    {buildStates()}
                  </TextField>}
              </FastField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FastField name='raw_school.city'>
                {field =>
                  <TextField
                    {...props}
                    {...field.field}
                    select
                  >
                    {buildCities()}
                  </TextField>}
              </FastField>
            </Grid>
          </>
        ) : <CircularProgress />}
    </Grid>
  )
}

export default withState(CityPicker)
