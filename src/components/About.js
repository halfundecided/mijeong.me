import React from 'react';
import { makeStyles, Avatar, Grid, Fab, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import avatar from '../assets/images/avatar.jpg';
import resume from '../assets/images/resume2020_black.pdf';

const useStyles = makeStyles(theme => ({
    aboutWrapper: {
        marginBottom: '20rem',
    },
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
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
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
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
                <Typography variant="h6" gutterBottom>
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
