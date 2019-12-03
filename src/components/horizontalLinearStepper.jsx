import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { useTheme } from '@material-ui/styles'
import { enhancedErrors } from '../containers/projectInscription/forms/_utils'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  stepper: {
    padding: '24px 0px'
  }
}))

export default function HorizontalLinearStepper (props) {
  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepper} activeStep={props.active}>
        {props.steps.map((el, idx) => {
          const labelProps = {}
          if (enhancedErrors(props.errors, props.status, props.touched, el.raw)) {
            labelProps.error = true
          }
          return (
            <Step key={idx}>
              {!isDesktop ? props.active === idx ? <StepLabel {...labelProps}>{el.title}</StepLabel> : <StepLabel {...labelProps} /> : <StepLabel {...labelProps}>{el.title}</StepLabel>}
            </Step>
          )
        })}
      </Stepper>
    </div>
  )
}
