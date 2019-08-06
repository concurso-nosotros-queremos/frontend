import React, { Component } from 'react'
import { FieldArray, FastField, getIn } from 'formik'
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import AddOutlined from '@material-ui/icons/AddOutlined'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { hasError, errorMessageBuilder } from './utils'

class ParticipantsWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      focusNext: false,
      expandedIndex: 0
    }

    this.inputRef = React.createRef()
  }

  componentDidUpdate () {
    if (this.state.focusNext) {
      this.inputRef.current.focus()
      this.setState({
        focusNext: false
      })
    }
  }

  addParticipant (arrayHelpers) {
    arrayHelpers.push({
      first_name: '',
      last_name: '',
      dni: '',
      grade_choices: getIn(arrayHelpers.form.values.raw_participant, `${arrayHelpers.form.values.raw_participant.length - 1}.grade_choices`),
      divition_choices: getIn(arrayHelpers.form.values.raw_participant, `${arrayHelpers.form.values.raw_participant.length - 1}.divition_choices`)
    })

    this.setState({
      focusNext: true,
      expandedIndex: arrayHelpers.form.values.raw_participant.length
    })
  }

  render () {
    return (
      <>
        <h2>Registro de participantes</h2>
        <FieldArray
          name='raw_participant'
          render={(arrayHelpers) => (
            <>
              {arrayHelpers.form.values.raw_participant.map((participant, index) => (
                <ExpansionPanel
                  key={index}
                  expanded={this.state.expandedIndex === index}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon color='primary' />}
                    onClick={() => { this.setState({ expandedIndex: this.state.expandedIndex === index ? null : index }) }}
                  >
                    <Typography>{this.state.expandedIndex !== index ? `${participant.first_name} ${participant.last_name}` : 'Nuevo participante'}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Box width={1}>
                          <FastField
                            name={`raw_participant.${index}.first_name`}
                            render={({ field }) => (
                              <TextField fullWidth variant='outlined' {...field} label='Nombre *'
                                inputRef={index === arrayHelpers.form.values.raw_participant.length - 1 ? this.inputRef : null}
                                error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                                helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <FastField
                          name={`raw_participant.${index}.last_name`}
                          render={({ field }) => (
                            <TextField fullWidth variant='outlined' {...field} label='Apellido *'
                              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FastField
                          name={`raw_participant.${index}.dni`}
                          render={({ field }) => (
                            <TextField fullWidth variant='outlined' {...field} label='D.N.I.'
                              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FastField
                          name={`raw_participant.${index}.grade_choices`}
                          render={({ field }) => (
                            <TextField fullWidth variant='outlined' {...field} select label='Año *'
                              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                            >
                              <MenuItem value='3'>7mo</MenuItem>
                              <MenuItem value='2'>6to</MenuItem>
                              <MenuItem value='1'>5to</MenuItem>
                              <MenuItem value='0'>4to</MenuItem>
                            </TextField>
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FastField
                          name={`raw_participant.${index}.divition_choices`}
                          render={({ field }) => (
                            <TextField fullWidth variant='outlined' {...field} select label='Curso *'
                              error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                              helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                            >
                              <MenuItem value='2'>"C"</MenuItem>
                              <MenuItem value='1'>"B"</MenuItem>
                              <MenuItem value='0'>"A"</MenuItem>
                            </TextField>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button fullWidth onClick={() => { arrayHelpers.remove(index) }}>Borrar</Button>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
              <Button fullWidth variant='contained' color='secondary' onClick={() => this.addParticipant(arrayHelpers)}><AddOutlined /></Button>
            </>
          )}
        />
      </>
    )
  }
}

export default ParticipantsWrapper
