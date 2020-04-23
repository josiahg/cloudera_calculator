import React from 'react';
import './App.css';

function App() {
  return (
    <div>
    <nav id="navbarToggle" className="navbar navbar-primary navbar-expand-sm collapse show">
    <a className="navbar-brand collapsed" href="#top" aria-expanded="true" aria-label="Toggle product navigation">
      <i className="icon fa fa-calculator"></i>
      <div style={{ lineHeight: '1.15' }}>Cloudera<br />Calculator</div>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle"
      aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="my-navbar">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#dashboard" data-toggle="tooltip" data-placement="right" data-condition="truncated" title="Dashboard">
          <span className="icon fa fa-tachometer"></span>
          Dashboard
        </a>
        <a className="nav-item nav-link" href="#environments" data-toggle="tooltip" data-placement="right" data-condition="truncated" title="Environments">
          <span className="icon fa fa-cloud"></span>
          Environments
        </a>
        <a className="nav-item nav-link" href="#datahubs" data-toggle="tooltip" data-placement="right" data-condition="truncated" title="DataHub Clusters">
          <span className="icon fa fa-server"></span>
          DataHub Clusters
        </a>
        <a className="nav-item nav-link" href="#datawarehouses" data-toggle="tooltip" data-placement="right" data-condition="truncated" title="Data Warehouses">
          <span className="icon fa fa-cube"></span>
          Data Warehouses
        </a>
        <a className="nav-item nav-link" href="#mlworkspaces" data-toggle="tooltip" data-placement="right" data-condition="truncated" title="ML Workspaces">
          <span className="icon fa fa-flask"></span>
          ML Workspaces
        </a>
        <a className="nav-item nav-link" href="#storage" data-toggle="tooltip" data-placement="right" data-condition="truncated" title="Storage">
          <span className="icon fa fa-hdd-o"></span>
          Storage
        </a>
      </div>
    </div>
  </nav>
  <nav className="navbar navbar-header fixed-top">
    <ol className="breadcrumb"><li className="breadcrumb-item">Cloudera Calculator</li><li className="breadcrumb-item">Dashboard</li></ol>
  </nav>
  </div>
  );
}

export default App;
