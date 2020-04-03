import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, GridList, GridListTile } from '@material-ui/core';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';

import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        animation: `$up 1.8s`,
    },
    '@keyframes up': {
        '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    gridListTile: {
        textAlign: 'center',
        color: 'white',
        '&:hover': {
            transition: 'transform .4s ease, opacity .3s ease',
            opacity: 0.6,
            filter: 'blur(0.5px)',
        },
    },
    image: {},
    gridText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textTransform: 'uppercase',
    },
    links: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const tileData = [
    {
        img: image1,
        cols: 1,
        title: 'About',
        link: '/about',
    },
    {
        img: image2,
        cols: 1,
        title: 'Experience',
        link: '/experience',
    },
    {
        img: image3,
        cols: 1,
        title: 'Projects',
        link: '/projects',
    },
    {
        img: image4,
        cols: 1,
        title: 'Skills',
        link: '/skills',
    },
    {
        img: image5,
        cols: 1,
        title: 'Machine Learning',
        link: '/machine-learning',
    },
    {
        img: image6,
        cols: 1,
        title: 'Travel',
        link: '/travel',
    },
];

const ImageGrid = props => {
    const classes = useStyles();

    const getGridListCols = () => {
        if (isWidthDown('sm', props.width)) {
            return 1;
        }
        if (isWidthUp('sm', props.width)) {
            return 2;
        }
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={350} spacing={16} className={classes.gridList} cols={getGridListCols()}>
                {tileData.map(tile => (
                    <GridListTile className={classes.gridListTile} key={tile.img} cols={tile.cols}>
                        <img className={classes.image} src={tile.img} alt={tile.title} />
                        <Link className={classes.links} to={tile.link}>
                            <div className={classes.gridText}>{tile.title}</div>
                        </Link>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default withWidth()(ImageGrid);
