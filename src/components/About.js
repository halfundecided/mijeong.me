import React, { useState } from 'react';
import { makeStyles, Avatar, Grid, Fab, Typography, Switch } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import avatarFront from '../assets/images/avatarFront.png';
import avatarBack from '../assets/images/avatarBack.png';
import resume from '../assets/images/resume2020_black.pdf';

const useStyles = makeStyles(theme => ({
    switch: {
        textAlign: 'right',
        margin: '20px',
    },
    aboutWrapper: {
        marginBottom: '20rem',
    },
    avatarWrapper: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        perspective: `500px`,
        '&:focus': {
            '& $avatarFront': {
                transform: 'rotateX(180deg)',
            },
            '& $avatarBack': {
                transform: 'rotateX(360deg)',
            },
        },
        '&:hover': {
            '& $avatarFront': {
                transform: 'rotateX(180deg)',
            },
            '& $avatarBack': {
                transform: 'rotateX(360deg)',
            },
        },
    },
    avatarFront: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        position: `absolute`,
        WebkitBackfaceVisibility: 'hidden',
        MozBackfaceVisibility: 'hidden',
        backfaceVisivility: 'hidden',
        transition: `.8s`,
        zIndex: 1,
        boxShadow: '0 10px 8px -6px #CDCDCD',
    },
    avatarBack: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        position: `absolute`,
        WebkitBackfaceVisibility: 'none',
        MozBackfaceVisibility: 'none',
        backfaceVisivility: 'none',
        transition: `.8s`,
        transform: 'rotateX(180deg)',
        boxShadow: '0 10px 8px -6px #CDCDCD',
    },
    buttonWrapper: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(40),
        animation: `$button-animation 1.1s 1 cubic-bezier(0, 0.78, 0.58, 1)`,
        marginBottom: theme.spacing(4),
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

    const [korean, setKorean] = useState(false);

    const handleSwitch = () => {
        setKorean(!korean);
    };
    if (korean === false) {
        return (
            <div>
                <div className={classes.switch}>
                    <span>EN</span>
                    <Switch checked={korean} onChange={handleSwitch} name="korean" color="primary" />
                    <span>KR</span>
                </div>
                <Grid container className={classes.aboutWrapper}>
                    <Grid item xs={12} className={classes.avatarWrapper}>
                        <Avatar alt="Mijeong" src={avatarFront} className={classes.avatarFront} />
                        <Avatar alt="Mijeong" src={avatarBack} className={classes.avatarBack} />
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
                        I'm a Software Developer and a Senior student pursuing B.S. in Computer Science and M.S. in Machine Learning at Stevens
                        Institute of Technology, currently based in New York City.
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
    }
    return (
        <div>
            <div className={classes.switch}>
                <span>EN</span>
                <Switch checked={korean} onChange={handleSwitch} name="korean" color="primary" />
                <span>KR</span>
            </div>
            <Grid container className={classes.aboutWrapper}>
                <Grid item xs={12} className={classes.avatarWrapper}>
                    <Avatar alt="Mijeong" src={avatarFront} className={classes.avatarFront} />
                    <Avatar alt="Mijeong" src={avatarBack} className={classes.avatarBack} />
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

                <Typography className={classes.title} variant="h7" gutterBottom>
                    안녕하세요
                    <span role="img" aria-label="hi">
                        🙇🏻‍♀️
                    </span>
                    뉴욕에서 머신러닝을 공부하고있는 개발자입니다.
                </Typography>
            </Grid>
        </div>
    );
};

export default About;
