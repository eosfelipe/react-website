import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #f9f9f9;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#80808C")};

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%; /*fit viewport 860ori to 600*/
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 555px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #80808c;
  font-size: 48px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 1.4px;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ lightText }) => (lightText ? "#f9f9f9" : "#80808C")};

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#80808C" : "#f9f9f9")};
  font-weight: lighter;
  line-height: 1.8;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;