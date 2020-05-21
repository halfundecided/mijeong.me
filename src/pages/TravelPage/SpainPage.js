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
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_0216.jpg',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_0294.JPG',
        width: 3,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_0301.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_0295.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_0306.JPG',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_0702.jpg',
        width: 3,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_0768.jpg',
        width: 4,
        height: 5,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1016.JPG',
        width: 3,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1018.JPG',
        width: 3,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1202.jpg',
        width: 2,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1230.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1233.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1239.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1501.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1662.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1694.jpg',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1825.JPG',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1831.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1833.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1860.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_1923.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_2353.jpg',
        width: 2,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_3019.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_3449.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_3515.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_3811.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_7759.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_9469.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_9493.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_9494.jpg',
        width: 2,
        height: 2,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/SPAIN_9511.jpg',
        width: 2,
        height: 2,
    },
];

export default function SpainPage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={20} className="wrapper">
                <Grid item md={3} xs={12} className={classes.nav}>
                    <Navbar />
                </Grid>
                <Grid item md={9} xs={12} className={classes.body}>
                    <h2 className={classes.title}>March 2019</h2>
                    <Gallery photos={photos} direction="column" />
                </Grid>
            </Grid>
            <Grid container>
                <Footer />
            </Grid>
        </div>
    );
}
