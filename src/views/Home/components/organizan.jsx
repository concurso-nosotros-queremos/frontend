import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Box, Avatar } from '@material-ui/core'
import Background from '../../../assets/organizanImage.svg'

import persona1 from '../../../assets/persona1.jpg'
import persona3 from '../../../assets/persona3.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: '1',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '40%',
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 70%'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '8rem',
      paddingRight: '8rem'
    },
    [theme.breakpoints.only('xl')]: {
      backgroundPosition: 'right bottom'
    }
  },
  barraDecorativa: {
    width: '70%',
    height: '5px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    marginTop: '.6rem'
  },
  fotoOrganizadores: {
    height: '70px',
    width: '70px',
    backgroundColor: theme.palette.primary.main
  },
  txtOrganizadores: {
    marginLeft: '2rem'
  },
  avatarImg: {
    width: 70,
    height: 70
  },
  organizanTitleContainer: {
    marginBottom: '5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  },
  cardOrganizan: {
    minHeight: '25rem',
    backgroundColor: '#fff',
    borderRadius: theme.shape.borderRadius
  },
  organizanTitleItem: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  boxStyle: {
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    padding: '2rem'
  }
}))

const data = [
  {
    nombre: 'Virginia Barbera',
    cargo: 'Directora Ejecutiva',
    image_url: persona1
  },
  {
    nombre: 'Belen Ramoska',
    cargo: 'Coordinadora Nosotros Queremos',
    image_url: persona1
  },
  {
    nombre: 'Mateo Perez',
    cargo: 'Coordinadora Nosotros Queremos',
    image_url: persona3
  }
]

export default function Organizan () {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} alignItems='flex-start' id='organizan'>
        <Grid container direction='column' alignItems='flex-start' className={classes.organizanTitleContainer}>
          <Grid item className={classes.organizanTitleItem}>
            <Typography variant='h3' align='left'>
              Organizan
            </Typography>
            <div className={classes.barraDecorativa} />
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={10} md={6} lg={6} direction='row' justify='flex-start' className={classes.cardOrganizan}>
          <Box className={classes.boxStyle} boxShadow={2}>
            <Grid container direction='column' justify='space-between' style={{ minHeight: '100%' }}>

              {data.map((el, idx) =>
                <Grid key={idx} container direction='row' justify='flex-start' alignItems='center' wrap='nowrap'>
                  <Grid item>
                    <Avatar alt='Remy Sharp' src={el.image_url} className={classes.avatarImg} />
                  </Grid>
                  <Grid item className={classes.txtOrganizadores}>
                    <Typography variant='h5'>{el.nombre}</Typography>
                    <Typography variant='subtitle1'>{el.cargo}</Typography>
                  </Grid>
                </Grid>
              )}

            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
