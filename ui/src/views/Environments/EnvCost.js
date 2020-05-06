import React from 'react';

class EnvCost extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    test_data: []
  };
  }
  
  componentDidMount() {
  fetch("http://localhost:4000/api/environments/cost")
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        test_data: result
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
  const { error, isLoaded, test_data } = this.state;
  if (error) { 
    return <tr><td>Error: {error.message}</td></tr>
  } else if (!isLoaded) {
    return <tr><td>Loading...</td></tr>
  } else {
      return (
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Total</h3>
                <p className="h3 text-default"><strong>${test_data.total_cost}</strong></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Cloudera</h3>
                <p className="h3 text-default"><strong>${test_data.cldr_cost}</strong></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">AWS</h3>
                <p className="h3 text-default"><strong>${test_data.infra_cost}</strong></p>
              </div>
            </div>
          </div>
        </div>
      )
    };
  } 
}

export default EnvCost;