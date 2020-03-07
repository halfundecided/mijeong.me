import React, { useState } from 'react';
import { makeStyles, Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import fractionWeb from '../assets/images/fractionweb.png';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '90%', // 16:9
        filter: 'brightness(70%)',
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
        body: 'input1',
        reference: 'https://fraction.rent/',
        detail: 'detail1',
    },
    {
        avatar: 'F',
        code: 'fraction2',
        title: 'Fraction App',
        period: 'Currently Working',
        image: '',
        body: 'input2',
        reference: '',
        detail: 'detail1',
    },
    {
        avatar: 'C',
        code: 'consiliumq',
        title: 'ConsiliumQ',
        period: 'Currently Working',
        image: '',
        body: 'input1',
        reference: '',
        detail: 'detail1',
    },
    {
        avatar: 'M',
        code: 'mood',
        title: 'Mood',
        period: 'Currently Working',
        image: '',
        body: 'input1',
        reference: '',
        detail: 'detail1',
    },
    {
        avatar: 'R',
        code: 'rateit',
        title: 'RateIt',
        period: 'Currently Working',
        image: '',
        body: 'input1',
        reference: '',
        detail: 'detail1',
    },
    {
        avatar: 'S',
        code: 'sharewithme',
        title: 'Share With Me',
        period: 'Currently Working',
        image: '',
        body: 'input1',
        reference: '',
        detail: 'detail1',
    },
    {
        avatar: 'M',
        code: 'movieapp',
        title: 'Movie App',
        period: 'Currently Working',
        image: '',
        body: 'input1',
        reference: '',
        detail: 'detail1',
    },
    {
        avatar: 'E',
        code: 'educoin',
        title: 'EduCoin',
        period: 'Currently Working',
        image: '',
        body: 'input1',
        reference: '',
        detail: 'detail1',
    },
    {
        avatar: 'D',
        code: 'DinnerSpinner',
        title: 'Movie App',
        period: 'Currently Working',
        image: '',
        body: 'input1',
        reference: '',
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
        <Grid container spacing={4} className="project">
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
