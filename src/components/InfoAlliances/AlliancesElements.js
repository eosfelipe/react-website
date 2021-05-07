import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #f9f9f9;
  background-color: #f9f9f9;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    padding: 15px 15px;
  }
`

export const Title = styled.p`
  color: #80808c;
  font-size: 48px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 1.4px;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #80808c;
  font-weight: lighter;
  line-height: 1.8;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Brand = styled.img`
  width: 100%;
  max-width: 300px;
`
