import React from "react";
import './NavPuesto.css';
import logo from "./ImagenesNav/holberton-logo.png";
import UserIcon from "./ImagenesNav/user-icon.png";

function NavPuesto() {
  return (
    <header className="App-header">
      <div className="logo-container">
        <img src={ logo } className="logo" alt="logo holberton" />
      </div>
      <nav>
        <div className="nav-button">
          <div className="puestos-div">
            <a className="puestos-button" href="#">Puestos de Trabajo</a>
          </div>
          <div className="postulaciones-div">
            <a className="postulaciones-button" href="#">Mis Postulaciones</a>
          </div>
        </div>
      </nav>
      <div className="userprofilecontainer">
        <div className="userprofile">
          <a className="profile-button" href="#">
            <img src={ UserIcon } className="usericon" alt="imagen de usuario" />
            <button className="name-button">Bill Gates</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavPuesto;
