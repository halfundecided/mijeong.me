import React from 'react';
import '../../assets/styles/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import Travel from '../../components/Travel';
import Footer from '../../components/Footer';

import CanyonPage from './CanyonPage';
import LosAngelesPage from './LosAngelesPage';
import MiamiPage from './MiamiPage';
import NewyorkPage from './NewyorkPage';
import ParisPage from './ParisPage';
import SpainPage from './SpainPage';
import PraguePage from './PraguePage';
import RomePage from './RomePage';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '60px',
        [theme.breakpoints.down('xs')]: {
            padding: '15px',
        },
    },
    nav: {
        marginBottom: '70px',
    },
}));

export default function TravelPage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={20} className="wrapper">
                <Grid item md={3} xs={12} className={classes.nav}>
                    <Navbar />
                </Grid>
                <Grid item md={9} xs={12} className={classes.body}>
                    <Travel />
                </Grid>
            </Grid>
            <Grid container>
                <Footer />
            </Grid>
            <Router>
                <Switch>
                    <Route path={'/travel/spain'} component={() => <SpainPage />} />
                    <Route path={'/travel/canyon'} component={() => <CanyonPage />} />
                    <Route path={'/travel/prague'} component={() => <PraguePage />} />
                    <Route path={'/travel/rome'} component={() => <RomePage />} />
                    <Route path={'/travel/paris'} component={() => <ParisPage />} />
                    <Route path={'/travel/newyork'} component={() => <NewyorkPage />} />
                    <Route path={'/travel/la'} component={() => <LosAngelesPage />} />
                    <Route path={'/travel/miami'} component={() => <MiamiPage />} />
                </Switch>
            </Router>
        </div>
    );
}
