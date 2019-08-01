import React, { Component } from 'react'
import { FieldArray, FastField, getIn } from 'formik'
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import AddOutlined from '@material-ui/icons/AddOutlined'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { hasError, errorMessageBuilder } from './utils'

export default class ParticipantsWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      focusNext: false,
      expandedIndex: 0
    }

    this.inputRef = React.createRef()
  }

  componentDidUpdate () {
    console.log('Component updated')
    console.log(this.state.focusNext)
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
      <div>
        <h2>Lista de participantes</h2>
        <FieldArray
          name='raw_participant'
          render={(arrayHelpers) => (
            <>
              {arrayHelpers.form.values.raw_participant.map((participant, index) => (
                <ExpansionPanel
                  expanded={this.state.expandedIndex === index}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    onClick={() => { this.setState({ expandedIndex: this.state.expandedIndex === index ? null : index }) }}
                  >
                    <Typography>{this.state.expandedIndex !== index ? `${participant.first_name}, ${participant.last_name}` : 'Nuevo participante'}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container direction='column'>
                      <FastField
                        name={`raw_participant.${index}.first_name`}
                        render={({ field }) => (
                          <TextField {...field} label='Nombre *'
                            inputRef={index === arrayHelpers.form.values.raw_participant.length - 1 ? this.inputRef : null}
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                      />
                      <FastField
                        name={`raw_participant.${index}.last_name`}
                        render={({ field }) => (
                          <TextField {...field} label='Apellido *'
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                      />
                      <FastField
                        name={`raw_participant.${index}.dni`}
                        render={({ field }) => (
                          <TextField {...field} label='D.N.I.'
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)} />)}
                      />
                      <FastField
                        name={`raw_participant.${index}.grade_choices`}
                        render={({ field }) => (
                          <TextField {...field} select label='Año *'
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
                      <FastField
                        name={`raw_participant.${index}.divition_choices`}
                        render={({ field }) => (
                          <TextField {...field} select label='Curso *'
                            error={hasError(this.props.errors, this.props.status, this.props.touched, field.name)}
                            helperText={errorMessageBuilder(this.props.errors, this.props.status, this.props.touched, field.name)}
                          >
                            <MenuItem value='2'>"C"</MenuItem>
                            <MenuItem value='1'>"B"</MenuItem>
                            <MenuItem value='0'>"A"</MenuItem>
                          </TextField>
                        )}
                      />
                      <Button onClick={() => { arrayHelpers.remove(index) }}>Borrar</Button>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
              <Button fullWidth variant='contained' color='primary' onClick={() => this.addParticipant(arrayHelpers)}><AddOutlined /></Button>
            </>
          )}
        />
      </div>
    )
  }
}
