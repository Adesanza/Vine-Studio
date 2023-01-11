import React from "react";
import {
  ContentContainer,
  CopyrightContainer,
  FooterContainer,
  SocialsContainer,
} from "./Footer.styled";
import Image from "next/image";
import Logo from "../../public/vine-studio-logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Image src={Logo} width={90} height={40} alt="a" />
        <p>Vine studio</p>
      </ContentContainer>
      <CopyrightContainer>
        <p>Copyright @Vine Studio, 2022</p>
      </CopyrightContainer>
      <SocialsContainer>
        <div>
          <p>Follow us on our socials</p>
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <section>
          <p>Lagos, Nigeria</p>
          <span>+234 5463 0023</span>
        </section>
      </SocialsContainer>
    </FooterContainer>
  );
};

export default Footer;
