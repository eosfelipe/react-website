import styled from "styled-components";
import { Link } from "react-scroll";

const primaryColor = "#01bf71";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? primaryColor : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#f9f9f9")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#f9f9f9" : primaryColor)};
  }
`;

export const Button2 = styled(Link)`
  color: #f9f9f9;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2rem;
  max-width: 320px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  padding: 0rem 1rem;
  border: 1px solid;
  overflow: hidden;
  position: relative;

  span {
    z-index: 20;
    letter-spacing: 2px;
    font-weight: lighter;
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
    z-index: -10;
  }

  &:hover {
    &::after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;
