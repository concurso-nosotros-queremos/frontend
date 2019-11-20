import React, { useCallback, useEffect } from 'react'
import { useField, useFormikContext, getIn, setIn } from 'formik'
import { hasFieldError } from './_utils'

export function useCustomField (name) {
  const { status, setStatus } = useFormikContext()
  const [{ onBlur, onChange, ...field }, meta] = useField(name)
  const [value, setValue] = React.useState(field.value)
  const [blur, setBlur] = React.useState(null)
  const apiError = getIn(status, name)

  

  useEffect(() => {
    if (blur) {
      onBlur(blur)
      setBlur(null)
    }
  })

  field.value = value
  field.onChange = (e) => {
    
    if (e && e.currentTarget) {
      setValue(e.currentTarget.value)
    }
  }

  field.onBlur = (e) => {
    onChange(e)
    if (getIn(status, name)) {
      const newStatus = setIn(status, name, null)
      setStatus({
        ...newStatus
      })
    }
    setBlur(e)
  }

  return [field, { ...meta, apiError }]
}

function CustomField (props) {
  const { component, children, ...rest } = props
  const [field, meta] = useCustomField(props.name)

  const hasError = hasFieldError(meta.error, meta.apiError, meta.touched)

  return (
    <props.component error={hasError} helperText={hasError && (meta.error || meta.apiError)} {...field} {...rest}>
      {children}
    </props.component>
  )
}

export default CustomField
