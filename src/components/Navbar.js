import React from 'react';
import { makeStyles } from '@material-ui/core';
import '../assets/styles/index.css';
import { Link } from 'react-router-dom';

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
    links: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            {/* <img src={Logo} className={classes.logo} alt="halfundecided" /> */}
            <h1 className="logo">Halfundecided</h1>
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
                <li>
                    <Link className={classes.links} to="/machine-learning">
                        Machine Learning
                    </Link>
                </li>
                <li>
                    <Link className={classes.links} to="/travel">
                        Travel
                    </Link>
                </li>
                <br />
                <br />
                <li>
                    <Link className={classes.links} to="/about">
                        About
                    </Link>
                </li>
            </ui>
        </>
    );
};

export default Navbar;
