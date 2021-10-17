import React from 'react';
import './UserPartner.css';
import { Link } from 'react-router-dom';


function UserPartner() {
  return (
    <h2>
      <button className="PartnerButton">
      <Link to="/login/empresa"> Empresa </Link>
      </button>
    </h2>
  );
}

export { UserPartner }