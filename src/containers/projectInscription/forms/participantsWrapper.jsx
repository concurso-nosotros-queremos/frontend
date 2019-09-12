import React, { useState, useEffect } from 'react'
import { FieldArray, FastField, getIn } from 'formik'
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Box, Fade } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import AddOutlined from '@material-ui/icons/AddOutlined'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import WarningOutlined from '@material-ui/icons/WarningOutlined'

import { hasError, errorMessageBuilder } from './_utils'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  panelError: {
    borderRight: `4px solid ${theme.palette.error.main}`,
    borderRadius: '0px 3px 3px 0px'
  }
}))

const ParticipantsWrapper = props => {
  const classes = useStyles()
  const [focus, setFocus] = useState(false)
  const [expanded, setExpanded] = useState(0)

  const inputRef = React.createRef()

  useEffect(() => {
    if (focus) {
      inputRef.current.focus()
      setFocus(false)
    }
  }, [focus, inputRef])

  const handleExpansion = index => {
    if (expanded !== index) {
      setExpanded(index)
    } else {
      setExpanded(-1)
    }
  }

  const addParticipant = arrayHelpers => {
    arrayHelpers.push({
      first_name: '',
      last_name: '',
      dni: '',
      grade_choices: getIn(arrayHelpers.form.values.raw_participant, `${arrayHelpers.form.values.raw_participant.length - 1}.grade_choices`),
      divition_choices: getIn(arrayHelpers.form.values.raw_participant, `${arrayHelpers.form.values.raw_participant.length - 1}.divition_choices`)
    })

    setFocus(true)
    setExpanded(arrayHelpers.form.values.raw_participant.length)
  }

  const removeParticipant = (arrayHelpers, index) => {
    arrayHelpers.remove(index)
  }

  return (
    <Fade in mountOnEnter unmountOnExit>
      <div>
        <Typography variant='h6' align='center' style={{ fontFamily: 'Roboto', fontWeight: 400 }}>Registro de participantes</Typography>
        <FieldArray
          name='raw_participant'
          render={(arrayHelpers) => (
            <>
              {arrayHelpers.form.values.raw_participant.map((participant, index) => (
                <ExpansionPanel
                  key={index}
                  expanded={expanded === index}
                >
                  <ExpansionPanelSummary
                    className={hasError(props.errors, props.status, props.touched, `raw_participant.${index}`) && classes.panelError}
                    expandIcon={<ExpandMoreIcon color='primary' />}
                    onClick={() => { handleExpansion(index) }}
                  >
                    <Grid container spacing={1}>
                      {hasError(props.errors, props.status, props.touched, `raw_participant.${index}`) &&
                        <Grid item>
                          <WarningOutlined color='error' />
                        </Grid>}
                      <Grid item>
                        <Typography>{expanded !== index ? `${participant.first_name} ${participant.last_name}` : 'Nuevo participante'}</Typography>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Box width={1}>
                          <FastField
                            name={`raw_participant.${index}.first_name`}
                            render={({ field }) => (
                              <TextField
                                fullWidth variant='outlined' {...field} label='Nombre'
                                inputRef={index === arrayHelpers.form.values.raw_participant.length - 1 ? inputRef : null}
                                error={hasError(props.errors, props.status, props.touched, field.name)}
                                helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)}
                              />)}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField
                          name={`raw_participant.${index}.last_name`}
                          render={({ field }) => (
                            <TextField
                              fullWidth variant='outlined' {...field} label='Apellido'
                              error={hasError(props.errors, props.status, props.touched, field.name)}
                              helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)}
                            />)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField
                          name={`raw_participant.${index}.dni`}
                          render={({ field }) => (
                            <TextField
                              fullWidth variant='outlined' {...field} label='D.N.I.'
                              error={hasError(props.errors, props.status, props.touched, field.name)}
                              helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)}
                            />)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FastField
                          name={`raw_participant.${index}.grade_choices`}
                          render={({ field }) => (
                            <TextField
                              fullWidth variant='outlined' {...field} select label='Año de cursado'
                              error={hasError(props.errors, props.status, props.touched, field.name)}
                              helperText={errorMessageBuilder(props.errors, props.status, props.touched, field.name)}
                            >
                              <MenuItem value='3'>7mo</MenuItem>
                              <MenuItem value='2'>6to</MenuItem>
                              <MenuItem value='1'>5to</MenuItem>
                              <MenuItem value='0'>4to</MenuItem>
                            </TextField>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button fullWidth onClick={() => { removeParticipant(arrayHelpers, index) }}>Borrar</Button>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
              <Button fullWidth disabled={hasError(props.errors, props.status, props.touched, `raw_participant.${arrayHelpers.form.values.raw_participant.length - 1}`)} variant='contained' color='secondary' onClick={() => addParticipant(arrayHelpers)}><AddOutlined /></Button>
            </>
          )}
        />
      </div>
    </Fade>
  )
}

export default ParticipantsWrapper
