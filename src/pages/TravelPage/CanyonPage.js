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
    title: {
        animation: `$title-animation 2s 1 cubic-bezier(0, 0.78, 0.58, 1)`,
    },
    '@keyframes title-animation': {
        '0%': {
            opacity: 0,
            transform: 'rotateX(-75deg) translateY(60px)',
        },
        '100%': {
            opacity: 1,
            transform: 'rotateX(0deg) translateY(0px)',
        },
    },
}));

const photos = [
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8294.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8295.JPG',
        width: 4,
        height: 5,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8296.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8299.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_6519.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_6594.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_7227.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_3433.jpg',
        width: 4,
        height: 10,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8285.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_7527.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_7529.JPG',
        width: 8,
        height: 6,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_7532.JPG',
        width: 4,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_7606.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_7607.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_7608.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_7614.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8194.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8202.jpg',
        width: 4,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8208.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8272.JPG',
        width: 4,
        height: 5,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/CANYON_8291.JPG',
        width: 4,
        height: 3,
    },
];

export default function CanyonPage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={20} className="wrapper">
                <Grid item md={3} xs={12} className={classes.nav}>
                    <Navbar />
                </Grid>
                <Grid item md={9} xs={12} className={classes.body}>
                    <h1 className={classes.title}>2019 Jan</h1>
                    <Gallery photos={photos} direction="column" />
                </Grid>
            </Grid>
            <Grid container>
                <Footer />
            </Grid>
        </div>
    );
}
