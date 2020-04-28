import React from 'react';
//import { Row, Col, Container } from "reactstrap";

const Environments = (props) => {
    return (
      <div>
        <br/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Usage</h3>
                  <p>Each CDP Environment requires a Data Lake. The Data Lake includes the SDX components and acts as the shared services layer across the environment.</p>
                  <p>Cloudera provides the Data Lake at no cost. Infrastructure costs must be accounted for.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

export default Environments;