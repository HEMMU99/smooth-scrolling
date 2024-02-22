import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How It Works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms Of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">Submit Video</FooterLink>
              <FooterLink to="/signin">Our Business</FooterLink>
              <FooterLink to="/signin">Ambassador</FooterLink>
              <FooterLink to="/signin">Watch A Video</FooterLink>
              <FooterLink to="/signin">Video Gallery</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact Us</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Sponsors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">Google+</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              REACT
            </SocialLogo>
            <WebsiteRights>
              REACT © {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialLink href="/" target="_blank" arial-label="facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="/" target="_blank" arial-label="instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="/" target="_blank" arial-label="instagram">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="/" target="_blank" arial-label="youtube">
                <FaYoutube />
              </SocialLink>
              <SocialLink href="/" target="_blank" arial-label="linkedin">
                <FaLinkedin />
              </SocialLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
