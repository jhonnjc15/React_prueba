import React from "react";
import Data from "../../data/puestodata.json";
import "./PuestoInfo.css";

function PuestoInfo() {

  function Travel_aval() {
    const arreglo = Data.map((dataDetail, i) => {
      return dataDetail
    });
    if (arreglo[0].travel_availability === 0) {
      return 'no disponible'
    } else {
      return 'disponible'
    }
  }

  function Contract_type() {
    const arreglo = Data.map((dataDetail, i) => {
      return dataDetail
    });
    if (arreglo[0].contract_type === 0) {
      return 'Contrato indeterminado.'
    } else if (arreglo[0].contract_type === 1){
      return 'Contrato sujeto a modalidad.'
    } else {
      return 'Contrato a tiempo parcial'
    }
  }

  function Pres_or_remote() {
    const arreglo = Data.map((dataDetail, i) => {
      return dataDetail
    });
    if (arreglo[0].pres_or_remote === 0) {
      return 'Presencial.'
    } else if (arreglo[0].pres_or_remote === 1){
      return 'Remoto'
    } else {
      return 'Presencial o remoto'
    }
  }

  return (
    <div className="info-container">
      <div className="description-container">
        <div className="description-title">
          <p>Descripción</p>
        </div>
        <div className="description-content">
          {Data.map((dataDetail, index) =>{
            return <div>
              <p>{dataDetail.description}</p>
            </div>
          })}
        </div>
      </div>
      <div className="requirements-container">
        <div className="requirements-title">
          <p>Requerimientos y especificaciones</p>
        </div>
        <div className="requirements-content">
          {Data.map((dataDetail, index) =>{
            return <div>
              <p>Experiencia: {dataDetail.experience}</p>
              <p>Disponibilidad de viajar: <Travel_aval /></p>
              <p>Tipo de contrato: <Contract_type /></p>
              <p>País: {dataDetail.country}</p>
              <p>Ciudad: {dataDetail.city}</p>
              <p>Modalidad: <Pres_or_remote /></p>
              <p>Sueldo: {dataDetail.salary} $</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default PuestoInfo;