import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";

const SelectInput = ({name,label,onChange,defaultOption,value,error,options}) => {
    return (
        <div>
          <label htmlFor={name}>{label}</label>
          <div>
            <select name={name}
                    value={value}
                    onChange={onChange}
                    id={name}>
              <option value="">{defaultOption}</option>
              {options.map((option)=> {
                return <option key={option.value} value={option.value}>{option.text}</option>;
              })}
            </select>
            {error && <span>{error}</span>}
          </div>
        </div>
    );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SelectInput;
