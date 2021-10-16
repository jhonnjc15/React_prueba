import React from 'react';
import './UserAdmin.css';
import { Link } from 'react-router-dom';

function UserAdmin() {
  return (
    <h2>
      <button className="AdminButton">
        <Link to="/login/admin"> Administrador </Link>
      </button>
    </h2>
  );
}

export { UserAdmin }