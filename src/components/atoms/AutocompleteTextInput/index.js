import React, { useContext } from 'react';
import Autocomplete from 'react-autocomplete';
import { ThemeContext } from '../../../constants/themes';
import cssModules from './index.module.css';

const getAccessorByString = (o, s) => {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
          o = o[k];
      } else {
          return;
      }
  }
  return o;
}

const AutocompleteTextInput = ({ name, placeholder, value, accessorString = '', items, disabled = false, onChange, onSelect, onMenuVisibilityChange, top = 0, left = 0, inputStyle, size }) => {
  const theme = useContext(ThemeContext);

  const styles = {
    menuStyle: {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: 'calc(8px + 0.4vw)',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '100%',
      top: `calc(${top} + 1vw)`,
      left: `calc(${left} + 1vw)`,
      fontFamily: 'Arial, Helvetica',
      zIndex: 3,
      cursor: 'pointer'
    }
  }

  return (
    <Autocomplete
      disabled={disabled}
      getItemValue={(item) => getAccessorByString(item, accessorString)}
      shouldItemRender={(item, value) => !disabled && getAccessorByString(item, accessorString).toLowerCase().indexOf(value.toLowerCase()) > -1}
      items={items}
      renderInput={(props) => {
        return <input {...props} style={{...inputStyle}} size={size || value?.length || placeholder?.length || undefined} placeholder={placeholder} className={cssModules[!disabled ? 'actextinput-wrapper' : 'actextinput-wrapper-disabled']} />
      }}
      renderItem={(item, isHighlighted) =>
        <div style={{ background: isHighlighted ? theme.primaryAccent : 'white', padding: '0.2em' }} >
          {getAccessorByString(item, accessorString)}
        </div>
      }
      value={value}
      onChange={!disabled ? onChange : undefined}
      onSelect={!disabled ? onSelect : undefined}
      menuStyle={styles.menuStyle}
      onMenuVisibilityChange={!disabled ? onMenuVisibilityChange : undefined}
    />
  );
}

export default AutocompleteTextInput;
