import React, { forwardRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import MaterialTable from 'material-table'
import { Link, Redirect } from 'react-router-dom'

import {
  ArrowUpward,
  ChevronLeft,
  ChevronRight,
  Clear,
  FirstPage,
  LastPage,
  Search,
  EditOutlined
} from '@material-ui/icons'

const tableIcons = {
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <EditOutlined {...props} ref={ref} />),
}

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
    whiteSpace: 'nowrap',
    
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '24px'
  },
  card: {
    border: theme.border.primary,
    width: '100%',
    borderBottom: 0,
    borderRadius: theme.shape.borderRadius
  },
}))




const Groups = () => {
  const classes = useStyles()

  function handleOnClick(i) {
    console.log(i)
  }

  return (
    <>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start' className={classes.root}>
        <Card className={classes.card} elevation={0}>
          <MaterialTable
            icons={tableIcons}
            columns={[
              { title: 'Nombre', field: 'name' },
              { title: 'Alumnos', field: 'alumnos', type: 'numeric' },
              { title: 'Provincia', field: 'city' },
              { title: 'Localidad', field: 'state' },
            ]}
            data={[
              { name: 'abEl termoDinamico', alumnos: '1', city: 'jMendoza', state: 'iFray Luis Beltran', id: '12' },
              { name: 'bEl termoDinamico', alumnos: '25', city: 'eMendoza', state: 'uFray Luis Beltran', id: '21' },
              { name: 'cdEl termoDinamico', alumnos: '3000', city: 'rMendoza', state: 'ytFray Luis Beltran', id: '20' },
              { name: 'dEl termoDinamico', alumnos: '67', city: 'opMendoza', state: 'rFray Luis Beltran', id: '200' },
              { name: 'zEl termoDinamico', alumnos: '28', city: '23eMendoza', state: 'bFray Luis Beltran', id: '24' },
            ]}
            title={<Typography className={classes.title}>Grupos</Typography>}
            options={{
              actionsColumnIndex: -1,
              draggable: false,
              paging: false
            }}
            actions={[
              {
                icon: EditOutlined,
                tooltip: 'Editar grupo',
                onClick: (event, rowData) => handleOnClick(rowData.id)
              }
            ]}
          />
        </Card>
      </Grid>
    </>

  )
}

export default Groups
