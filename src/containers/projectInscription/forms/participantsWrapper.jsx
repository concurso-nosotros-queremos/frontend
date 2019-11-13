import React, { useState, useEffect } from 'react'
import { FieldArray, getIn } from 'formik'
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Fade } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import AddOutlined from '@material-ui/icons/AddOutlined'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import WarningOutlined from '@material-ui/icons/WarningOutlined'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import ButtonBase from '@material-ui/core/ButtonBase'

import { hasError } from './_utils'
import { makeStyles } from '@material-ui/styles'
import CustomField from './customField'

const useStyles = makeStyles((theme) => ({
  panelError: {
    borderRight: `4px solid ${theme.palette.error.main}`,
    borderRadius: '0px 3px 3px 0px'
  },
  deleteButton: {
    padding: '12px'
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

  const nextFocusRef = (arrayHelpers, index) => {
    return index === arrayHelpers.form.values.raw_participant.length - 1 ? inputRef : null
  }

  return (
    <Fade in mountOnEnter unmountOnExit>
      <div>
        <Typography variant='h6'>Registro de participantes</Typography>
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
                    style={{ margin: 'auto' }}
                  >
                    <Grid container spacing={1} justify='space-between'>
                      <Grid item style={{ alignSelf: 'center' }}>
                        <Grid container direction='row' justify='flex-start' alignItems='center'>
                          {hasError(props.errors, props.status, props.touched, `raw_participant.${index}`) &&
                            <WarningOutlined color='error' style={{ marginRight: '8px' }} />}
                          <Typography>{expanded !== index ? `${participant.first_name} ${participant.last_name}` : 'Nuevo participante'}</Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <ButtonBase centerRipple fullWidth onClick={() => { removeParticipant(arrayHelpers, index) }} className={classes.deleteButton}>
                          <DeleteOutlineIcon color='primary' />
                        </ButtonBase>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <CustomField
                          name={`raw_participant.${index}.first_name`}
                          fullWidth
                          variant='outlined'
                          label='Nombre'
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomField
                          name={`raw_participant.${index}.last_name`}
                          fullWidth
                          variant='outlined'
                          label='Apellido'
                          component={TextField}
                          inputRef={nextFocusRef(arrayHelpers, index)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomField
                          name={`raw_participant.${index}.dni`}
                          fullWidth
                          variant='outlined'
                          label='D.N.I.'
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomField
                          name={`raw_participant.${index}.grade_choices`}
                          fullWidth
                          select
                          variant='outlined'
                          label='Año de cursado'
                          component={TextField}
                        >
                          <MenuItem value='3'>7mo</MenuItem>
                          <MenuItem value='2'>6to</MenuItem>
                          <MenuItem value='1'>5to</MenuItem>
                          <MenuItem value='0'>4to</MenuItem>
                        </CustomField>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
              <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item xs={12} md={8}>
                  <Button
                    fullWidth
                    disabled={hasError(props.errors, props.status, props.touched, `raw_participant.${arrayHelpers.form.values.raw_participant.length - 1}`)}
                    variant='contained'
                    color='primary'
                    style={{ marginTop: '8px' }}
                    onClick={() => addParticipant(arrayHelpers)}
                  >
                    <AddOutlined />
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        />
      </div>
    </Fade>
  )
}

export default ParticipantsWrapper
