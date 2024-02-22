import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: column;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 16px;
  text-align: left;
  width: 165px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 21px;
  color: #fff;
  margin-bottom: 15px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 12px;
  color: #fff;
  font-size: 15px;
  transition: 0.3s ease-in-out;
  &:hover {
    color: orange;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1100px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 800;
  letter-spacing: 6px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  margin: 0 20px 0;
`;
