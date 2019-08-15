import * as Yup from 'yup'

const participantsSchema = Yup.array().of(
  Yup.object().shape({
    first_name: Yup.string().required('Nombre es un campo obligatorio'),
    last_name: Yup.string().required('Apeliido es un campo obligatorio'),
    dni: Yup.string(),
    grade_choices: Yup.number('Seleccione un año correcto').typeError('Seleccione un curso correcto').required('Año es un campo obligatorio')
  }).noUnknown()
).min(1, 'Debe agregar al menos 1 participante')

const schoolSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es un campo obligatorio'),
  street_name: Yup.string().required('Calle es un campo obligatorio'),
  street_number: Yup.number().integer().typeError('Introduzca un numero de calle valido').required('Numero de calle es un campo obligatorio'),
  city: Yup.number().integer().typeError('Introduzca una ciudad valida').required('Ciudad es un campo obligatorio'),
  school_types: Yup.number().integer().typeError('Introduzca un tipo de escuela valido').required('Tipo de escuela es un campo obligatorio')
}).noUnknown()

const projectSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es un campo obligatorio'),
  problem: Yup.string().required('Problema es un campo obligatorio'),
  solution: Yup.string().required('Solucion es un campo obligatorio'),
  diffusion: Yup.number().integer().typeError('Introduzca una difusion valida').required('Difusion es un campo obligatorio')
}).noUnknown()

const contactSchema = Yup.object().shape({
  phone_number: Yup.string(),
  alternative_email: Yup.string(),
  alternative_phone_number: Yup.string()
}).noUnknown()

export const validationSchema = Yup.object().shape({
  raw_participant: participantsSchema,
  raw_school: schoolSchema,
  raw_project: projectSchema,
  raw_contact: contactSchema
}).noUnknown()

export const initialValues = {
  raw_participant: [{
    first_name: '',
    last_name: '',
    dni: '',
    grade_choices: ''
  }],
  raw_school: {
    name: '',
    street_name: '',
    street_number: '',
    city: '',
    school_types: ''
  },
  raw_project: {
    name: '',
    problem: '',
    solution: '',
    diffusion: ''
  },
  raw_contact: {
    phone_number: '',
    alternative_email: '',
    alternative_phone_number: ''
  }
}

export const helpers = {
  raw_participant: {
    first_name: '',
    last_name: '',
    dni: 'DNI sin puntos ni espacios',
    grade_choices: 'Año al que pertenece el alumno',
    divition_choices: 'Divicion a la que pertenece el alumno'
  },
  group_location: {
    street_name: 'Nombre de la calle sin abreviaciones',
    street_number: '',
    zip_code: 'Codigo',
    city: 'Seleccione una ciudad de la lista'
  },
  raw_school: {
    name: 'Nombre de la escuela',
    address: 'Direccion de la escuela',
    principal_name: 'Nombre del director de la escuela',
    school_types: 'Seleccione un tipo de escuela de la lista',
    com_preference: 'Seleccione como prefiere que la fundacion se comunique'
  },
  raw_project: {
    name: 'Nombre del proyecto/idea emprendedora',
    problem: '¿Cual es el problema que encontraron?',
    solution: '¿Como piensan solucionarlo?',
    diffusion: 'Seleccione como se entero del concurso de la lista'
  },
  raw_contact: {
    phone_number: '',
    alternative_email: '',
    alternative_phone_number: ''
  }
}