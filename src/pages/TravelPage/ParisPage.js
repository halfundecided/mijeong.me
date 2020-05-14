import React from 'react';
import '../../assets/styles/index.css';
import { makeStyles, Grid } from '@material-ui/core';
import Gallery from 'react-photo-gallery';
import Navbar from '../../components/Navbar';
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

const photos = [
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_0.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_1.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_2.jpg',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_3.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_4.jpg',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_5.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_6.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_7.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_8.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/PARIS_9.jpg',
        width: 4,
        height: 3,
    },
];

export default function ParisPage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={20} className="wrapper">
                <Grid item md={3} xs={12} className={classes.nav}>
                    <Navbar />
                </Grid>
                <Grid item md={9} xs={12} className={classes.body}>
                    <h1>2016 May</h1>
                    <Gallery photos={photos} direction="column" />
                </Grid>
            </Grid>
            <Grid container>
                <Footer />
            </Grid>
        </div>
    );
}
