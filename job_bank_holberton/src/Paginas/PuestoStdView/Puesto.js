import React from "react";
import NavPuesto from "../../Componentes/PuestoStdView/Navegador/NavPuesto";
import PuestoInfo from "../../Componentes/PuestoStdView/PuestoInfo";
import PartnerInfo from "../../Componentes/PuestoStdView/PartnerInfo";


function Puesto() {
  return (
    <React.Fragment>
        <NavPuesto />
        <PartnerInfo />
        <PuestoInfo />
    </React.Fragment>
  );
}

export { Puesto };
