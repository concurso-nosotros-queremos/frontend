import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    border: theme.border.primary
  },
  button: {
    border: theme.border.primary,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      height: '135px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '135px'
    },
    fontSize: '14px'
  },
  root: {
    padding: '16px'
  },
  title: {
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '22px'
  },
  tableCellText: {
    fontSize: '14px',
    fontWeight: 'bold'
  },
  card: {
    border: theme.border.primary,
    width: '100%',
    borderBottom: 0,
    borderRadius: theme.shape.borderRadius,
  },
}))

const data = [
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria'
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran'
  },
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria'
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran'
  }, {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria'
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran'
  }, {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria'
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran'
  },
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria'
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran'
  }, {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria'
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran'
  },
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria'
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran'
  }, {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria'
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran'
  },
]

const Groups = props => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start' className={classes.root}>
        <Card className={classes.card} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCellText}>Nombre</TableCell>
                <TableCell className={classes.tableCellText} align="center">Alumnos</TableCell>
                <TableCell className={classes.tableCellText}>Provincia</TableCell>
                <TableCell className={classes.tableCellText}>Localidad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography style={{ fontWeight: 'bold' }}>{row.nombre}</Typography>
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.total}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.city}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.state}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </>

  )
}

export default Groups
