import React from 'react'
import { FieldArray } from 'formik'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'


const categories = [
  { id: 1, name: 'Medio ambiente' },
  { id: 2, name: 'Adicciones' },
  { id: 3, name: 'Menores' },
  { id: 4, name: 'Tercera edad' },
  { id: 5, name: 'Espacios de uso común' },
  { id: 6, name: 'Seguridad vial' },
  { id: 7, name: 'Género' },
  { id: 8, name: 'Otro' }
]

const CategoryPicker = () => (
  <FieldArray
    name='raw_project.category'
    render={arrayHelpers => (
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        {categories.map((category, idx) => {
          if (idx >= 4) {
            return (
              <Grid item xs={6} md={3} key={category.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={arrayHelpers.form.values.raw_project.category.includes(category.id)}
                      value={category.id}
                      color='primary'
                      onChange={e => {
                        console.log(arrayHelpers.name)
                        if (e.target.checked) arrayHelpers.push(category.id)
                        else {
                          const idx = arrayHelpers.form.values.raw_project.category.indexOf(category.id)
                          arrayHelpers.remove(idx)
                        }}}
                    />}
                  label={category.name}
                />
              </Grid>
            )
          } else {
            return (
              <Grid item xs={6} md={3} key={category.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={arrayHelpers.form.values.raw_project.category.includes(category.id)}
                      value={category.id}
                      color='primary'
                      onChange={e => {
                        console.log(arrayHelpers.name)
                        if (e.target.checked) arrayHelpers.push(category.id)
                        else {
                          const idx = arrayHelpers.form.values.raw_project.category.indexOf(category.id)
                          arrayHelpers.remove(idx)
                        }}}
                    />}
                  label={category.name}
                />
              </Grid>
            )
          }
        })}
      </Grid>
    )}
  />
)

export default CategoryPicker
