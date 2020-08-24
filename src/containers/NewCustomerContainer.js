import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import PropTypes from 'prop-types'; */
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { withRouter } from 'react-router-dom';

class NewCustomerContainer extends Component {

    handleSubmit = values => {
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit()}
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

};

export default withRouter(connect(null, null)(NewCustomerContainer));