import React from 'react';
import {Link} from 'react-router-dom';

import EnvUsage from './EnvUsage'
import EnvList from './EnvList'

const Environments = (props) => {
  return (
    <div>
    <br/>
    <div className="container-fluid">
      <EnvUsage />
      <div className="row">
      <div className="col">
        <div className="card">
        <div className="card-body">
          <h3 className="card-title">Environments</h3>
          <div className="container-fluid">
          <div className="row">
            <div className="col-3">
            <div className="input-group table-search">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
              <button className="btn btn-primary" type="button"><i className="icon-search"></i></button>
              </div>
            </div>
            </div>
            <div className="col-9 text-right">
              <Link to="/envadd">
              <button className="btn btn-primary">Add Environment</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <table id="sortable-example" className="table table-hover">
              <thead>
              <tr>
                <th className="sortable" data-sort="data-name">Name</th>
                <th className="sortable text-center" data-sort="data-status">Provider</th>
                <th className="sortable" data-sort="data-username">Region</th>
                <th className="sortable" data-sort="data-login">Hours</th>
                <th>Actions</th>
                <th className="text-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="checkAll"/>
                  <label className="form-check-label" htmlFor="checkAll"></label>
                </div>
                </th>
              </tr>
              </thead>
              <tbody className="table-data" id="envListTable">
              <EnvList />
              </tbody>
              <tfoot>
              </tfoot>
            </table>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>      
  )
};

export default Environments;