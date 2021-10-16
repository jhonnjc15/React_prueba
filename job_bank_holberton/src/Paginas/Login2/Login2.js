import React from 'react';
import './Login2.css';
import { IconHolberton } from '../../Componentes/Login2/IconHolberton/IconHolberton';
import { Login } from '../../Componentes/Login2/Login/Login';


function Login2() {
  return (
    <div className='Login2Container'>
      <div className='Icon'>
        <IconHolberton />
      </div>
      <div className='BoxLogin'> 
        <Login />
      </div>
    </div>
  );
}

export { Login2 };