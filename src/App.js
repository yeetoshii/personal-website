import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my page. I am Yeeching, but this page is under construction</h1>
        </header>
        <Grid className="fluid">
          <Row className="show-grid">
            <Col lg={6}>
              <Row className="show-grid" id="quote-col">"人は時に、健気に生きているだけで、誰かを救っていることがある。" ~ 東野 圭吾</Row>
              <Row className="show-grid" id="biz-card"></Row>
            </Col>
            <Col id="main-view" lg={6}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
