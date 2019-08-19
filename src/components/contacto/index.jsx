import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Button, FormControlLabel, Checkbox } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: '1',
    marginBottom: '20rem',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '8rem',
      paddingRight: '8rem',
    }
  },
  titleContainer: {
    marginBottom:'1rem',
  },
  formContainer: {
  }
}))


export default function ComoFunciona() {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} alignItems="flex-start">
        <Grid container md={6} className={classes.titleContainer} direction="column" justify="flex-start" alignItems="flex-start">
          <Grid item lg={8} xl={8} md={10} style={{marginBottom:'2rem'}}>
            <Typography variant='h3' style={{ fontWeight: 'bold' }}>¿Te quedaste con alguna duda?</Typography>
          </Grid>
          <Grid item lg={8} xl={6} md={8}>
            <Typography variant='subtitle1'>
              ¡No hay problema! Déjanos tu pregunta y te respondemos a la brevedad :)
            </Typography>
          </Grid>
        </Grid>
        <Grid container md={6} className={classes.formContainer} direction="column" justify="flex-start" alignItems="flex-start">
          <form style={{ width: '100%' }}>
            <Grid item>
              <TextField
                id="outlined-full-width"
                label="Nombre y Apellido"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-full-width"
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-multiline-static"
                label="Mensaje"
                fullWidth
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item container direction="row" justify="space-between" alignItems="center" style={{marginTop:'1rem'}}>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Acepto terminos y condiciones"
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" size="large">
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}