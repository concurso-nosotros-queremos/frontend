import * as Yup from 'yup'

export const participantsSchema = Yup.array().of(
  Yup.object().shape({
    first_name: Yup.string().required('Nombre es un campo obligatorio'),
    last_name: Yup.string().required('Apeliido es un campo obligatorio'),
    dni: Yup.string(),
    email: Yup.string().email(),
    phone_number: Yup.string(),
    grade_choices: Yup.number('Seleccione un año correcto').typeError('Seleccione un curso correcto').required('Año es un campo obligatorio'),
    divition_choices: Yup.number().typeError('Seleccione un curso correcto').required('Curso es un campo obligatorio')
  }).noUnknown()
).min(1, 'Debe agregar al menos 3 participantes')

export const locationSchema = Yup.object().shape({
  street_name: Yup.string().required('Calle es un campo obligatorio'),
  street_number: Yup.number().integer().typeError('Introduzca un numero de calle valido').required('Numero de calle es un campo obligatorio'),
  zip_code: Yup.number().integer().typeError('Introduzca un codigo postal valido'),
  city: Yup.number().integer().typeError('Introduzca una ciudad valida').required('Ciudad es un campo obligatorio')
})

export const schoolSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es un campo obligatorio'),
  address: Yup.string().required('Direccion es un campo obligatorio'),
  principal_name: Yup.string().required('Nombre del director/a es un campo obligatorio'),
  school_types: Yup.number().integer().typeError('Introduzca un tipo de escuela valido').required('Tipo de escuela es un campo obligatorio'),
  com_preference: Yup.number().integer().typeError('Introduzca un tipo de comunicacion valido').required('Preferencia de comunicacion es un campo obligatorio')
}).noUnknown()
