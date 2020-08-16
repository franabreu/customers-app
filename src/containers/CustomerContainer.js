import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

class CustomerContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }


    handleAddNew = () => {
        this.props.history.push('/customers/new')
    }

    renderBody = customers => (
        < div >
            <CustomersList
                customers={customers}
                urlPath={'customer/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame
                    header={'Listado de clientes'}
                    body={this.renderBody(this.props.customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
};

CustomerContainer.defaultProps = {
    customers: []
};

const mapDispatchToProps = { fetchCustomers };

const mapStateToProps = state => ({
    customers: state.customers
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));