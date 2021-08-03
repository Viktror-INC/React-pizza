import React from "react";
import classLibrary from 'classnames';
import propTypes from 'prop-types'

const Button = ({myClick, myClass, outline, children}) => {
    return (
        <button onClick={myClick} className={classLibrary('button',myClass, {'button--outline' : outline})}>{children}</button>
    )
}

Button.defaultProps = {
    onClick: propTypes.func,

}


export default Button;