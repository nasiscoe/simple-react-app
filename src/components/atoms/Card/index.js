import React, { useContext } from 'react';
import { ThemeContext } from '../../../constants/themes';
import cssModules from './index.module.css';

const Card = ({children, onClick = undefined, style}) => {
  const theme = useContext(ThemeContext);

  const styles = {
    background: {
      width: 'auto',
      height: 'auto',
      backgroundColor: theme.card,
      boxSizing: 'border-box',
      padding: '1em',
      borderRadius: '0.5em',
      margin: '0.5em',
      transition: 'all 0.1s ease',
    },
  };

  return (
    <div
      style={{...styles.background, ...style}} onClick={onClick}
      className={onClick ? cssModules['clickable-card'] : null}
    >
      {children}
    </div>
  );
}

export default Card;
