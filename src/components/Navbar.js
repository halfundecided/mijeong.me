import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, IconButton } from '@material-ui/core';
import '../assets/styles/index.css';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
    box: {
        transform: 'translate(-36%, -15%)',
        width: '640px',
        textAlign: 'center',
    },
    title: {
        display: 'inline-block',
        textAlign: 'center',
        margin: '0 auto',
        '&:after': {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '22px',
            width: '0%',
            background: '#999',
            animation: `$widthize70 .6s 1 cubic-bezier(.7, 0, .175, 1) forwards`,
            whiteSpace: 'nowrap',
        },
    },
    div: {
        display: 'inline-block',
        textAlign: 'center',
        overflow: 'hidden',
        width: '0%',
        animation: `$widthize100 .8s 1 .3s cubic-bezier(.7, 0, .175, 1) forwards`,
        whiteSpace: 'nowrap',
    },
    logo: {
        display: 'inline-block',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    '@keyframes widthize70': {
        '0%': {
            width: '0%',
        },
        '100%': {
            width: '70%',
        },
    },
    '@keyframes widthize100': {
        '0%': {
            width: '0%',
        },
        '100%': {
            width: '100%',
        },
    },
    nav: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        lineHeight: '2.2em',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '-1',
        color: '#4a4a4a',
    },
    links: {
        textDecoration: 'none',
        color: '#4D4D4D',
    },
    icons: {
        marginTop: '10px',
        marginLeft: '-8px',
    },
    switch: {
        float: 'right',
        marginRight: '25px',
        marginTop: '10px',
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <Link className={classes.links} to="/">
                <div className={classes.box}>
                    <h2 className={classes.title}>
                        <div className={classes.div}>
                            <span className={classes.logo}>Halfundecided.</span>
                        </div>
                    </h2>
                </div>
            </Link>
            <ui className={classes.nav}>
                <li>
                    <Link className={classes.links} to="/experience">
                        Experience
                    </Link>
                </li>
                <li>
                    <Link className={classes.links} to="/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className={classes.links} to="/skills">
                        Skills
                    </Link>
                </li>
                {/* <li>
                    <Link className={classes.links} to="/machine-learning">
                        Machine Learning
                    </Link>
                </li> */}
                <li>
                    <a className={classes.links} href="https://www.mijeong.life/">
                        Blog
                    </a>
                </li>
                {/* <li>
                    <Link className={classes.links} to="/travel">
                        Travel
                    </Link>
                </li> */}
                <br />
                <br />
                <li>
                    <Link className={classes.links} to="/about">
                        About
                    </Link>
                </li>
            </ui>
            <div className={classes.icons}>
                <IconButton href="https://github.com/halfundecided">
                    <GitHubIcon />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/halfundecided/">
                    <LinkedInIcon />
                </IconButton>
                <IconButton>
                    <MailOutlineIcon href="mailto:qksalwjd93@gmail.com" />
                </IconButton>
                <IconButton href="https://www.instagram.com/__mijeong_is__/">
                    <InstagramIcon />
                </IconButton>
            </div>
            {/* <div className={classes.switch}>
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>KR</Grid>
                    <Grid item>
                        <AntSwitch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                    </Grid>
                    <Grid item> EN</Grid>
                </Grid>
            </div> */}
        </>
    );
};

export default Navbar;
