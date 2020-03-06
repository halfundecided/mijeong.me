import React from 'react';
import { makeStyles } from '@material-ui/core';
import '../assets/styles/index.css';

const useStyles = makeStyles(() => ({
    footer: {
        flex: 1,
        padding: '30px',
        margin: 0,
        textAlign: 'center',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <p className="footer">@ halfundecided. All rights reserved.</p>
        </div>
    );
};

export default Footer;
