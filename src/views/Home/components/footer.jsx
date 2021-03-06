import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0

    },
    li: {
      listStyle: 'none',
      display: 'table'
    }
  },
  section1: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: '4rem',
    paddingTop: '1rem'
  },
  section2: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: '2rem',
    paddingTop: '1rem'
  },
  section2b: {
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center'
    }
  },
  liStyle: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  liIconStyle: {
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '21px',
    marginRight: '.5rem'
  }
}))

export default function Footer () {
  const classes = useStyles()

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='stretch'>
        <Grid container direction='row' justify='space-between' alignItems='flex-start' className={classes.section1}>

          <Grid item style={{ marginRight: '3rem', marginBottom: '2rem' }}>
            <Grid container direction='column' justify='flex-start' alignItems='flex-start' spacing={1} item>
              <Grid item>
                <Typography variant='h5'>
                  Fundación Inclusión Social
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  Miguel del Corro 517, B° Güemes.
                </Typography>
                <Typography variant='body1'>
                  Córdoba, Argentina
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  Tel: (0351) 4232674
                </Typography>
                <Typography variant='body1'>
                  <Link color='inherit' href='https://www.itsv.edu.ar/' style={{ textDecoration: 'underline' }} target='_blank'>
                    www.inclusionsocial.org
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction='column' justify='flex-start' alignItems='flex-start' spacing={1} item className={classes.socialContainer}>
              <Grid item>
                <Typography variant='h5'>
                  Redes
                </Typography>
              </Grid>
              <Grid item>
                <ul>
                  <Grid container direction='column' justify='flex-start' alignItems='flex-start' spacing={1} item>
                    <Grid item>
                      <li>
                        <img src={require('../../../assets/facebook.png')} alt='facebook' className={classes.liIconStyle} />
                        <Link href='https://www.facebook.com/inclusionsocial/' variant='body1' className={classes.liStyle} color='textPrimary' target='_blank'>
                          Facebook
                        </Link>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <img src={require('../../../assets/instagram.png')} alt='instagram' className={classes.liIconStyle} />
                        <Link href='https://www.instagram.com/fundacionin/' variant='body1' className={classes.liStyle} color='textPrimary' target='_blank'>
                          Instagram
                        </Link>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <img src={require('../../../assets/twitter.png')} alt='twitter' className={classes.liIconStyle} />
                        <Link href='https://twitter.com/FundacionIN_' variant='body1' className={classes.liStyle} color='textPrimary' target='_blank'>
                          Twitter
                        </Link>
                      </li>
                    </Grid>
                    <Grid item>
                      <li>
                        <img src={require('../../../assets/linkedin.png')} alt='linkedin' className={classes.liIconStyle} />
                        <Link href='https://www.linkedin.com/company/fundación-inclusión-social' variant='body1' className={classes.liStyle} color='textPrimary' target='_blank'>
                          LinkedIn
                        </Link>
                      </li>
                    </Grid>
                  </Grid>
                </ul>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        <Grid container className={classes.section2}>
          <Grid container direction='row' justify='space-between' alignItems='center' spacing={2} className={classes.section2b}>
            <Grid item>
              <Typography variant='body1' align='center'>
                {'Creado con '} {'\u2764'} {' - Alumnos del '}
                <Link color='inherit' href='https://www.itsv.edu.ar/' style={{ textDecoration: 'underline' }} target='_blank'>
                  ITS Villada
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' align='center'>
                <Link color='inherit' href='http://shorturl.at/quILS' target='_blank'>
                  Bases y condiciones
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' align='center'>
                {'© '}{new Date().getFullYear()}{' Todos los derechos reservados.'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
