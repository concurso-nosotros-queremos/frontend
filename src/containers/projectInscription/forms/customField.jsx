import React, { useCallback } from 'react'
import { useField, useFormikContext, getIn, setIn } from 'formik'
import { hasFieldError } from './_utils'

export function useCustomField (name) {
  const { status, setStatus } = useFormikContext()
  const [{ onBlur: onBlurFormik, ...field }, meta] = useField(name)
  const apiError = getIn(status, name)

  const onBlurMemo = useCallback(
    e => {
      if (getIn(status, name)) {
        const newStatus = setIn(status, name, null)
        setStatus({
          ...newStatus
        })
      }
      onBlurFormik(e)
    },
    [status, name, setStatus, onBlurFormik]
  )

  return [{ onBlur: onBlurMemo, ...field }, { ...meta, apiError }]
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
