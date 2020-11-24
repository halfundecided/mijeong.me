import React from 'react';
import HalfundecidedRouter from './pages/HalfundecidedRouter';
import './App.css';
import { Row, Col } from 'antd';

function App() {
  return (
    <Row justify="center" className="App">
      <Col>
        <HalfundecidedRouter />
      </Col>
    </Row>
  );
}

export default App;
