import React from 'react';
import cssModules from './index.module.css';

const TextInput = ({ name, placeholder, value, onChange, size = undefined, width = 60, format = undefined, min = undefined, max = undefined, alignRight, style, disabled = false }) => {

  switch(format) {
    case 'number':
      return (
        <input className={cssModules['textinput-wrapper']}
          name={name}
          placeholder={placeholder}
          value={value}
          style={{width, textAlign: alignRight ? 'right' : 'left', ...style}}
          type="number"
          min={min}
          max={max}
          disabled={disabled}
          onChange={onChange}
        />
      );
    case 'money':
      return (
        <input className={cssModules['textinput-wrapper']}
          name={name}
          placeholder={placeholder}
          value={value}
          style={{width, textAlign: alignRight ? 'right' : 'left', ...style}}
          type="number"
          step="0.01"
          min={min}
          max={max}
          disabled={disabled}
          onChange={onChange}
        />
      );
    case 'search':
      return (
        <input className={cssModules['textinput-wrapper']}
          name={name}
          placeholder={placeholder}
          value={value}
          style={{textAlign: alignRight ? 'right' : 'left', ...style}}
          size={size || value?.length || placeholder?.length || undefined}
          disabled={disabled}
          onChange={onChange}
          type="search"
        />
      );
    default:
      return (
        <input className={cssModules['textinput-wrapper']}
          name={name}
          placeholder={placeholder}
          value={value}
          style={{textAlign: alignRight ? 'right' : 'left', ...style}}
          size={size || value?.length || placeholder?.length || undefined}
          disabled={disabled}
          onChange={onChange}
        />
      );
  }
}

export default TextInput;
