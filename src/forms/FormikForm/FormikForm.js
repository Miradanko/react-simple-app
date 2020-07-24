import React from 'react';
import { connect } from 'react-redux';
import { Field, Formik, ErrorMessage, Form } from 'formik';
// import { setSubmitting, resetForm } from 'formik';
import { FormSchema } from './FormSchema';
import { setPurchaseData, clearCart, getTotal } from '../../store/actions/actions';
import {withRouter} from 'react-router-dom'
import './FormikForma.scss';


const FormikForm = (props) => {
    const { setNewOrder, cart, clearCart, getTotal} = props; 

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const purchaseArray = {
            userData: [values],
            products: [cart]
        };

        setTimeout(() => {
            setNewOrder(purchaseArray);
            resetForm();
            setSubmitting(false);
            localStorage.clear();
            clearCart();
            getTotal();
            props.history.push('/')
        }, 1000);
        console.log("FORM DATA", purchaseArray)
    }

    return (
        <div className='form'>
            <Formik initialValues={{ firstName: '', lastName: '', age: '', address: '', tel: '' }}
                validationSchema={FormSchema}
                // validate={(values) => {
                //     // return {login: 'Login Error'}
                //     const errors = {};

                //     if (values.password !== values.confirmPassword) {
                //         errors.confirmPassword = 'Password do not match'
                //     }

                //     return errors
                // }}
                onSubmit={handleSubmit}
            >
                {(formikProps) => {
                    // console.log('Formik props', formikProps)
                    return (
                        <Form>
                            <Field className='form-input' component='input' type='text' name='firstName' placeholder='First Name' />
                            <span className='error'><ErrorMessage name='firstName' /></span>
                            <Field className='form-input' component='input' type='text' name='lastName' placeholder='Last Name' />
                            <span className='error'><ErrorMessage name='lastName' /></span>
                            <Field className='form-input' component='input' type='data' name='age' placeholder='Age' />
                            <span className='error'><ErrorMessage name='age' /></span>
                            <Field className='form-input' component='input' type='text' name='address' placeholder='Address' />
                            <span className='error'><ErrorMessage name='address' /></span>
                            <Field className='form-input' component='input' type='tel' name='tel' placeholder='(093)-810-7132' />
                            <span className='error'><ErrorMessage name='tel' /></span>
                            {/* <div>
                                <button type='button' onClick={handleReset}>Reset</button>
                            </div> */}
                            <div>
                                <button className='form-submit' type='submit' disabled={formikProps.isSubmitting}>Submit form</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
};

const mapStateToProps = (store) => {
    return {
        purchase: store.purchase,
        cart: store.cart.cartArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewOrder: (data) => dispatch(setPurchaseData(data)),
        clearCart: () => dispatch(clearCart()),
        getTotal: () => dispatch(getTotal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormikForm));