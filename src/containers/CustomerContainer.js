import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        'name': 'Fran',
        'dni': 123456789,
        'age': 23
    },
    {
        'name': 'Ana',
        'dni': 987654321,
        'age': 22
    },
    {
        'name': 'Pedro',
        'dni': 987654322,
        'age': 26
    }
];

class CustomerContainer extends Component {

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
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

/* CustomerContainer.propTypes = {

}; */

export default CustomerContainer;