import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#228B22" : "#32CD32")};
  padding: ${({ big }) => (big ? "8px 25px 10px" : "8px 25px 10px")};
  color: ${({ dark }) => (dark ? "#d3d3d3" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "21px" : "19px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#32CD32" : "#228B22")};
  }
`;
