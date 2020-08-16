import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

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
]

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);