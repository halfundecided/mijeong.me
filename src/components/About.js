import React from 'react';
import { makeStyles, Avatar, Grid, Fab, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import avatar from '../assets/images/avatar1.jpg';
import resume from '../assets/images/resume2020_black.pdf';

const useStyles = makeStyles(theme => ({
    aboutWrapper: {
        marginBottom: '20rem',
    },
    avatar: {
        width: theme.spacing(35),
        height: theme.spacing(35),
    },
    avatarWrapper: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(5),
        animation: `$button-animation 1.1s 1 cubic-bezier(0, 0.78, 0.58, 1)`,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    title: {
        animation: `$title-animation 2s 1 cubic-bezier(0, 0.78, 0.58, 1)`,
    },
    paragraph: {
        animation: `$paragraph-animation 2.8s 1 cubic-bezier(0, 0.78, 0.58, 1) 0.5s`,
    },
    '@keyframes button-animation': {
        '0%': {
            opacity: 0,
            transform: 'rotateX(-75deg) translateY(60px)',
        },
        '100%': {
            opacity: 1,
            transform: 'rotateX(0deg) translateY(0px)',
        },
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
    'keyframes paragraph-animation': {
        '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
        },
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.aboutWrapper}>
                <Grid item xs={12} className={classes.avatarWrapper}>
                    <Avatar alt="Mijeong" src={avatar} className={classes.avatar} />
                </Grid>
                <Grid item xs={12} className={classes.buttonWrapper}>
                    <Fab variant="extended" size="medium" color="primary" href={resume} className={classes.margin}>
                        <SearchIcon className={classes.extendedIcon} />
                        Resume
                    </Fab>
                    <Fab variant="extended" size="medium" color="primary" href="https://github.com/halfundecided" className={classes.margin}>
                        <GitHubIcon className={classes.extendedIcon} />
                        GitHub
                    </Fab>
                </Grid>

                <Typography className={classes.title} variant="h6" gutterBottom>
                    Hello
                    <span role="img" aria-label="hi">
                        🙋🏻‍♀️
                    </span>
                    , I'm Mijeong.
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    I'm a Software Developer and a Senior student pursuing B.S. in Computer Science and M.S. in Machine Learning at Stevens Institute
                    of Technology, currently based in New York City.
                </Typography>
                <Typography variant="overline" gutterBottom>
                    I like to make things that make a difference.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    I'm full-time learner, I love to learn new things. I love yoga, traveling, Web/App development.
                </Typography>
            </Grid>
        </div>
    );
};

export default About;
