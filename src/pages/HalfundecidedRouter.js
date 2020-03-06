import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import ExperiencePage from './ExperiencePage/ExperiencePage';
import ProjectPage from './ProjectPage/ProjectPage';
import SkillPage from './SkillPage/SkillPage';
import MLPage from './MLPage/MLPage';
import TravelPage from './TravelPage/TravelPage';

const HalfundecidedRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={() => <Redirect to={'/home'} />} />
                <Route path={'/home'} component={() => <HomePage />} />
                <Route path={'/about'} component={() => <AboutPage />} />
                <Route path={'/experience'} component={() => <ExperiencePage />} />
                <Route path={'/projects'} component={() => <ProjectPage />} />
                <Route path={'/skills'} component={() => <SkillPage />} />
                <Route path={'/machine-learning'} component={() => <MLPage />} />
                <Route path={'/travel'} component={() => <TravelPage />} />
            </Switch>
        </Router>
    );
};

export default HalfundecidedRouter;
