import React, { forwardRef } from 'react'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/styles'
import { Grid, useMediaQuery, Button, TextField } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import MaterialTable from 'material-table'
import withGroupCount from '../../hoc/withDashboard'
import { connect } from 'react-redux'

import { useTheme } from '@material-ui/core/styles'

import {
  ArrowUpward,
  ChevronLeft,
  ChevronRight,
  Clear,
  FirstPage,
  LastPage,
  Search,
  EditOutlined,
  SaveAltOutlined
} from '@material-ui/icons'

const tableIcons = {
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <EditOutlined {...props} ref={ref} />)
}

const useStyles = makeStyles(theme => ({
  card: {
    border: theme.border.primary,
    width: '100%',
    borderBottom: 0,
    borderRadius: theme.shape.borderRadius
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
  }
}))

const Groups = props => {
  const data = []
  const [token, setToken] = React.useState(null)
  const [rta, setRta] = React.useState(null)

  props.group.forEach((el, idx) =>
    data.push({ name: el.raw_project.name, alumnos: el.raw_participant.length, city: el.raw_school.city_name, state: el.raw_school.state_name, id: el.id })
  )

  const classes = useStyles()

  const handleClickEdit = id => {
    props.history.push(`/groups/${id}`)
  }

  const handleClickExport = id => {
    window.location.href = `https://queremosbackend.tk/rest/export/group/${id}/${props.token}`;
  }

  const checkToken = () => {
    fetch('http://localhost:8000/rest/check/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.token}`
      },
      body: JSON.stringify({
        token: token,
      })
    }).then(response => {
      if (response.status === 400) {
        setRta('Introduzca un token')
      }
      else if (response.status === 401) {
        setRta('Token incorrecto')
      } else if (response.status === 200) {
        setRta('Acceso garantizado')
      } else if (response.status === 403) {
        setRta('No estas autorizado')
      } else {
        setRta('Error')
      }
    })
  }

  const theme = useTheme()
  return (
    <>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start' className={classes.root}>
        <Card className={classes.card} elevation={0}>
          <TextField
            name='token'
            label='Token'
            fullWidth
            margin='normal'
            variant='outlined'
            onChange={(event) => setToken(event.target.value)}
            value={token}
          />
          <Button onClick={checkToken} >
            Checkear
                  </Button>
          <Typography className={classes.title} autoCapitalize>
            {rta}
          </Typography>
          <MaterialTable
            icons={tableIcons}

            columns={
              useMediaQuery(theme.breakpoints.down('sm'))
                ? [
                  { title: 'Nombre', field: 'name' },
                  { title: 'Alumnos', field: 'alumnos' },
                  { title: 'ID', field: 'id', hidden: true }
                ] : [
                  { title: 'Nombre', field: 'name' },
                  { title: 'Alumnos', field: 'alumnos' },
                  { title: 'Localidad', field: 'city' },
                  { title: 'Provincia', field: 'state' },
                  { title: 'ID', field: 'id', hidden: true }
                ]
            }
            data={data}
            title={<Typography className={classes.title}>Grupos</Typography>}
            options={{
              actionsColumnIndex: -1,
              draggable: false,
              paging: false
            }}
            actions={[
              {
                icon: EditOutlined,
                iconProps: { style: { color: 'rgba(35, 47, 52, 0.8)' } },
                tooltip: 'Editar grupo',
                onClick: (event, rowData) => handleClickEdit(rowData.id)
              },
              {
                icon: SaveAltOutlined,
                iconProps: { style: { color: 'rgba(35, 47, 52, 0.8)' } },
                tooltip: 'Exportar grupo',
                onClick: (event, rowData) => handleClickExport(rowData.id)
              }

            ]}
            localization={{
              header: {
                actions: 'Acciones'
              },
              body: {
                emptyDataSourceMessage: 'No hay grupos registrados'
              },
              toolbar: {
                searchPlaceholder: 'Buscar'
              }
            }}
          />
        </Card>
      </Grid>
    </>

  )
}
const mapStateToProps = (state) => ({
  token: state.auth.convertedToken.accessToken
})

export default connect(mapStateToProps)(withGroupCount(withRouter(Groups)))
