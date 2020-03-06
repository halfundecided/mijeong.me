import React from 'react';
import '../../assets/styles/index.css';
import { makeStyles, Grid } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import ImageGrid from '../../components/ImageGrid';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '70px',
    },
    nav: {
        marginBottom: '70px',
    },
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={20} className="wrapper">
                <Grid item md={3} xs={12} className={classes.nav}>
                    <Navbar />
                </Grid>
                <Grid item md={9} xs={12} className={classes.body}>
                    <ImageGrid />
                </Grid>
            </Grid>
        </div>
    );
}
