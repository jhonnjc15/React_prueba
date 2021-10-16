import React from 'react';
import './UserStudent.css';
import { Link } from 'react-router-dom';


function UserStudent() {
  return (
    <h2>
      <button className="StudentButton">
      <Link to="/login/estudiante"> Estudiante o egresado </Link>
      </button>
    </h2>
  );
}

export { UserStudent }