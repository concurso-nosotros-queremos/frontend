import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik, Form, FieldArray } from 'formik'

export const FormContainer = () => (
  <div>
    <Formik
      initialValues={{ raw_participants: [] }}
      onSubmit={values =>
        setTimeout(() => {
          window.alert(JSON.stringify(values, 0, 2))
        }, 500)
      }
      render={({
        values,
        errors,
        status,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <Form>
          {values.raw_participants.map(x => console.log(x))}
          <FieldArray
            name='raw_participants'
            render={(arrayHelpers) => (
              <div>
                {values.raw_participants && values.raw_participants.length > 0 ? (
                  values.raw_participants.map((participant, index) => (
                    <div key={index}>
                      <TextField
                        name={`raw_participants.${index}`}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      <Button variant='contained' onClick={() => arrayHelpers.remove(index)}>
                        -
                      </Button>
                      <Button variant='contained' onClick={() => arrayHelpers.insert(index, '')}>
                        +
                      </Button>
                    </div>
                  ))
                ) : (
                  <Button variant='contained' onClick={() => arrayHelpers.push('')}>
                      Agregar participante
                  </Button>
                )}
                <div>
                  <button type='submit'>Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
)
