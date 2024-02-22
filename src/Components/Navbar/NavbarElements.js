import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#0000CD" : "#4169E1")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 16px;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  max-width: 1000px;
  width: 100%;
`;
export const NavLogo = styled(LinkR)`
  color: #ff8c00;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  justify-self: flex-start;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin-left: 25px;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    transform: translate(-100%, 3%);
    font-size: 26px;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: auto;
  margin-left: 25px;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-tems: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;

  &.active {
    border-bottom: 3px solid #ff8c00;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  color: #fff;
  background: #0000cd;
  padding: 8px 25px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid #0000cd;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 2px solid #0000cd;
  }
`;
