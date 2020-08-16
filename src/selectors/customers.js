import { createSelector } from 'reselect';

export const getCustomers = state => state.customers;

export const getCustomerByDni = createSelector(
    (state, props) => state.customers.find(c => c.dni === parseInt(props.dni)),
    customer => customer
);
