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
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_1.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_2.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_3.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_4.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_5.jpg',
        width: 4,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_6.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_7.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_8.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_9.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_10.jpg',
        width: 4,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/ROME_11.jpg',
        width: 5,
        height: 4,
    },
];

export default function RomePage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={20} className="wrapper">
                <Grid item md={3} xs={12} className={classes.nav}>
                    <Navbar />
                </Grid>
                <Grid item md={9} xs={12} className={classes.body}>
                    <h1 className={classes.title}>2016 May</h1>
                    <Gallery photos={photos} direction="column" />
                </Grid>
            </Grid>
            <Grid container>
                <Footer />
            </Grid>
        </div>
    );
}
