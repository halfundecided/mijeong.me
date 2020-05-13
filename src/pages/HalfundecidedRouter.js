import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import ExperiencePage from './ExperiencePage/ExperiencePage';
import ProjectPage from './ProjectPage/ProjectPage';
import SkillPage from './SkillPage/SkillPage';
import MLPage from './MLPage/MLPage';
import TravelPage from './TravelPage/TravelPage';
import CanyonPage from './TravelPage/CanyonPage';
import LosAngelesPage from './TravelPage/LosAngelesPage';
import MiamiPage from './TravelPage/MiamiPage';
import NewyorkPage from './TravelPage/NewyorkPage';
import ParisPage from './TravelPage/ParisPage';
import SpainPage from './TravelPage/SpainPage';
import PraguePage from './TravelPage/PraguePage';
import RomePage from './TravelPage/RomePage';

const HalfundecidedRouter = () => {
    return (
        <Router>
            <Switch>
                {/* <Route exact path={'/'} component={() => <Redirect to={'/home'} />} /> */}
                <Route exact path={'/'} component={() => <HomePage />} />
                <Route path={'/about'} component={() => <AboutPage />} />
                <Route path={'/experience'} component={() => <ExperiencePage />} />
                <Route path={'/projects'} component={() => <ProjectPage />} />
                <Route path={'/skills'} component={() => <SkillPage />} />
                <Route path={'/machine-learning'} component={() => <MLPage />} />
                <Route path={'/travel'} component={() => <TravelPage />} />
                <Route path={'/travel-spain'} component={() => <SpainPage />} />
                <Route path={'/travel-canyon'} component={() => <CanyonPage />} />
                <Route path={'/travel-prague'} component={() => <PraguePage />} />
                <Route path={'/travel-rome'} component={() => <RomePage />} />
                <Route path={'/travel-paris'} component={() => <ParisPage />} />
                <Route path={'/travel-newyork'} component={() => <NewyorkPage />} />
                <Route path={'/travel-la'} component={() => <LosAngelesPage />} />
                <Route path={'/travel-miami'} component={() => <MiamiPage />} />
            </Switch>
        </Router>
    );
};

export default HalfundecidedRouter;
