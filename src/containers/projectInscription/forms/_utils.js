import { getIn } from 'formik'
import { helpers } from './_schemas'

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
  return (getIn(errors, name) !== undefined && getIn(touched, name) !== undefined) || getIn(status, name) !== undefined
}

export function hasFieldError (error, status, touched) {
  return (error && touched) || status
}

export function hasBlockError (errors, status, touched, name) {
  let blockTouched = true
  const blockError = getIn(errors, name) && true
  const blockStatus = getIn(status, name) && true

  try {
    for (const key of Object.keys(getIn(errors, name))) {
      console.log('UNDEFINED: ')
      console.log(undefined === getIn(touched, (name + '.' + key)))
      if (!getIn(touched, (name + '.' + key))) {
        blockTouched = false
        break
      }
    }
  } catch {
    blockTouched = false
  }

  return (blockError && blockTouched) || blockStatus
}

function isObject (obj) {
  var type = typeof obj
  return type === 'object' && !!obj
}

function isString (obj) {
  var type = typeof obj
  return type === 'string'
}

export function enhancedErrors (errors, statuses, toucheds, path) {
  console.log(`~~~~~~~~~~~~ Discovering local and backend errors on ${path} ~~~~~~~~~~~~`)
  const error = getIn(errors, path)
  const status = getIn(statuses, path)

  if (status) {
    if (errorIterator(statuses, null, status, path)) {
      return true
    }
  }

  if (error) {
    if (errorIterator(errors, toucheds, error, path)) {
      return true
    }
  }

  return false
}

function errorIterator (errors, toucheds, obj, path) {
  if (Array.isArray(obj) && obj.length) {
    for (const [i, x] of obj.entries()) {
      const newPath = `${path}.${i}`
      if (!errorIterator(errors, toucheds, x, newPath)) {
        return false
      }
    }
    return true
  } else if (!Array.isArray(obj) && isObject(obj)) {
    for (const k of Object.keys(obj)) {
      const newPath = `${path}.${k}`
      if (!errorIterator(errors, toucheds, obj[k], newPath)) {
        return false
      }
    }
    return true
  } else if (isString(obj)) {
    if (toucheds) {
      if (getIn(toucheds, path)) {
        console.log(`Found true error at ${path}`)
        return true
      } else {
        console.log(`Missing touched at ${path}`)
        return false
      }
    } else {
      console.log(`Found lazy error at ${path}`)
      return true
    }
  } else if (obj === null || obj === undefined) {
    return false
  }
}
