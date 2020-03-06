import React from 'react';
import '../../assets/styles/index.css';
import { makeStyles, Grid } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '60px',
        [theme.breakpoints.down('xs')]: {
            padding: '15px',
        },
    },
    nav: {
        marginBottom: '70px',
    },
}));

export default function ExperiencePage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={20} className="wrapper">
                <Grid item md={3} xs={12} className={classes.nav}>
                    <Navbar />
                </Grid>
                <Grid item md={9} xs={12} className={classes.body}>
                    <Experience />
                </Grid>
            </Grid>
            <Grid container>
                <Footer />
            </Grid>
        </div>
    );
}