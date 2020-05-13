import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles, GridList, GridListTile } from '@material-ui/core';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import spain from '../assets/images/spain.jpg';
import canyon from '../assets/images/canyon.jpg';
import prague from '../assets/images/prague.jpg';
import paris from '../assets/images/paris.jpg';
import rome from '../assets/images/rome.jpg';
import nyc from '../assets/images/nyc.jpg';
import losangeles from '../assets/images/losangeles.jpg';
import miami from '../assets/images/miami.jpg';

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
    links: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const tileData = [
    {
        img: spain,
        cols: 1,
        title: 'Spain',
        link: '/travel-spain',
    },
    {
        img: canyon,
        cols: 1,
        title: 'Las Vegas & Canyon',
        link: '/travel-canyon',
    },
    {
        img: prague,
        cols: 1,
        title: 'Prague',
        link: '/travel-prague',
    },
    {
        img: rome,
        cols: 1,
        title: 'Rome',
        link: '/travel-rome',
    },
    {
        img: paris,
        cols: 1,
        title: 'Paris',
        link: '/travel-paris',
    },
    {
        img: nyc,
        cols: 1,
        title: 'New York',
        link: '/travel-newyork',
    },
    {
        img: losangeles,
        cols: 1,
        title: 'Los Angeles',
        link: '/travel-la',
    },
    {
        img: miami,
        cols: 1,
        title: 'Miami',
        link: '/travel-miami',
    },
];

const Travel = props => {
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

export default withWidth()(Travel);
