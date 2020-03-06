import { createMuiTheme } from '@material-ui/core';

import ProximaNovaRegular from '../fonts/ProximaNova-Regular.woff';
import ProximaNovaBold from '../fonts/ProximaNova-Bold.woff';
import ProximaNovaThin from '../fonts/ProximaNova-Thin.woff';
import ProximaNovaLight from '../fonts/ProximaNova-Light.woff';

const proxima = [
    {
        fontFamily: 'ProximaNova',
        src: `url(${ProximaNovaRegular}) format('woff')`,
        fontWeight: 400,
        fontStyle: 'normal',
    },
    {
        fontFamily: 'ProximaNova',
        src: `url(${ProximaNovaLight}) format('woff')`,
        fontWeight: 300,
        fontStyle: 'normal',
    },
    {
        fontFamily: 'ProximaNova',
        src: `url(${ProximaNovaBold}) format('woff')`,
        fontWeight: 700,
        fontStyle: 'bold',
    },
    {
        fontFamily: 'ProximaNova',
        src: `url(${ProximaNovaThin}) format('woff')`,
        fontWeight: 100,
        fontStyle: 'normal',
    },
];

const fontStack = [
    'ProximaNova',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
];

const halfundecidedTheme = createMuiTheme({
    typography: {},
    palette: {
        primary: {
            main: '#403D39',
        },
    },
});

export default halfundecidedTheme;
