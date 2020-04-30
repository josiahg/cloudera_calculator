import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const REnvWizard = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>Click Me</Button>
            <Modal isOpen={modal} toggle={toggle} className="wizard-fullpage modal-dailog modal-fluid modal-content">
            <ModalHeader toggle={toggle} className="modal-title">Add Environment</ModalHeader>
            <ModalBody className="modal-body">
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
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
};

export default REnvWizard;