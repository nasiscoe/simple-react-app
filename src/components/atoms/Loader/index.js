import React, { useContext } from 'react';
import { ThemeContext } from '../../../constants/themes';
import cssModules from './index.module.css';

const Loader = (style) => {
  const theme = useContext(ThemeContext);

  const styles = {
    wrapper: {
      margin: 'auto',
      ...style
    },
    bounce: {
      backgroundColor: theme.primary
    }
  };

  return (
    <div style={styles.wrapper}>
      <div className={cssModules.spinner}>
        <div className={cssModules["double-bounce1"]} style={styles.bounce}></div>
        <div className={cssModules["double-bounce2"]} style={styles.bounce}></div>
      </div>
    </div>
  );
}

export default Loader;
