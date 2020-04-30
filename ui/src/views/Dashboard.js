import React from 'react';
import { Row, Col, Container } from "reactstrap";

const Dashboard = (props) => {
  return (
    <div className="container-fluid">
      <Container className="container-fluid">
          <Row>
            <Col><h2>Monthly Estimate</h2></Col>
          </Row>
          <Row>
            <Col>
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                  <h1 className="card-title">Total</h1>
                  <p className="h1 text-default"><strong>$7,950</strong></p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card">
              <div className="card-body">
              <h3 className="card-title">Cloudera</h3>
              <p className="h3 text-default"><strong>$3,800</strong></p>
              </div>
            </div>
            
            </Col>
            <Col>
            <div className="card">
              <div className="card-body">
              <h3 className="card-title">AWS</h3>
              <p className="h3 text-default"><strong>$3,000</strong></p>
              </div>
            </div>
            </Col>
            <Col>
            <div className="card">
              <div className="card-body">
              <h3 className="card-title">Azure</h3>
              <p className="h3 text-default"><strong>$1,150</strong></p>
              </div>
            </div></Col>
          </Row>
      </Container>
    </div>
  )
}

export default Dashboard;