import React, { useContext } from 'react';
import { ThemeContext } from '../../../constants/themes';
import cssModules from './index.module.css';

const Select = ({ name, placeholder, value, onChange, options, style, disabled = false }) => {
  const theme = useContext(ThemeContext);

  if (!value) {
    value = "";
  }

  return (
    <select className={cssModules['select-wrapper']} style={{...style, color: (!!placeholder && value === "") ? theme.subtle : theme.text}} name={name} defaultValue={!!placeholder ? "" : undefined} value={value} onChange={onChange} disabled={disabled}>
      {!!placeholder ?
        <option value="" disabled>{placeholder}</option>
        :
        null
      }
      {options?.map((option, optionKey) => {
        return (
          <option value={option} key={optionKey}>{option}</option>
        );
      })}
    </select>
  );
}

export default Select;
