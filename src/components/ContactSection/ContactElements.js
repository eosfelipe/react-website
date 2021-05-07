import styled from 'styled-components'

export const ContactContainer = styled.div`
  color: #f9f9f9;
  background-color: #80808c;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`

export const ContactWrapper = styled.div`
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

export const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;
  min-width: 1050px;

  @media screen and (max-width: 768px) {
    min-width: 0;
    padding: 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`

export const Title = styled.p`
  color: #f9f9f9;
  font-size: 48px;
  /* line-height: 16px; */
  font-weight: 900;
  letter-spacing: 1.4px;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`

export const FormWrapper = styled.form`
  width: 100%;
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  font-size: 1rem;
  color: #f9f9f9;
  width: 100%;
  outline: none;
  padding: 15px;
  background: none;
  border: none;
  border-bottom: 1px solid #f9f9f9;
  margin: 1rem;

  &:focus,
  :active {
    outline: none;
    border-bottom: 1px solid #c0a06d;
  }
`

export const TextArea = styled.textarea`
  font-size: 1rem;
  color: #f9f9f9;
  width: 100%;
  outline: none;
  padding: 15px;
  background: none;
  border: none;
  border-bottom: 1px solid #f9f9f9;
  margin: 1rem;

  &:focus,
  :active {
    outline: none;
    border-bottom: 1px solid #c0a06d;
  }
`

export const Button = styled.button`
  color: #f9f9f9;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2rem;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  width: 100%;
  padding: 0rem 1rem;
  border: 1px solid;
  overflow: hidden;
  text-align: center;

  span {
    z-index: 20;
  }

  &::after {
    background: #f9f9f9;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &::after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`
