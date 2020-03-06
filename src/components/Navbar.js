import React from 'react';
import { makeStyles } from '@material-ui/core';
import Logo from '../assets/images/logo.png';

const useStyles = makeStyles(theme => ({
    logo: {
        height: 50,
        margin: 0,
        padding: 0,
        marginLeft: '-30px',
        marginBottom: '20px',
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
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <img src={Logo} className={classes.logo} alt="halfundecided" />
            <ui className={classes.nav}>
                <li>Experience</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Machine Learning</li>
                <li>Travel</li>
                <br />
                <br />
                <li>About</li>
            </ui>
        </>
    );
};

export default Navbar;
