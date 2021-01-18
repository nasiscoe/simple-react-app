import PropTypes from 'prop-types';
import { ThemeContext } from '../../../constants/themes';
import './index.css';

const Type = ({ children, type }) => {
   return (
      <ThemeContext.Consumer>
         {theme => (
            <p
               className={type || 'p'}
               style={{color: type !== 'caption' ? theme.text : theme.subtle}}
            >
               {children}
            </p>
         )}
      </ThemeContext.Consumer>
   )
}

Type.propTypes = {
   children: PropTypes.any.isRequired,
   type: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'caption'])
};

export default Type;