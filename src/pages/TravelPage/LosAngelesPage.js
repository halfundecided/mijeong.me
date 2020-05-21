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
        src: 'https://s3.amazonaws.com/mijeong.me/LA_6951.jpg',
        width: 3,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8320.JPG',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8341.JPG',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8408.jpg',
        width: 4,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8428.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8543.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8558.jpg',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8855.JPG',
        width: 4,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8858.JPG',
        width: 5,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8859.JPG',
        width: 4,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8863.JPG',
        width: 4,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/LA_8864.JPG',
        width: 4,
        height: 4,
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
