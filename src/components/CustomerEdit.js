import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router';

const isRequired = value => (
    !value && "Este campo es obligatorio"
);

const isNumber = value => (
    isNaN(Number(value)) && "Este campo debe ser numérico"
);

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";
    }

    if (!values.dni) {
        error.dni = "El campo DNI es obligatorio";
    }

    if (isNaN(Number(values.age))) {
        error.age = "Este campo edad ser numérico";
    }

    return error;
};

/* const MyField = ({ input, meta, type, name, label }) => (
    <div>
        <label htmlFor={name}>{label} </label>
        <div>
            <input {...input} type={!type ? "text" : type}></input>
            {
                meta.touched && meta.error && <span className='form-error'>{meta.error}</span>
            }
        </div>
    </div>
); */

const toNumber = value => value && Number(value);

class CustomerEdit extends Component {

    renderField = ({ input, meta, type, name, label }) => (
        <div>
            <label htmlFor={name}>{label} </label>
            <div>
                <input {...input} type={!type ? "text" : type}></input>
                {
                    meta.touched && meta.error && <span className='form-error'>{meta.error}</span>
                }
            </div>
        </div>
    );

    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div>
                <h2>Edición del cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="name"
                        label="Nombre"
                        component={this.renderField}
                        validate={isRequired}>
                    </Field>
                    <Field
                        name="dni"
                        label="DNI"
                        component={this.renderField}
                        validate={isRequired}>
                    </Field>
                    <Field
                        name="age"
                        label="Edad"
                        type="number"
                        component={this.renderField}
                        validate={isNumber}
                        parse={toNumber}>
                    </Field>
                    <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>
                            Aceptar
                        </button>
                        <button type="button" onClick={onBack} disabled={submitting}>
                            Calcelar
                        </button>
                    </CustomersActions>
                    <Prompt 
                        when={!pristine && !submitSucceeded}
                        message={"¿Está seguro de que desea cancelar? Se perderán las modificaciones realizadas."}>
                    </Prompt>
                </form>
            </div>
        );
    }
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    }
)(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);