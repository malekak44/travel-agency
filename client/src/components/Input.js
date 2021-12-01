import React from 'react';

const Input = ({ type, value, placeholder }) => {
    return (
        <input
            type={type}
            value={value}
            autoComplete="off"
            placeholder={placeholder}
        />
    );
};

export default Input;