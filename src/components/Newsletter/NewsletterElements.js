import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '../../images/bg_news.jpg'

export const NewsletterContainer = styled.div`
  color: #f9f9f9;
  background: url(${bg}) no-repeat;
  background-size: cover;
  object-fit: cover;
  -o-object-fit: cover;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`

export const NewsletterWrapper = styled.div`
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

export const NewsletterRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    min-width: 0;
    padding: 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f9f9f9' : '#80808c')};
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`

export const FormWrapper = styled.form`
  width: 80%;
  margin: auto;
`

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 32px;
  input[type="email"],
  input[type="tel"] {
    font-size: 1rem;
    color: #f9f9f9;
    width: 100%;
    outline: none;
    padding: 15px;
    background: none;
    border: none;
    border-bottom: 1px solid #f9f9f9;

    &:focus,
    :active {
      outline: none;
      border-bottom: 1px solid #c0a06d;
    }
  }
`

export const BtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
