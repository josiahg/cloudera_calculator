import React from 'react';

class EnvList extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    test_data: []
  };
  }
  
  //test_data = []
  //     { id: '1', name: 'demo-aws', provider: 'AWS', region: 'us-east-1', hours: '730' }, 
  //     { id: '2', name: 'demo-aws2', provider: 'AWS', region: 'us-east-1', hours: '730' }
  // ];
  
  componentDidMount() {
  fetch("http://localhost:4000/api/environments")
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        test_data: result.environments
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
    return test_data.map((env, index) => {
      const { id, name, provider, region, hours } = env
      return (
        <tr id={id}> 
          <td className="primary data-name"><a href="#">{name}</a></td>    
          <td className="text-center text-base data-status">
          <i className="icon fa fa-amazon"/>
          <span className="sr-only">{provider}</span>
          </td>    
          <td className="data-username">{region}</td>    
          <td className="data-login">{hours}</td>    
          <td>
          <ul className="actions">
            <li>
            <a href="#">
            <i className="icon fa fa-pencil" data-toggle="tooltip" data-placement="right" title="Edit"></i>
            </a>        
            </li>        
            <li className="del-can">          
            <a href="#" className="del-can">
            <i className="icon fa fa-trash del-can" data-toggle="tooltip" data-placement="right" title="Delete"></i>
            </a>        
            </li>      
          </ul>
          </td>    
          <th scope="row" className="text-center">      
          <div className="form-check">
            <input className="form-check-input table-example-check" type="checkbox" value="1" id="row1" />        
            <label className="form-check-label" htmlFor="row1"></label>      
          </div>    
          </th>  
        </tr>
        )
      })
    };
  } 
}

export default EnvList;