import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { Grid, Card, AppBar, Tabs, Tab, Box, Typography, Button, CircularProgress } from '@material-ui/core'
import { Formik } from 'formik'
import ParticipantsWrapper from '../../containers/projectInscription/forms/participantsWrapper'
import ProjectWrapper from '../../containers/projectInscription/forms/projectWrapper'
import SchoolWrapper from '../../containers/projectInscription/forms/schoolWrapper'
import ContactWrapper from '../../containers/projectInscription/forms/contactWrapper'
import fetchResource from '../../services/apiHandler'
import { getOneGroup } from '../../services/groups.service'

import theme from '../../theme/inscriptions_theme'

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

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    height: '100%'
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
  },
  loading: {
    width: '100%'
  },
  cancelarBtn: {
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
      {value === index ? <Box p={3}>{children}</Box> : null}
    </Typography>
  )
}

class EditGroup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      group: null,
      error: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    getOneGroup(this.props.token, this.props.match.params.id)
      .then(response => this.setState({ group: response }))
      .catch(error => this.setState({ error: error }))
  }

  handleSubmit (form) {
    return fetchResource(`rest/group/${this.props.match.params.id}/`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      },
      body: {
        ...form
      }
    })
  }

  render () {
    return (
      <GroupEditor group={this.state.group} onSubmit={this.handleSubmit} />
    )
  }
}

const GroupEditor = props => {
  const classes = useStyles()

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      {props.group
        ? (
          <Grid container direction='row' justify='flex-start' alignItems='flex-start' className={classes.root}>
            <Card className={classes.card} elevation={0}>
              <>
                <Typography className={classes.title} autoCapitalize>
                  {props.group.raw_project.name}
                </Typography>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                  <Tabs value={value} onChange={handleChange} indicatorColor='primary' aria-label='simple tabs example'>
                    {pages.map((el, idx) => <Tab key={idx} label={el.title} />)}
                  </Tabs>
                </AppBar>
                <Formik
                  onSubmit={(values, { setStatus, setSubmitting }) => {
                    props.onSubmit(values).then((response) => {
                      console.log(response)
                    }).catch((error) => {
                      setStatus({ ...error.response })
                      setSubmitting(false)
                    })
                  }}
                  initialValues={props.group}
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

                      <Grid container direction='row' justify='space-between' alignItems='center'>
                        <Button type='button' className={classes.cancelarBtn} onClick={() => window.history.back()}>
                          Cancelar
                        </Button>
                        <Button variant='contained' color='primary' className={classes.saveButton} onClick={() => submitForm()}>
                          Guardar
                        </Button>
                      </Grid>
                    </>
                  )}
                </Formik>
              </>
            </Card>
          </Grid>
        )
        : (
          <Grid container direction='row' justify='flex-start' alignItems='flex-start' className={classes.root} style={{ alignContent: 'center' }}>
            <Grid container direction='row' justify='center' alignItems='center' className={classes.loading}>
              <CircularProgress />
            </Grid>
          </Grid>
        )}

    </ThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(withRouter(EditGroup))
