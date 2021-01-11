import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./infoElements";
import logoN from "../../images/n.png";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  p1,
  p2,
  p3,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                {headline ? (
                  <TopLine>{topLine}</TopLine>
                ) : (
                  <img src={logoN} alt="norder" />
                )}
                {headline && (
                  <Heading lightText={lightText}>{headline}</Heading>
                )}
                {!headline ? (
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                ) : (
                  <ul>
                    <li>
                      <Subtitle style={{ marginBottom: 0 }} darkText={darkText}>
                        {p1}
                      </Subtitle>
                    </li>

                    <li>
                      <Subtitle style={{ marginBottom: 0 }} darkText={darkText}>
                        {p2}
                      </Subtitle>
                    </li>

                    <li>
                      <Subtitle style={{ marginBottom: 0 }} darkText={darkText}>
                        {p3}
                      </Subtitle>
                    </li>
                  </ul>
                )}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
