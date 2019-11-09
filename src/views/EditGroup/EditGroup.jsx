import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { Grid, Card, AppBar, Tabs, Tab, Box, Typography, Button } from '@material-ui/core'
import { Formik } from 'formik'
import ParticipantsWrapper from '../../containers/projectInscription/forms/participantsWrapper'
import ProjectWrapper from '../../containers/projectInscription/forms/projectWrapper'
import SchoolWrapper from '../../containers/projectInscription/forms/schoolWrapper'
import ContactWrapper from '../../containers/projectInscription/forms/contactWrapper'
import fetchResource from '../../services/apiHandler'
import { getOneGroup } from '../../services/groups.service'

const pages = [
  {
    title: 'Participantes'
  },
  {
    title: 'Escuela'
  },
  {
    title: 'Proyecto'
  },
  {
    title: 'Contacto'
  }
]

const group = {
  raw_school: {
    id: 163,
    name: 'ass asd',
    street_name: 'av china',
    street_number: 7,
    city: 527,
    city_name: 'Agrelo',
    state_name: 'Mendoza',
    school_types: 1,
    school_types_name: 'Privada'
  },
  raw_project: {
    id: 168,
    name: 'Desarrolo de aplicativo',
    problem: 'La llegada de los colectivos',
    solution: 'Crear la app que inidque la ubicacion',
    diffusion: 0,
    category: [
      1,
      2
    ],
    category_name: [
      {
        id: 1,
        name: 'Social',
        description: 'social'
      },
      {
        id: 2,
        name: 'Tecnologico',
        description: 'tech'
      }
    ],
    diffusion_name: 'Mail'
  },
  raw_participant: [
    {
      id: 276,
      first_name: 'Juan Cruz',
      last_name: 'Mare',
      dni: 43232227,
      grade_choices: 3
    },
    {
      id: 277,
      first_name: 'Fran',
      last_name: 'salvestre',
      dni: 42573439,
      grade_choices: 3
    },
    {
      id: 278,
      first_name: 'Martinsaso',
      last_name: 'Olivari',
      dni: 43232222,
      grade_choices: 3
    }
  ],
  raw_contact: {
    id: 163,
    phone_number: 3517724454,
    alternative_email: 'xd@xd.xd',
    alternative_phone_number: 3517724454
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem'
  },
  card: {
    width: '100%',
    border: theme.border.primary,
    backgroundColor: 'white'
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: theme.border.primary
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '24px',
    paddingLeft: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  saveButton: {
    margin: '1rem'
  }
}))

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

const GroupEdit = props => {
  const classes = useStyles()

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleSubmit = (form, path) => {
    console.log(form)
    return fetchResource('rest/group/168/', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${props.token}`
      },
      body: {
        ...form
      }
    })
  }

  return (
    <>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start' className={classes.root}>
        <Card className={classes.card} elevation={0}>
          <Typography className={classes.title} autoCapitalize>
            Animarse a mas
          </Typography>
          <AppBar className={classes.appBar} position='static' color='inherit'>
            <Tabs value={value} onChange={handleChange} indicatorColor='primary' aria-label='simple tabs example'>
              {pages.map((el, idx) => <Tab key={idx} label={el.title} />)}
            </Tabs>
          </AppBar>
          <Formik
            onSubmit={(values, { setStatus, setSubmitting }) => {
              handleSubmit(values).then((response) => {
                console.log(response)
              }).catch((error) => {
                setStatus({ ...error.response })
                setSubmitting(false)
              })
            }}
            initialValues={group}
          >
            {({ errors, touched, status, submitForm }) => (
              <>
                <TabPanel value={value} index={0}>
                  <ParticipantsWrapper />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <SchoolWrapper />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <ProjectWrapper />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <ContactWrapper />
                </TabPanel>
                <Button className={classes.saveButton} onClick={() => submitForm()}>
                  Guardar
                </Button>
              </>
            )}
          </Formik>
        </Card>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(GroupEdit)
