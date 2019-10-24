import React from 'react'
import { FieldArray } from 'formik'

console.clear()

const categories = [
  { id: 1, name: 'Medio Ambiente' },
  { id: 2, name: 'Adicciones' },
  { id: 3, name: 'Apoyo a instituciones de menores' },
  { id: 4, name: 'Apoyo a instituciones de tercera edad' },
  { id: 5, name: 'Mejoramiento de espacios de uso comun' },
  { id: 6, name: 'Seguridad vial' },
  { id: 7, name: 'Genero' },
  { id: 8, name: 'Otro' }
]

const CategoryPicker = () => (
  <FieldArray
    name='raw_project.category'
    render={arrayHelpers => (
      <div className={{ display: 'flex' }}>
        {categories.map(category => (
          <div key={category.id}>
            <label>
              <input
                name='raw_projet.category'
                type='checkbox'
                value={category.id}
                checked={arrayHelpers.form.values.raw_project.category.includes(category.id)}
                onChange={e => {
                  if (e.target.checked) arrayHelpers.push(category.id)
                  else {
                    const idx = arrayHelpers.form.values.raw_project.category.indexOf(category.id)
                    arrayHelpers.remove(idx)
                  }
                }}
              />{' '}
              {category.name}
            </label>
          </div>
        ))}
      </div>
    )}
  />
)

export default CategoryPicker
