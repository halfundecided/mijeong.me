import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './HomePage/HomePage';

const HalfundecidedRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={() => <Redirect to={'/home'} />} />
                <Route path={'/home'} component={() => <HomePage />} />
            </Switch>
        </Router>
    );
};

export default HalfundecidedRouter;
