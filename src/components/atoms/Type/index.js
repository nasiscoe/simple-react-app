import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../constants/themes';

const Type = ({ children, style, type = 'p', alignLeft = undefined, alignRight = undefined }) => {
  const theme = useContext(ThemeContext);

  const getTypeSpecificStyles = () => {
    switch (type) {
      case 'h1':
        return {
          fontSize: 'calc(11px + 0.8vw)',
          fontWeight: 600,
          color: theme.text
        };
      case 'h2':
        return {
          fontSize: 'calc(9px + 0.625vw)',
          fontWeight: 600,
          color: theme.text
        };
      case 'h3':
        return {
          fontSize: 'calc(8px + 0.5vw)',
          fontWeight: 600,
          color: theme.text
        };
      case 'p':
        return {
          fontSize: 'calc(7.5px + 0.4vw)',
          fontWeight: 400,
          color: theme.text
        };
      case 'subtle':
        return {
          fontSize: 'calc(7.5px + 0.4vw)',
          fontWeight: 400,
          color: theme.subtle
        };
      case 'caption':
        return {
          fontSize: 'calc(7px + 0.375vw)',
          fontWeight: 400,
          color: theme.subtle
        };
      case 'label':
        return {
          fontSize: 'calc(7.5px + 0.4vw)',
          fontWeight: 600,
          color: theme.subtle,
          textTransform: 'uppercase'
        };
      case 'value':
        return {
          fontSize: 'calc(9px + 0.45vw)',
          fontWeight: 400,
          color: theme.text
        };
      default:
        return {};
    }
  }

  const styles = {
    text: {
      fontFamily: 'Arial, Helvetica',
      ...getTypeSpecificStyles(),
      textAlign: alignRight ? 'right' : (alignLeft ? 'left' : undefined),
      ...style
    }
  };

  return (
    <p
      className={type}
      style={styles.text}
    >
      {children}
    </p>
  );
}

Type.propTypes = {
   children: PropTypes.any,
   type: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'subtle', 'caption', 'label', 'value'])
};

export default Type;
