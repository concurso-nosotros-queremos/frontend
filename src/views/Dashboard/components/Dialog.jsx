import React from 'react'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { DatePicker } from "@material-ui/pickers"

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [date, changeDate] = React.useState(new Date());

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = value => {
    setOpen(false)
  }
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <Button size='small' variant='contained' className={props.estilos} onClick={handleClickOpen}>
        Extender
      </Button>
      <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open}>
        <DialogTitle id='simple-dialog-title'>Modificar cierre de las incscripciones</DialogTitle>

        <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={date}
          onChange={changeDate}
        />


      </Dialog>
    </>
  )
}

