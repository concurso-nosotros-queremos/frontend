import React from 'react'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Grid, DialogContent } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import Moment from 'moment'

Moment.locale('es')

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    [theme.breakpoints.only('xs')]: {
      margin: 'auto'
    }
  }
}))

export default function SimpleDialog (props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const theme = useTheme()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = value => {
    setOpen(false)
  }
  const handleDateChange = date => {
    setSelectedDate(date)
  }

  return (
    <>
      <Button size='small' variant='contained' className={props.estilos} onClick={handleClickOpen}>
        Extender
      </Button>
      <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open} maxWidth='lg' classes={{ paper: classes.dialogPaper }}>
        <DialogContent style={{ margin: 0, padding: 0 }}>
          <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                inputStyle={{ textAlign: 'center' }}
                format='DD MMMM YYYY'
                orientation={useMediaQuery(theme.breakpoints.only('xs')) ? 'portrait' : 'landscape'}
                variant='static'
                openTo='date'
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancelar
          </Button>
          <Button onClick={handleClose} color='primary'>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
