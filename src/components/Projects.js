import React, { useState } from 'react';
import { makeStyles, Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import '../assets/styles/index.css';
import clsx from 'clsx';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    root: {
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '90%', // 16:9
        filter: 'brightness(80%)',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#754f44',
    },
}));
const projectData = [
    {
        avatar: 'F',
        code: 'fraction1',
        title: 'Fraction Web Service',
        period: 'Currently Working',
        image: fractionWeb,
        body: 'React, AWS Lambda, API Gateway, Cognito, Amplify, DynamoDB',
        reference: 'https://fraction.rent/',
        detail: 'detail1',
    },
    {
        avatar: 'F',
        code: 'fraction2',
        title: 'Fraction App',
        period: 'Currently Working',
        image: fractionApp,
        body: 'React Native, AWS Lambda, API Gateway, Cognito, Amplify, DynamoDB',
        reference: '',
        detail: 'detail1',
    },
    {
        avatar: 'C',
        code: 'consiliumq',
        title: 'ConsiliumQ',
        period: 'September 2019 - December 2019',
        image: consiliumq,
        body: 'React, D3.js, TypeScript, GraphQL, MongoDB, AWS',
        reference: 'https://github.com/consiliumQ',
        detail: 'detail1',
    },
    {
        avatar: 'M',
        code: 'mood',
        title: 'Mood',
        period: 'March 2019 - May 2019',
        image: mood,
        body: 'HTML5, CSS3, JavaScript, Handlebars, Express, MongoDB',
        reference: 'https://github.com/group1forpatrick/mood',
        detail: 'detail1',
    },
    {
        avatar: 'R',
        code: 'rateit',
        title: 'RateIt',
        period: 'March 2019 - May 2019',
        image: rateit,
        body: 'HTML5, CSS3, JavaScript, Handlebars, Express, MongoDB',
        reference: 'https://github.com/halfundecided/rateit-website',
        detail: 'detail1',
    },
    {
        avatar: 'S',
        code: 'sharewithme',
        title: 'Share With Me',
        period: 'February 2019',
        image: sharewithme,
        body: 'React, GraphQL, Apollo Client',
        reference: 'https://github.com/halfundecided/sharewithme-react-graphql',
        detail: 'detail1',
    },
    {
        avatar: 'M',
        code: 'movieapp',
        title: 'Movie App',
        period: 'January 2019',
        image: movieapp,
        body: 'React',
        reference: 'https://github.com/halfundecided/movie-web-react',
        detail: 'detail1',
    },
    {
        avatar: 'E',
        code: 'educoin',
        title: 'EduCoin',
        period: 'January 2018 - May 2018',
        image: educoin,
        body: 'React Native, WordPress, Python, PHP, HTML5',
        reference: 'https://github.com/halfundecided/cryptocurrency_EduCoin',
        detail: 'detail1',
    },
    {
        avatar: 'D',
        code: 'DinnerSpinner',
        title: 'Movie App',
        period: 'September 2017 - December 2017',
        image: dinnerspinner,
        body: 'HTML5, CSS3, JavaScript',
        reference: 'http://www.mijeong.me/CS146_DinnerSpinner/',
        detail: 'detail1',
    },
];

const Projects = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container spacing={4}>
            {projectData.map(project => (
                <Grid item md={6} sm={6} xs={12}>
                    <Card className={classes.root} variant="outlined">
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {project.avatar}
                                </Avatar>
                            }
                            title={project.title}
                            subheader={project.period}
                        />
                        <CardMedia className={classes.media} image={project.image} title={project.title} />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.body}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton href={project.reference} aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>{project.detail}</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Projects;
