import PropTypes from 'prop-types';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    Button.propTypes = {
      children: PropTypes.node.isRequired, // Node es cualquier elemento React, como texto, componentes, etc.
      type: PropTypes.string.isRequired, // Se espera una cadena y es requerida
      onClick: PropTypes.func.isRequired, // Se espera una función y es requerida
      buttonStyle: PropTypes.string.isRequired, // Se espera una cadena y es requerida
      buttonSize: PropTypes.string.isRequired // Se espera una cadena y es requerida
    };

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
  
};
