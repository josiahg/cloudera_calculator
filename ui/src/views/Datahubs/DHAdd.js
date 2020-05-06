import React from 'react';
import axios from 'axios';

class EnvAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '5',
      environment: '',
      name: '',
      provider: '',
      region: '',
      hours: '730'
    }

    this.envs = []
    this.envnames = []
    this.templates = []
    this.template_names = []
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    if(e.target.name == 'environment') {
      let selected_env = this.envs.find(o => o.name === e.target.value)
      console.log(selected_env.provider)
      console.log(selected_env.region)
      this.setState({ 
        provider: selected_env.provider,
        region: selected_env.region
      })
    }
  }

  onSubmit = (e) => {
    axios.post('http://localhost:4000/api/datahubs/add', this.state)
    .then(function (response) {
      console.log(response);
      window.location.href = '/datahubs'
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/environments")
    .then(res => res.json())
    .then(
      (result, env) => {
        for(env in result) {
          this.envs.push(result[env])
          this.envnames.push(result[env].name)
        }
        this.setState({
          isLoaded: true
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
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
                <h2 className="card-title">Add DataHub Cluster</h2>
                <h4>Select Environment and Template</h4>
                <p>Something smart about templates</p>
                <form>
                <div className="form-group">
                <label htmlFor="envProviderSelect">Environment</label>
                <select name="environment" value={this.state.environment} onChange={this.onChange}>
                <option defaultValue>Choose an Environment</option>
                {this.envnames.map((env) =>
                  <option value={env.toString()} key={env.toString()}>{env}</option>
                  )}
                </select>
                </div>
                <div className="form-group"><label htmlFor="templateSelect">Template</label>
                <select name="region" value={this.state.template} onChange={this.onChange}>
                <option defaultValue>Choose a Template</option>
                <option value="opdb-sql">Operational Database with SQL</option>
                </select>
                </div>
                <div className="form-group">
                <label htmlFor="envInputName">Cluster name</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter cluster name" />
                <small id="envNameHelp" className="form-text text-muted">Choose a short descriptive name to identify this DataHub Cluster</small>
                </div>
                <div className="form-group">
                <label for="envInputName">Hours Running / Month</label>
                <input type="number" className="form-control" name="hours" value={this.state.hours} onChange={this.onChange} placeholder="730" />
                <small id="envNameHelp" className="form-text text-muted">Enter the number of hours per month this cluster will run.</small>
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