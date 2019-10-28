import React, { forwardRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import MaterialTable from 'material-table'

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
  tableCellText: {
    fontSize: '14px',
    fontWeight: 'bold'
  },
  card: {
    border: theme.border.primary,
    width: '100%',
    borderBottom: 0,
    borderRadius: theme.shape.borderRadius
  },
  tableRow: {
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(35, 47, 52, 0.08)'
    }
  }
}))

const data = [
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran',
    raw_project: {
      id: '2'
    }
  }, {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran',
    raw_project: {
      id: '2'
    }
  }, {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran',
    raw_project: {
      id: '2'
    }
  }, {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran',
    raw_project: {
      id: '2'
    }
  }, {
    nombre: 'Damajuana solidaria',
    total: '41',
    city: 'Cordoba',
    state: 'Aldea Santa Maria',
    raw_project: {
      id: '2'
    }
  },
  {
    nombre: 'El termoDinamico',
    total: '13',
    city: 'Mendoza',
    state: 'Fray Luis Beltran',
    raw_project: {
      id: '2'
    }
  }
]

const Groups = props => {
  const classes = useStyles()

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
              { name: 'abEl termoDinamico', alumnos: '1', city: 'jMendoza', state: 'iFray Luis Beltran', },
              { name: 'bEl termoDinamico', alumnos: '25', city: 'eMendoza', state: 'uFray Luis Beltran', },
              { name: 'cdEl termoDinamico', alumnos: '3000', city: 'rMendoza', state: 'ytFray Luis Beltran', },
              { name: 'dEl termoDinamico', alumnos: '67', city: 'opMendoza', state: 'rFray Luis Beltran', },
              { name: 'zEl termoDinamico', alumnos: '28', city: '23eMendoza', state: 'bFray Luis Beltran', },
            ]}
            title={<Typography className={classes.title}>Grupos</Typography>}
            options={{
              actionsColumnIndex: -1,
            }}
            actions={[
              {
                icon: EditOutlined,
                tooltip: 'Editar grupo',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              }
            ]}
          />
        </Card>
      </Grid>
    </>

  )
}

export default Groups
