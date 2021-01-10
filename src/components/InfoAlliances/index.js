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
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Title>Alianzas</Title>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              ipsa, iste dolores quisquam illo corrupti quos animi ut minima
              illum aliquam maiores delectus sint voluptatibus earum, ab at
              totam maxime. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Velit quis deserunt nihil minima adipisci debitis ratione
              aut impedit, nostrum id!
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
