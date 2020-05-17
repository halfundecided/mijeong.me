import React from 'react';
import ReactGA from 'react-ga';
import { ThemeProvider } from '@material-ui/core/styles';
import halfundecidedTheme from './assets/styles/halfundecidedTheme';
import HalfundecidedRouter from './pages/HalfundecidedRouter';

ReactGA.initialize('UA-166904526-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
    return (
        <ThemeProvider theme={halfundecidedTheme}>
            <HalfundecidedRouter />
        </ThemeProvider>
    );
};

export default App;
