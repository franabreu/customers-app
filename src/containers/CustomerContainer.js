import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';


class CustomerContainer extends Component {

    renderBody = () => (
        <Route 
            path="/customer/:dni/edit" 
            children={
                ({ match }) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl { ...this.props.customer}></CustomerControl>
                }
            }>
        </Route>
    )

    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body= {this.renderBody()
                        /* <p>Datos del cliente "{this.props.customer.name}"</p> */
                    }>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default connect(mapStateToProps, null)(CustomerContainer);