import React from 'react';
import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';


import Dashboard from './views/Dashboard'
import Environments from './views/Environments/Environments'
import EnvAdd from './views/Environments/EnvAdd'
import Datahubs from './views/Datahubs/Datahubs'
import MLWorkspaces from './views/MLWorkspaces'
import StorageCal from './views/StorageCal'
import Warehouses from './views/Warehouses'

const App = (props) => {
  return (
  <div>
    <Nav vertical className="navbar navbar-primary navbar-expand-sm collapse show">
    <a className="navbar-brand collapsed" href="/#">
      <i className="icon fa fa-calculator"></i>
      <div style={{ lineHeight: '1.15' }}>Cloudera<br /> Calculator</div>
    </a>
    <NavItem className="navbar-nav">
      <NavLink className="nav-item nav-link" href="/dashboard">
      <span className="icon fa fa-tachometer"></span>
      Dashboard
      </NavLink>
    </NavItem>
    <NavItem className="navbar-nav">
      <NavLink className="nav-item nav-link" href="/environments">
      <span className="icon fa fa-cloud"></span>
      Environments
      </NavLink>
    </NavItem>
    <NavItem className="navbar-nav">
      <NavLink className="nav-item nav-link" href="/datahubs">
      <span className="icon fa fa-server"></span>
      DataHub Clusters
      </NavLink>
    </NavItem>
    <NavItem className="navbar-nav">
      <NavLink className="nav-item nav-link" href="/warehouses">
      <span className="icon fa fa-cube"></span>
      Data Warehouses
      </NavLink>
    </NavItem>
    <NavItem className="navbar-nav">
      <NavLink className="nav-item nav-link" href="/mlworkspaces">
      <span className="icon fa fa-flask"></span>
      ML Workspaces
      </NavLink>
    </NavItem>
    <NavItem className="navbar-nav">
      <NavLink className="nav-item nav-link" href="/storage">
      <span className="icon fa fa-hdd-o"></span>
      Storage
      </NavLink>
    </NavItem>
    </Nav>
    <Nav className="navbar navbar-header fixed-top">
    <ol className="breadcrumb"><li className="breadcrumb-item">Cloudera Calculator</li><li className="breadcrumb-item">Dashboard</li></ol>
    </Nav>
    <main id="mainContent">
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/environments" component={Environments}/>
      <Route path="/datahubs" component={Datahubs}/>
      <Route path="/warehouses" component={Warehouses}/>
      <Route path="/mlworkspaces" component={MLWorkspaces}/>
      <Route path="/storage" component={StorageCal}/>
      <Route path="/envadd" component={EnvAdd}/>
      <Redirect from="/" to="/dashboard" />          
    </Switch>
    </main>
  </div>
  )
}

export default App;
