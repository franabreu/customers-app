import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllowed, onDelete }) => {
    return (
        <div>
            <div className='customer-data'>
                <h2>Datos del cliente</h2>
                <div>
                    <strong>Nombre: </strong><i>{name}</i>
                </div>
                <div>
                    <strong>DNI: </strong><i>{dni}</i>
                </div>
                <div>
                    <strong>Edad: </strong><i>{age}</i>
                </div>
                <CustomersActions>
                    <button onClick={onBack}>Volver</button>
                    {isDeleteAllowed && <button onClick={() => onDelete(id)}>Eliminar</button>} 
                </CustomersActions> 
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllowed: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default CustomerData;