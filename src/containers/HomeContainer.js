import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleListCustomers = () => {
        console.log('handleListCustomers');
        this.props.history.push('/customers')
    }

    render() {
        return (
            <div>
                <AppFrame header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleListCustomers}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);