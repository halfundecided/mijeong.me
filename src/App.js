import React, { useState } from 'react';
import ReactGA from 'react-ga';
import HalfundecidedRouter from './pages/HalfundecidedRouter';
import './App.css';
import { Row, Col, Button } from 'antd';

ReactGA.initialize('UA-166904526-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [dark, setDark] = useState(false);
  return (
    <Row justify="center" className={dark ? `App-dark` : `App`}>
      <Col>
        <div className="dark-mode-selector">
          <Button
            className="dark-mode-button"
            type="text"
            size="large"
            onClick={() => setDark(!dark)}
          >
            {dark ? `🌞` : `🌚`}
          </Button>
        </div>
        <HalfundecidedRouter />
      </Col>
    </Row>
  );
}

export default App;
