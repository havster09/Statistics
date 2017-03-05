import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";

const TextInput = ({name,label,onChange,placeholder,value,error}) => {
    return (
        <div>
          <label htmlFor={name}>{label}</label>
          <div>
            <input type="text"
                   name={name}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}/>
            {error && <span>{error}</span>}
          </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;
