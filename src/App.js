import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import halfundecidedTheme from './assets/styles/halfundecidedTheme';
import HalfundecidedRouter from './pages/HalfundecidedRouter';

const App = () => {
    return (
        <ThemeProvider theme={halfundecidedTheme}>
            <HalfundecidedRouter />
        </ThemeProvider>
    );
};

export default App;
