import React from 'react';
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
    },
    gridListTile: {
        textAlign: 'center',
        color: 'white',
    },
    image: {
        '&:hover': {
            filter: 'brightness(70%) blur(0.5px)',
        },
    },
    gridText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textTransform: 'uppercase',
    },
}));

const tileData = [
    {
        img: image1,
        cols: 1,
        title: 'About',
    },
    {
        img: image2,
        cols: 1,
        title: 'Experience',
    },
    {
        img: image3,
        cols: 1,
        title: 'Projects',
    },
    {
        img: image4,
        cols: 1,
        title: 'Skills',
    },
    {
        img: image5,
        cols: 1,
        title: 'Machine Learning',
    },
    {
        img: image6,
        cols: 1,
        title: 'Travel',
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
            <GridList cellHeight={350} className={classes.gridList} cols={getGridListCols()}>
                {tileData.map(tile => (
                    <GridListTile className={classes.gridListTile} key={tile.img} cols={tile.cols}>
                        <img className={classes.image} src={tile.img} alt={tile.title} />
                        <div className={classes.gridText}>{tile.title}</div>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default withWidth()(ImageGrid);
