import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../constants/themes';
import cssModules from './index.module.css';

const Button = ({ disabled, children, value, type = 'primary', size = "normal", onClick, style, href, openInNewTab = false }) => {
  const theme = useContext(ThemeContext);

  const onPress = (input) => {
    if (!disabled && onClick !== undefined) {
      onClick(input);
    }
  }

  if (disabled) {
    style = {
      ...style,
      opacity: 0.4,
      cursor: 'default'
    }
  }

  const getTypeSpecificStyles = () => {
    switch (type) {
      case 'primary':
        return {
          color: theme.body,
          backgroundColor: theme.primary,
          textDecoration: 'none'
        };
      case 'secondary':
        return {
          color: theme.primary,
          backgroundColor: theme.primaryAccent,
          textDecoration: 'none'
        };
      case 'danger':
        return {
          color: theme.danger,
          backgroundColor: theme.dangerAccent,
          textDecoration: 'none'
        };
      case 'text':
        return {
          color: theme.primary,
          backgroundColor: 'transparent',
          textDecoration: 'none'
        };
      case 'wrapper':
        return {
          backgroundColor: 'transparent'
        };
      default:
        return {};
    }
  }

  const getSizeSpecificStyles = () => {
    switch (size) {
      case 'normal':
        return {
          fontSize: 'calc(8px + 0.55vw)',
          borderRadius: '10px'
        };
      case 'small':
        return {
          fontSize: 'calc(7px + 0.425vw)',
          borderRadius: '7px'
        };
      default:
        return {};
    }
  }

  const styles = {
    buttonWrapper: {
      cursor: 'pointer',
      boxSizing: 'border-box',
      ...getTypeSpecificStyles(),
      ...getSizeSpecificStyles(),
      ...style
    }
  };

  if (type !== 'wrapper') {
    return (
      <a className={cssModules["button-link"]} onClick={(input) => onPress(input)} href={href} target={openInNewTab ? '_blank' : undefined}>
        <p
          className={cssModules[type]}
          style={styles.buttonWrapper}
        >
            {value}
        </p>
      </a>
    );
  } else {
    return (
      <a
        className={cssModules[type]}
        style={styles.buttonWrapper}
        onClick={(input) => onPress(input)}
        href={href}
        target={openInNewTab ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }
}

Button.propTypes = {
   children: PropTypes.any,
   value: PropTypes.any,
   type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'text', 'wrapper']),
   onClick: (props, propName, componentName) => {
      if (!props.onClick && !props.href) {
         return new Error(`One of props 'onClick' or 'href' was not specified in '${componentName}'.`);
      }
   },
   href: (props, propName, componentName) => {
      if (!props.onClick && !props.href) {
         return new Error(`One of props 'onClick' or 'href' was not specified in '${componentName}'.`);
      }
   }
};

export default Button;
