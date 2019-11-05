import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Card, AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'
import { Formik } from 'formik'
import ParticipantsWrapper from '../../containers/projectInscription/forms/participantsWrapper'
import ProjectWrapper from '../../containers/projectInscription/forms/projectWrapper'
import SchoolWrapper from '../../containers/projectInscription/forms/schoolWrapper'
import ContactWrapper from '../../containers/projectInscription/forms/contactWrapper'

const pages = [
  {
    title: 'Participantes',
    raw: 'raw_participant'
  },
  {
    title: 'Escuela',
    raw: 'raw_school'
  },
  {
    title: 'Proyecto',
    raw: 'raw_project'
  },
  {
    title: 'Contacto',
    raw: 'raw_contact'
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
          <TabPanel value={value} index={0}>
            <Formik
              initialValues={{ [pages[0].raw]: group[pages[0].raw] }}
            >
              <ParticipantsWrapper />
            </Formik>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Formik
              initialValues={{ [pages[1].raw]: group[pages[1].raw] }}
            >
              <SchoolWrapper />
            </Formik>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Formik
              initialValues={{ [pages[2].raw]: group[pages[2].raw] }}
            >
              <ProjectWrapper />
            </Formik>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Formik
              initialValues={{ [pages[3].raw]: group[pages[3].raw] }}
            >
              <ContactWrapper />
            </Formik>
          </TabPanel>
        </Card>
      </Grid>
    </>
  )
}

export default GroupEdit
