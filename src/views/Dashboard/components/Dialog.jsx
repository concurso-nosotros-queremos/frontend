import React from 'react'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Grid, DialogContent } from '@material-ui/core'

import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'


import MomentUtils from '@date-io/moment'
import Moment from 'moment'
import "moment/locale/es"

Moment.locale("es")

const useStyles = makeStyles(theme => ({

}))

export default function SimpleDialog(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.only('xs'));

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = value => {
    setOpen(false)
  }
  const handleDateChange = date => {
    setSelectedDate(date)
    //console.log(Moment(date).format('YYYY-MM-DDTHH:mm:ss[Z]'))
  }

  return (
    <>
      <Button size='small' variant='contained' className={props.estilos} onClick={handleClickOpen} maxWidth={'xl'}>
        Extender
      </Button>
      <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open} fullScreen={fullScreen} maxWidth="lg">
        <DialogTitle>
          <h4 style={{ margin: 0 }}>
            Modificar cierre de las incscripciones
          </h4>
        </DialogTitle>
        <DialogContent dividers style={{ margin: 0, padding: 0 }}>
          <Grid container direction='row' justify='flex-start' alignItems='flex-start' className={{}}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  format="DD MMMM YYYY"
                  orientation='portrait'
                  variant='static'
                  openTo='date'
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePicker
                  orientation='portrait'
                  clearable
                  ampm={false}
                  label="24 hours"
                  variant='static'
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
