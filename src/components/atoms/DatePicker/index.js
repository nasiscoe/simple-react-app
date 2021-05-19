import React from 'react';
import cssModules from './index.module.css';

const DatePicker = ({ name, value, min, max, onChange }) => {

  return (
    <input className={cssModules['date-wrapper']} type="date"
      name={name}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
}

export default DatePicker;
