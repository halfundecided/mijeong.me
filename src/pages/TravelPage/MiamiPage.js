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
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1178.jpg',
        width: 4,
        height: 5,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1180-1.jpg',
        width: 4,
        height: 5,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1186-1.JPG',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1237.jpg',
        width: 4,
        height: 3,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1307.jpg',
        width: 4,
        height: 5,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1323.jpg',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1324.jpg',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1412-1.JPG',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1413-1.JPG',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1418-1.JPG',
        width: 3,
        height: 4,
    },
    {
        src: 'https://s3.amazonaws.com/mijeong.me/MIAMI_1425.jpg',
        width: 4,
        height: 3,
    },
];

export default function MiamiPage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={20} className="wrapper">
                <Grid item md={3} xs={12} className={classes.nav}>
                    <Navbar />
                </Grid>
                <Grid item md={9} xs={12} className={classes.body}>
                    <h1>2020 Jan</h1>
                    <Gallery photos={photos} direction="column" />
                </Grid>
            </Grid>
            <Grid container>
                <Footer />
            </Grid>
        </div>
    );
}
