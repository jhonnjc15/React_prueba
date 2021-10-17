import React from 'react';
import './Login1.css';
import { IconHolberton } from '../../Componentes/Login1/IconHolberton/IconHolberton';
import { UserStudent } from '../../Componentes/Login1/UserStudent/UserStudent';
import { UserPartner } from '../../Componentes/Login1/UserPartner/UserPartner';
import { UserAdmin } from '../../Componentes/Login1/UserAdmin/UserAdmin';

function Login1() {
  return (
    <div className='Login1Container'>
      <div className='Icon'>
        <IconHolberton />
      </div>
      <div className='Buttons'>
        <UserStudent />
        <UserPartner />
        <UserAdmin />
      </div>
    </div>
  );
}

export { Login1 };