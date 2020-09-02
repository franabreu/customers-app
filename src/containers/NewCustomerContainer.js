import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { withRouter } from 'react-router-dom';
import { insertCustomer } from '../actions/insertCustomer';

class NewCustomerContainer extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values);
            /* .then(res => {
                if (res.error) {
                    throw new SubmissionError(res.payload);
                }
            }); */
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onBack={this.handleOnBack}>
        </CustomerEdit>
    }

    render() {
        return (
            <div>
                <AppFrame header="Crear nuevo cliente"
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));