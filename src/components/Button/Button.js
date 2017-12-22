import React from 'react';
import PropTypes from 'prop-types';

/** Button */
function Button({ onClick, label, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}

Button.defaultProps = {
    disabled: false,
}

Button.propTypes = {
    /** HTML ID for associated input */
    onClick: PropTypes.func.isRequired,

    /** Button label */
    label: PropTypes.string.isRequired,

    /** Prop for disabling button, default value is false */
    disabled: PropTypes.bool
};



export default Button;