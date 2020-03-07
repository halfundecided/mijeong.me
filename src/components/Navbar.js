import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, IconButton, Grid, Switch, withStyles } from '@material-ui/core';
import '../assets/styles/index.css';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

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

// const AntSwitch = withStyles(theme => ({
//     root: {
//         width: 28,
//         height: 16,
//         padding: 0,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//         // border: '1px solid blue',
//     },
//     switchBase: {
//         padding: 2,
//         color: theme.palette.grey[500],
//         '&$checked': {
//             transform: 'translateX(12px)',
//             color: theme.palette.common.white,
//             '& + $track': {
//                 opacity: 0.8,
//                 backgroundColor: theme.palette.primary.main,
//                 borderColor: theme.palette.primary.main,
//             },
//         },
//     },
//     thumb: {
//         width: 12,
//         height: 12,
//         boxShadow: 'none',
//     },
//     track: {
//         border: `1px solid ${theme.palette.grey[500]}`,
//         borderRadius: 16 / 2,
//         opacity: 0.8,
//         backgroundColor: theme.palette.common.white,
//     },
//     checked: {},
// }))(Switch);

const Navbar = () => {
    const classes = useStyles();

    // const [state, setState] = React.useState({
    //     checkedA: true,
    // });

    // const handleChange = name => event => {
    //     setState({ ...state, [name]: event.target.checked });
    // };

    return (
        <>
            <Link className={classes.links} to="/">
                <h1 className="logo">Halfundecided</h1>
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
                <IconButton>
                    <InstagramIcon href="https://www.instagram.com/__mijeong_is__/" />
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
