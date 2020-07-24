import React from 'react';

const Input = (props) => {
    const { input, meta, placeholder, type } = props;
    const { error, touched } = meta;
    return (
        <div>
            <input {...input} placeholder={placeholder} type={type} />
            {
                error && touched &&
                <span className='error'>{error}</span>
            }
        </div>
    )
}

export default Input;