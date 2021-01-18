import PropTypes from 'prop-types';
import { ThemeContext } from '../../../constants/themes';
import './index.css';

const Button = ({ value, type, onClick, href }) => {
   return (
      <ThemeContext.Consumer>
         {theme => (
            <p
               className={type || 'primary'}
               style={type !== 'secondary' ?
                  {color: theme.white, backgroundColor: theme.primary}
                  :
                  {color: theme.primary, backgroundColor: 'transparent'}
               }
            >
               <a className={'button-link'} onClick={onClick} href={href}>
                  {value}
               </a>
            </p>
         )}
      </ThemeContext.Consumer>
   )
}

Button.propTypes = {
   value: PropTypes.any.isRequired,
   type: PropTypes.oneOf(['primary', 'secondary']),
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