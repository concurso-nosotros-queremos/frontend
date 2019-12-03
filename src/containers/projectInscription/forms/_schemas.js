import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const participantsSchema = Yup.array().of(
  Yup.object().shape({
    first_name: Yup.string().required('Nombre es un campo obligatorio').max(20, 'No introduzca mas de 20 caracteres'),
    last_name: Yup.string().required('Apeliido es un campo obligatorio').max(20, 'No introduzca mas de 20 caracteres'),
    dni: Yup.number().integer().typeError('Introduzca un dni valido').test('len', 'Introduzca un dni valido', val => val && val.toString().length >= 7 && val.toString().length <= 8).required('Dni es un campo obligatorio'),
    grade_choices: Yup.number('Seleccione un año correcto').typeError('Seleccione un curso correcto').required('Año es un campo obligatorio')
  }).noUnknown()
).min(1, 'Debe agregar al menos 1 participante')

export const participantsSchemaRaw = Yup.object().shape({
  raw_participant: participantsSchema
}).noUnknown()

const schoolSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es un campo obligatorio').max(60, 'No introduzca mas de 60 caracteres'),
  street_name: Yup.string().required('Calle es un campo obligatorio').max(30, 'No introduzca mas de 30 caracteres'),
  street_number: Yup.number().integer().typeError('Introduzca un numero de calle valido').required('Numero de calle es un campo obligatorio'),
  city: Yup.number().integer().typeError('Introduzca una ciudad valida').required('Ciudad es un campo obligatorio'),
  school_types: Yup.number().integer().typeError('Introduzca un tipo de escuela valido').required('Tipo de escuela es un campo obligatorio')
}).noUnknown()

export const schoolSchemaRaw = Yup.object().shape({
  raw_school: schoolSchema
}).noUnknown()

const projectSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es un campo obligatorio').max(50, 'No introduzca mas de 50 caracteres'),
  problem: Yup.string().required('Problema es un campo obligatorio').max(500, 'No introduzca mas de 500 caracteres'),
  solution: Yup.string().required('Solución es un campo obligatorio').max(500, 'No introduzca mas de 500 caracteres'),
  diffusion: Yup.number().integer().typeError('Introduzca una difusión valida').required('Difusión es un campo obligatorio')
})

export const projectSchemaRaw = Yup.object().shape({
  raw_project: projectSchema
}).noUnknown()

const contactSchema = Yup.object().shape({
  phone_number: Yup.string().test('len', 'Ingrese un numero de telefono ', val => val && val.toString().length <= 10).matches(phoneRegExp, 'Ingrese un numero de telefono valido').required('Telefono particular es un campo obligatorio'),
  alternative_phone_number: Yup.string().test('len', 'Ingrese un numero de telefono ', val => val && val.toString().length <= 10).matches(phoneRegExp, 'Ingrese un numero de telefono valido').required('Telefono alternativo es un campo obligatorio'),
  alternative_email: Yup.string().email('Ingrese un email valido').required('Email alternativo es un campo obligatorio')
}).noUnknown()

export const contactSchemaRaw = Yup.object().shape({
  raw_contact: contactSchema
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
    diffusion: '',
    category: []
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
    grade_choices: 'Año al que pertenece el alumno'
  },
  raw_school: {
    name: 'Nombre de la escuela',
    address: 'Direccion de la escuela',
    street_name: 'Nombre de la calle sin abreviaciones',
    street_number: 'Altura de la calle',
    school_types: 'Seleccione un tipo de escuela de la lista'
  },
  raw_project: {
    name: 'Nombre del proyecto/idea emprendedora',
    problem: '¿Cual es el problema que encontraron?',
    solution: '¿Como piensan solucionarlo?',
    diffusion: 'Seleccione como se entero del concurso',
    category: 'Seleccione la categoria del proyecto'
  },
  raw_contact: {
    phone_number: 'Tu numero de teléfono',
    alternative_email: 'Email de otro profe/directivo/colegio',
    alternative_phone_number: '¿Si no te encontramos?'
  }
}
