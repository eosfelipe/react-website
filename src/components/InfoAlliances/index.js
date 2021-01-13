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
              <span className="tiptext"> -30% OFF</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/mgym.png").default} />
              <span className="tiptext"> -30% OFF</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/monsreal.png").default} />
              <span className="tiptext"> -30% OFF</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/redcord.png").default} />
              <span className="tiptext"> -30% OFF</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/cupra.png").default} />
              <span className="tiptext"> -30% OFF</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/nacion.png").default} />
              <span className="tiptext"> -30% OFF</span>
            </div>
            <div className="tooltip top">
              <Brand src={require("../../images/mos.png").default} />
              <span className="tiptext"> -30% OFF</span>
            </div>
          </InfoGrid>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoAlliances;
