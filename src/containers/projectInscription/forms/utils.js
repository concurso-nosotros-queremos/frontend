import { getIn } from 'formik'
import { helpers } from './schemas'

export function errorMessageBuilder (errors, status, touched, name) {
  if (hasError(errors, status, touched, name)) {
    let error = ''

    if (getIn(errors, name)) {
      error += getIn(errors, name)
    }

    if (getIn(status, name)) {
      if (typeof getIn(status, name) === 'object') {
        getIn(status, name).forEach(element => {
          error += element
        })
      }
    }

    return error
  }

  return getIn(helpers, name)
}

export function hasError (errors, status, touched, name) {
  return (getIn(errors, name) && getIn(touched, name)) || getIn(status, name)
}
