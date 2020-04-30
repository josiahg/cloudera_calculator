import React from 'react';

class EnvWizard extends React.Component {
  render() {
    return (
    <div className="modal wizard-fullpage fade" id="wizardModal" tabindex="-1" role="dialog">
      <div className="modal-dialog modal-fluid">
        <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title" id="wizardModalTitle">Add Environment</div>
        </div>
        <div className="modal-body">
          <nav className="navbar navbar-primary">
          <ol className="stepper stepper-light step-1">
            <li className="active">
            <a href="javascript:void(0);">Required Options</a>
            <div className="desc">Select Cloud Provider and Region</div>
            </li>
            <li>
            <a href="javascript:void(0);">Review</a>
            <div className="desc">Infrastructure details</div>
            </li>
          </ol>
          <ol className="stepper stepper-light step-2">
            <li className="complete">
            <a href="javascript:wizardModal.goToStep(1);">Required Options</a>
            <div className="desc">Select Cloud Provider and Region</div>
            </li>
            <li className="active">
            <a href="javascript:void(0);">Review</a>
            <div className="desc">Infrastructure details</div>
            </li>
          </ol>
          <ol className="stepper stepper-light step-3">
            <li className="complete">
            <a href="javascript:wizardModal.goToStep(1);">Step A</a>
            <div className="desc">Start here</div>
            </li>
            <li className="complete">
            <a href="javascript:wizardModal.goToStep(2);">Step B</a>
            <div className="desc">Continue here</div>
            </li>
          </ol>
          </nav>
          <div className="container-fluid step-1">
          <header className="wizard-header">
            <h2>Select Cloud Provider and Region</h2>
            <p>Pricing varies by Provider and Region - define an environment to get accurate pricing for your planned deployment.</p>
          </header>
          <div className="card" id="wizardContent" style={{ height: "50vh"}}>
            <div className="card-body">
            <form>
              <div className="form-group">
              <label for="envProviderSelect">Provider</label>
              <select className="selectpicker" id="envProviderSelect">
                <option selected>Choose a Cloud Provider</option>
                <option value="AWS">AWS</option>
                <option value="Azure">Azure</option>
              </select>
              </div>
              <div className="form-group"><label for="envRegionSelect">Region</label>
              <select className="selectpicker scrollable-menu" id="envRegionSelect">
                <option selected>Choose a Cloud Region</option>
              </select>
              </div>
              <div className="form-group">
              <label for="envInputName">Environment name</label>
              <input type="text" className="form-control" id="envInputName" placeholder="Enter environment name" />
              <small id="envNameHelp" className="form-text text-muted">Choose a short descriptive name to identify this environment</small>
              </div>
            </form>
            </div>
          </div>
          </div>
          <div className="container-fluid step-2">
          <header className="wizard-header">
            <h2>Review</h2>
            <p>Environment details</p>
          </header>
          <div className="card" id="wizardContent">
            <div className="card-body">
              <h3 className="card-title">Infrastructure</h3>
              <div className="container-fluid">
              <div className="row">
                <div className="col">
                <table id="sortable-example" className="table table-hover">
                  <thead>
                  <tr>                              
                    <th className="sortable" data-sort="data-name">Role</th>
                    <th className="sortable" data-sort="data-name">Type</th>
                    <th className="sortable text-center" data-sort="data-status">Count</th>
                    <th className="sortable" data-sort="data-login">Hours</th>
                    <th className="sortable" data-sort="data-username">Provider Cost</th>
                    <th className="sortable" data-sort="data-login">Cloudera Cost</th>
                  </tr>
                  </thead>
                  <tbody className="table-data">
                  <tr>                                                  
                    <td className="primary data-name">FreeIPA Service</td>
                    <td className="data-env">m5.large</td>
                    <td className="text-center text-base data-status">1</td>
                    <td className="data-username">730</td>
                    <td className="data-login">$70</td>
                    <td className="data-login">$0</td>
                  </tr>
                  <tr>                                                  
                    <td className="primary data-name">IDBroker Service</td>
                    <td className="data-env">m5.2xlarge</td>
                    <td className="text-center text-base data-status">1</td>
                    <td className="data-username">730</td>
                    <td className="data-login">$280</td>
                    <td className="data-login">$0</td>
                  </tr>
                  <tr>                                                  
                    <td className="primary data-name">DataLake Master Node</td>
                    <td className="data-env">m5.2xlarge</td>
                    <td className="text-center text-base data-status">1</td>
                    <td className="data-username">730</td>
                    <td className="data-login">$280</td>
                    <td className="data-login">$0</td>
                  </tr>
                  <tr>                                                  
                    <td className="primary data-name">RDS DB instance</td>
                    <td className="data-env">db.m5.large</td>
                    <td className="text-center text-base data-status">1</td>
                    <td className="data-username">730</td>
                    <td className="data-login">$130</td>
                    <td className="data-login">$0</td>
                  </tr>
                  </tbody>
                </table>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default wizard-cancel-button" data-toggle="modal" data-target="#cancelWizard" data-backdrop="false">Cancel</button>
          <button type="button" className="btn btn-secondary wizard-nav-button wizard-back-button" onclick="modalWizard.back()">Back</button>
          <button type="button" className="btn btn-primary wizard-nav-button wizard-next-button" onclick="modalWizard.next()">Next</button>
          <button type="button" className="btn btn-primary wizard-nav-button wizard-finish-button" data-dismiss="modal">Finish</button>
        </div>
        <div id="cancelWizard" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="cancelWizardHeader">
          <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
            <span className="modal-title" id="cancelWizardHeader">Cancel wizard</span>
            </div>
            <div className="modal-body">
            <p>Are you sure?</p>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary wizard-nav-button" onclick="cancelConfirmation('#cancelWizard')">Cancel</button>
            <button id="finish" type="button" className="btn btn-primary wizard-nav-button" data-dismiss="modal">OK</button>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
  }
};

export default EnvWizard;