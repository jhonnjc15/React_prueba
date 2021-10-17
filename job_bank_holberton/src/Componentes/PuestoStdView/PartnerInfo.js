import React from "react";
import partnerlogo from "./partnerlogo.png"
import "./PartnerInfo.css";

function PartnerInfo() {
    return (
        <div className="body-container">
            <div className="title-container">
                <div className="title">
                    <h1>Programador/ Desarrollador Full Stack con experiencia en Frontend y Backend - Teletrabajo/ Linea de carrera</h1>
                </div>
            </div>
            <div className="country-container align-items-center">
                <div className="country">
                    <p>Lima, Perú</p>
                </div>
            </div>
            <div className="half-page">
                <div className="partner">
                    <img src={ partnerlogo } className="partnerlogopng" alt="logo de la empresa"/>
                </div>
                <div className="partner-name">
                    <p>Google LLC</p>
                </div>
                <div className="postula-container">
                    <a className="Postula" href="#">
                        <button className="postula-button">Postula aquí</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PartnerInfo;