import React from 'react'
import { makeStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography/index'
import Grid from '@material-ui/core/Grid'
import { Box, Avatar } from '@material-ui/core'
import Background from '../../../assets/organizanImage.svg'

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
    borderRadius: '5px',
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
    }
  },
  cardOrganizan: {
    minHeight: '25rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
  }
}))

export default function Organizan() {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} alignItems='flex-start' id='organizan'>
        <Grid container direction='column' alignItems='flex-start' className={classes.organizanTitleContainer}>
          <Grid item style={{ alignItems: 'left' }}>
            <Typography variant='h3' align='left'>
              Organizan
            </Typography>
            <div className={classes.barraDecorativa} />
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={10} md={6} lg={6} direction='row' justify='flex-start' className={classes.cardOrganizan}>
          <Box boxShadow={6} style={{ width: '100%', padding: '2rem', borderRadius: '10px' }}>
            <Grid container direction='column' justify='space-between' style={{ minHeight: '100%' }}>
              <Grid container direction='row' justify='flex-start' alignItems='center' wrap='nowrap'>
                <Grid item>
                  <Avatar alt='Remy Sharp' src={require('../../../assets/persona1.jpg')} className={classes.avatarImg} />
                </Grid>
                <Grid item className={classes.txtOrganizadores}>
                  <Typography variant='h5'>Virginia Barbera</Typography>
                  <Typography variant='subtitle1'>Directora general</Typography>
                </Grid>
              </Grid>
              <Grid container direction='row' justify='flex-start' alignItems='center' wrap='nowrap'>
                <Grid item>
                  <Grid item>
                    <Avatar alt='Remy Sharp' src={require('../../../assets/persona2.png')} className={classes.avatarImg} />
                  </Grid>
                </Grid>
                <Grid item className={classes.txtOrganizadores}>
                  <Typography variant='h5'>Maria Garcia</Typography>
                  <Typography variant='subtitle1'>Coordinadora Nosotros Queremos</Typography>
                </Grid>
              </Grid>
              <Grid container direction='row' justify='flex-start' alignItems='center' wrap='nowrap'>
                <Grid item>
                  <Grid item>
                    <Avatar alt='Remy Sharp' src={require('../../../assets/persona3.jpg')} className={classes.avatarImg} />
                  </Grid>
                </Grid>
                <Grid item className={classes.txtOrganizadores}>
                  <Typography variant='h5'>Mateo Perez</Typography>
                  <Typography variant='subtitle1'>Coordinador Nosotros Queremos</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
