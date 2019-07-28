import React from 'react';
import {makeStyles} from '@material-ui/core/styles/index';
import CssBaseline from '@material-ui/core/CssBaseline/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Paper from '@material-ui/core/Paper/index';
import Typography from '@material-ui/core/Typography/index';
import Link from '@material-ui/core/Link/index';
import Button from '@material-ui/core/Button/index';
import Container from '@material-ui/core/Container/index';
import AccountCircle from '@material-ui/icons/AccountCircle';

function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built with love by the '}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI
            </Link>
            {' team.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        flex: 1,
    },
    toolbarTitle: {
        flex: 1,
    },
    mainFeaturedPost: {
        position: 'relative',
        marginTop: theme.spacing(30),
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));


const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

const social = ['GitHub', 'Twitter', 'Facebook'];

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="xl">
                <Toolbar className={classes.toolbar}>
                    <Button size="small">Acerca</Button>
                    <Button size="small">Proyectos</Button>
                    <div
                        className={classes.toolbarTitle}
                    >
                    </div>
                    <Button variant="outlined" size='small' className={classes.button}>
                        <AccountCircle/>
                        Ingresa
                    </Button>
                </Toolbar>
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <div className={classes.mainFeaturedPostContent}>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <div style={{
                                        borderRadius: '50px',
                                        padding: '10.2px',
                                        border: '2px solid green',
                                        width: '45px',
                                        height: '45px'}}>

                                        <div style={{marginLeft: '6.9px'}}>1</div>
                                    </div>
                                    <Typography>
                                        Title of a longe
                                    </Typography>
                                </div>

                                <div style={{marginLeft: '200px'}}>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Multiple lines o
                                    </Typography>
                                </div>

                                <div style={{marginLeft: '200px'}}>
                                    <Link variant="subtitle1" href="#">
                                        Continue reading…
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </main>
            </Container>
            {/* Footer */
            }
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                    <MadeWithLove/>
                </Container>
            </footer>
            {/* End footer */
            }
        </React.Fragment>
    );
}