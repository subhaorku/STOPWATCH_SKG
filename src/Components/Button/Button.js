import React from 'react';
import './Button.css';

function Button({onButtonClick,children}) {
  return (
    <>
        <button className='button-styling' onClick={onButtonClick}>{children}</button>
    </>
  )
}

export default Button;