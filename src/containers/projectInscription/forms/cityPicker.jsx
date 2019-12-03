import React from 'react'
import { MenuItem, TextField, Grid, CircularProgress } from '@material-ui/core'
import withState from '../../../hoc/withState'
import { FastField, useFormikContext, getIn } from 'formik'

const CityPicker = props => {
  const context = useFormikContext()
  console.log(context)

  const buildCities = () => {
    const state = context.values.raw_school.state
    const selectedId = getIn(context, 'values.raw_school.city')

    if (state) {
      const city = props.states.find(el => el.id === state).city
      if (city) {
        return city.map(el => <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>)
      }
    } else if (selectedId) {
      const filteredCities = []
      for (const state of props.states) {
        const qs = state.city.find(state => state.id === selectedId)
        if (qs) {
          state.city.forEach(city => {
            filteredCities.push(<MenuItem key={city.id} value={city.id}>{city.name}</MenuItem>)
          })
          return filteredCities
        }
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
