import React from 'react';
import './ItemJob.css';
import { Link, link } from 'react-router-dom';

function ItemJob(props) {
  return (
    <Link to={`/estudiante/puestos-de-trabajo/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}> 
      <li className='OneJob'>

          <h2>{props.titulo}</h2>

        <h3>{props.ciudad}</h3>
        <p>{props.descripcion.slice(0, 250) + "..."}</p>
        <p>Experiencia: {props.añosDeExperiencia}</p>
      </li>
    </Link>
  );
}

export { ItemJob }
