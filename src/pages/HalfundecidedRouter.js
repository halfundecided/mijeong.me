import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';

const HalfundecidedRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={() => <HomePage />} />
        <Route path={'/about'} component={() => <AboutPage />} />
      </Switch>
    </Router>
  );
};

export default HalfundecidedRouter;
