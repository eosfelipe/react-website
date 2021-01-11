import React from "react";
import {
  Column1,
  Column2,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./Elements";

const data = {
  id: "services",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Servicios",
  headline: "Consulta estética y deportiva",
  headline2: "Consulta clínica",
  headline3: "Consulta online",
  t1: "Historial clínico",
  t2: "Diagnóstico nutricional",
  t3: "Determinación de índice de masa corporal (I.M.C.)",
  t4:
    "Reporte de composición corporal mediante Antropometría (ISAK II) o Bioimpedencia",
  t5: "Determinación de somatotipo",
  t6: "Método fotoscópico",
  t7: "Educación alimentaria",
  t8:
    "Elaboración y envío del plan de alimentación personalizado las 24 horas",
  t9: "Asesoría nutricional vía Whatsapp de lunes a sábado",
  t10: "Orientación en entrenamiento aeróbico y anaeróbico",
  t11: "Esquema de suplementación",
  ht1: "Interpretación de exámenes de laboratorio",
  ht2: "Control de glucosa, presión arterial y frecuencia cardiaca.",
  ht3: "Educación en patologías: Dislipidemias, HTA y Diabetes",
  ht4: "Asesoría en farmacología",
  ht5: "Consulta online vía Zoom",
  ht6: "Control corporal por método fotoscópico, circunferencias y peso",
  ht7: "Esquema de suplementación",
  ht8: "Soporte y asesoría por Whatsapp de lunes a sábado",
  buttonLabel: "Start Now",
  imgStart: false,
  alt: "Paper",
  dark: false,
  primary: false,
  darkText: true,
};

const InfoSectionServices = () => {
  return (
    <>
      <InfoContainer lightBg={data.lightBg} id={data.id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>{data.topLine}</TopLine>
                <Heading>{data.headline}</Heading>
                <ul>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t1}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t2}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t3}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t4}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t5}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t6}</Subtitle>
                  </li>
                </ul>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <ul>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t7}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t8}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t9}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t10}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.t11}</Subtitle>
                  </li>
                </ul>
              </TextWrapper>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>{data.headline2}</Heading>
                <ul>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.ht1}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.ht2}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.ht3}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.ht4}</Subtitle>
                  </li>
                </ul>
              </TextWrapper>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>{data.headline3}</Heading>
                <ul>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.ht5}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.ht6}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.ht7}</Subtitle>
                  </li>
                  <li>
                    <Subtitle darkText={data.darkText}>{data.ht8}</Subtitle>
                  </li>
                </ul>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSectionServices;
