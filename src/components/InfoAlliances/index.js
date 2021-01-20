import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Title,
  Description,
  InfoGrid,
  Brand,
} from "./AlliancesElements";
import "./tooltip.css";

const InfoAlliances = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Title>Alianzas</Title>
            <Description>
              Para ofrecerte un servicio completo contamos con tarifas
              especiales, descuentos y promociones de marcas aliadas que
              complementan nuestros servicios para vivir una experiencia
              completa. Solicita el cupón del mes.
            </Description>
          </InfoRow>
          <InfoGrid>
            <div className="tooltip top">
              <Brand src={require("../../images/tastyweek.png").default} />
              <span className="tiptext">30% off Primer pedido</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/mgym.png").default} />
              <span className="tiptext">$550 mes</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/redcord.png").default} />
              <span className="tiptext">2 Consultas gratis</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/cupra.png").default} />
              <span className="tiptext">10% off en suplementos</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/nacion.png").default} />
              <span className="tiptext">10% off</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/onebalance.png").default} />
              <span className="tiptext">10% off</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/psicologia.png").default} />
              <span className="tiptext">15% off</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/raw.png").default} />
              <span className="tiptext">$350 mes sin inscripción</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/road.png").default} />
              <span className="tiptext">1 semana gratis</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/shukra.png").default} />
              <span className="tiptext">
                1 consulta de presoterapia gratis y 10% off
              </span>
            </div>
          </InfoGrid>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoAlliances;
