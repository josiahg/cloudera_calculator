import React from 'react';
import axios from 'axios';

class EnvAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '5',
      name: '',
      provider: '',
      region: '',
      hours: '730'
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    axios.post('http://localhost:4000/api/environments/add', this.state)
    .then(function (response) {
      console.log(response);
      window.location.href = '/environments'
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <br/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                <h2 className="card-title">Add Environment</h2>
                <h4>Select Cloud Provider and Region</h4>
                <p>Pricing varies by Provider and Region - define an environment to get accurate pricing for your planned deployment.</p>
                <form>
                <div className="form-group">
                <label htmlFor="envProviderSelect">Provider</label>
                <select name="provider" value={this.state.provider} onChange={this.onChange}>
                <option defaultValue>Choose a Cloud Provider</option>
                <option value="AWS">AWS</option>
                <option value="Azure">Azure</option>
                </select>
                </div>
                <div className="form-group"><label for="envRegionSelect">Region</label>
                <select name="region" value={this.state.region} onChange={this.onChange}>
                <option defaultValue>Choose a Cloud Region</option>
                <option value="us-east-1">us-east-1</option>
                </select>
                </div>
                <div className="form-group">
                <label for="envInputName">Environment name</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter environment name" />
                <small id="envNameHelp" className="form-text text-muted">Choose a short descriptive name to identify this environment</small>
                </div>
                </form>
                <br />
                
                  <button onClick={this.onSubmit} className="btn btn-primary">Done</button>
                
                </div>
              </div>
            </div>
        </div>
        </div>      
      </div>
    )
  };
}
  
export default EnvAdd;