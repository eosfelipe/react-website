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

const InfoAlliances = () => {
  return (
    <>
      <InfoContainer id="contact">
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
            <Brand src={require("../../images/tastyweek.png").default} />
            <Brand src={require("../../images/mgym.png").default} />
            <Brand src={require("../../images/monsreal.png").default} />
            <Brand src={require("../../images/redcord.png").default} />
            <Brand src={require("../../images/cupra.png").default} />
            <Brand src={require("../../images/nacion.png").default} />
            <Brand src={require("../../images/mos.png").default} />
          </InfoGrid>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoAlliances;
