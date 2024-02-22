import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  color: #fff;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  display: grid;
  align-items: center;
  background: #0d0d0d;
  z-index: 99;
  padding-top: 100px;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};

  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  outline: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ff8c00;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 100px;
`;

export const SideBtnRoute = styled(LinkR)`
  background: #0000cd;
  color: #fff;
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
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and(max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
