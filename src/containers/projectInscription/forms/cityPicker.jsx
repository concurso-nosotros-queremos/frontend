import React, { useState } from 'react'
import { MenuItem, TextField, Grid, CircularProgress } from '@material-ui/core'
import withState from '../../../hoc/withState'

const CityPicker = props => {
  const [state, setState] = useState(null)

  const handleChange = event => {
    setState(event.target.value)
  }

  const buildCities = () => {
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
        ? <>
          <Grid item xs={12} sm={6}>
            <TextField
              {...props}
              label='Provincia'
              error={false}
              helperText={null}
              value={state}
              onChange={handleChange}
              select
            >
              {buildStates()}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...props}
              {...props.field}
              disabled={!state && true}
              select
            >
              {buildCities()}
            </TextField>
          </Grid>
        </> : <CircularProgress />}
    </Grid>
  )
}

export default withState(CityPicker)
