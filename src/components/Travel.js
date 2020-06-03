import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, GridList, GridListTile } from '@material-ui/core';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        animation: `$down 1.8s`,
    },
    '@keyframes down': {
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
    },
    image: {
        '&:hover': {
            transition: 'transform .4s ease, opacity .3s ease',
            opacity: 0.9,
            filter: 'blur(0.5px)',
        },
    },
    gridText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textTransform: 'uppercase',
        MozUserSelect: 'none',
        KhtmlUserSelect: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        '&:hover': {
            transition: '.6s',
            transform: 'translate(-50%, -50%) scale(1.3)',
        },
    },
    links: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const tileData = [
    {
        img: 'https://s3.amazonaws.com/mijeong.me/spain.jpg',
        cols: 1,
        title: 'Spain',
        link: '/travel-spain',
    },
    {
        img: 'https://s3.amazonaws.com/mijeong.me/canyon.jpg',
        cols: 1,
        title: 'Las Vegas & Canyon',
        link: '/travel-canyon',
    },
    {
        img: 'https://s3.amazonaws.com/mijeong.me/prague.jpg',
        cols: 1,
        title: 'Prague',
        link: '/travel-prague',
    },
    {
        img: 'https://s3.amazonaws.com/mijeong.me/rome.jpg',
        cols: 1,
        title: 'Rome',
        link: '/travel-rome',
    },
    {
        img: 'https://s3.amazonaws.com/mijeong.me/paris.jpg',
        cols: 1,
        title: 'Paris',
        link: '/travel-paris',
    },
    {
        img: 'https://s3.amazonaws.com/mijeong.me/nyc.jpg',
        cols: 1,
        title: 'New York',
        link: '/travel-newyork',
    },
    {
        img: 'https://s3.amazonaws.com/mijeong.me/losangeles.jpg',
        cols: 1,
        title: 'Los Angeles',
        link: '/travel-la',
    },
    {
        img: 'https://s3.amazonaws.com/mijeong.me/miami.jpg',
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
