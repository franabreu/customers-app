import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../constants';

export const customers = handleActions(
    {
        [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],

        [INSERT_CUSTOMER]: (state, action) => [ ...state, action.payload],

        [UPDATE_CUSTOMER]: (state, action) => {
            const customerPayload = action.payload; // { id: 2, nombre: 'Nuevo nombre' }
            const { id } = customerPayload;
            const customers = state;
            const initialValue = [];
            const newCustomers = customers.reduce( (acc, customer) => {
                // If the current customer of the list (customer) has the same ID as the customer we just edited (customerPayload)
                // we add the customerPayload to the acc. Else, we add the customer.
                if (customer.id === id) {
                    return [ ...acc, customerPayload]
                } else {
                    return [ ...acc, customer];
                }
            }, initialValue);
            return newCustomers;
        },

        [DELETE_CUSTOMER]: (state, action) => state.filter(
            c => c.id !== action.payload
        )
    },
    []
);