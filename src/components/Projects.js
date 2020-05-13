import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import '../assets/styles/index.css';
import ShareIcon from '@material-ui/icons/Share';
import fractionWeb from '../assets/images/fractionweb.png';
import fractionApp from '../assets/images/fractionapp.png';
import consiliumq from '../assets/images/consiliumq.png';
import mood from '../assets/images/mood.png';
import rateit from '../assets/images/rateit.png';
import sharewithme from '../assets/images/sharewithme.png';
import dinnerspinner from '../assets/images/dinnerspinner.png';
import educoin from '../assets/images/educoin.png';
import movieapp from '../assets/images/movieapp.png';

const useStyles = makeStyles(theme => ({
    card: {
        fontFamily: "'Raleway', Arial, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        margin: '10px',
        marginRight: '20px',
        minWidth: '380px',
        maxWidth: '580px',
        width: '100%',
        background: '#FFFFFF',
        color: '#000000',
        WebkitBoxShadow: '5px 0px 10px rgba(0, 0, 0, 0.1)',
        boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.1)',
        '& *': {
            WebkitBoxSizing: 'border-box',
            boxSizing: 'border-box',
            WebkitTransition: 'all 0.35s ease-in-out',
            transition: 'all 0.35s ease-in-out',
        },
        '&:before': {
            position: 'absolute',
            content: '',
            height: '100%',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.2)',
            WebkitTransform: 'skewX(-17deg)',
            transform: 'skewX(-17deg)',
            WebkitBoxShadow: '15px 0px 25px rgba(0, 0, 0, 0.7)',
            boxShadow: '15px 0px 25px rgba(0, 0, 0, 0.7)',
        },
        '&:hover': {
            '& figcaption': {
                bottom: '50px',
            },
            '&:before': {
                WebkitAnimation: 'shadow 0.6s ease-in-out',
                animation: 'shadow 0.6s ease-in-out',
            },
        },
    },
    image: {
        width: '50%',
        overflow: 'hidden',
        zIndex: 1,
        WebkitTransform: 'skewX(-15deg)',
        transform: 'skewX(-15deg)',
    },
    img: {
        position: 'relative',
        display: 'block',
        left: '-15%',
        zIndex: 1,
        WebkitTransform: 'skew(15deg)',
        transform: 'skew(15deg)',
        width: '300px',
        height: '400px',
        objectFit: 'cover',
    },
    figcaption: {
        padding: '20px 30px 20px 20px',
        position: 'absolute',
        right: 0,
        bottom: '30px',
        width: '50%',
    },
    title: {
        margin: 0,
        textAlign: 'right',
        padding: '10px 0',
        width: '100%',
        fontSize: '1.3em',
        fontWeight: 300,
        textTransform: 'uppercase',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    },
    detail: {
        margin: 0,
        textAlign: 'right',
        padding: '10px 0',
        width: '100%',
        fontSize: '0.9em',
        opacity: 0.8,
    },
    icons: {
        width: '100%',
        textAlign: 'right',
        opacity: 0.4,
        padding: '5px',
        '&:hover': {
            opacity: 0.9,
        },
    },
    stacks: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'right',
        padding: '15px 30px',
        fontSize: '0.9em',
        opacity: 1,
        fontStyle: 'italic',
        color: '#ffffff',
        background: '#4a4a4a',
    },
}));
const projectData = [
    {
        code: 'fraction1',
        title: 'Fraction Web Service',
        period: 'Sep 2019 - Dec 2019',
        image: fractionWeb,
        body: 'React, AWS Lambda, API Gateway, Cognito, Amplify, DynamoDB',
        reference: 'https://fraction.rent/',
    },
    {
        code: 'fraction2',
        title: 'Fraction App',
        period: 'Jan 2020 - May 2020',
        image: fractionApp,
        body: 'React Native, AWS Lambda, API Gateway, Cognito, Amplify, DynamoDB',
        reference: '',
    },
    {
        code: 'consiliumq',
        title: 'ConsiliumQ',
        period: 'Sep 2019 - Dec 2019',
        image: consiliumq,
        body: 'React, D3.js, TypeScript, GraphQL, MongoDB, AWS',
        reference: 'https://github.com/consiliumQ',
    },
    {
        code: 'mood',
        title: 'Mood',
        period: 'Mar 2019 - May 2019',
        image: mood,
        body: 'HTML5, CSS3, JavaScript, Handlebars, Express, MongoDB',
        reference: 'https://github.com/group1forpatrick/mood',
    },
    {
        code: 'rateit',
        title: 'RateIt',
        period: 'Mar 2019 - May 2019',
        image: rateit,
        body: 'HTML5, CSS3, JavaScript, Handlebars, Express, MongoDB',
        reference: 'https://github.com/halfundecided/rateit-website',
    },
    {
        code: 'sharewithme',
        title: 'Share With Me',
        period: 'Feb 2019',
        image: sharewithme,
        body: 'React, GraphQL, Apollo Client',
        reference: 'https://github.com/halfundecided/sharewithme-react-graphql',
    },
    {
        code: 'movieapp',
        title: 'Movie App',
        period: 'Jan 2019',
        image: movieapp,
        body: 'React',
        reference: 'https://github.com/halfundecided/movie-web-react',
    },
    {
        code: 'educoin',
        title: 'EduCoin',
        period: 'Jan 2018 - May 2018',
        image: educoin,
        body: 'React Native, WordPress, Python, PHP, HTML5',
        reference: 'https://github.com/halfundecided/cryptocurrency_EduCoin',
    },
    {
        code: 'DinnerSpinner',
        title: 'Movie App',
        period: 'Sep 2017 - Dec 2017',
        image: dinnerspinner,
        body: 'HTML5, CSS3, JavaScript',
        reference: 'http://www.mijeong.me/CS146_DinnerSpinner/',
    },
];

const Projects = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            {projectData.map(project => (
                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <figure className={classes.card}>
                        <figcaption className={classes.figcaption}>
                            <h2 className={classes.title}>{project.title}</h2>
                            <p className={classes.detail}>{project.body}</p>
                            <div className={classes.icons}>
                                <a href={project.reference}>
                                    <ShareIcon />
                                </a>
                            </div>
                        </figcaption>
                        <div className={classes.image}>
                            <img className={classes.img} src={project.image} alt={project.code} />
                        </div>
                        <div className={classes.stacks}>{project.period}</div>
                    </figure>
                </Grid>
            ))}
        </Grid>
    );
};

export default Projects;
