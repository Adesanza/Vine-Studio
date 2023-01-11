import React from "react";
import {
  AboutBulletContainer,
  AboutContactUsContainer,
  AboutFocusContainer,
  AboutUsContainer,
  AboutVineContainer,
  AboutVineHeader,
  AboutVineP,
  MsgBtn,
} from "./About-Us.styled";
import Image from "next/image";
import { WeWorkHeader } from "../Landing/Landing.styled";
import WeWork from "../../public/assets/we-work.svg";
import AboutWidePic from "../../public/assets/about-pic.svg";
import WeFocus from "../../public/assets/we-focus.svg";
import BulletPoint from "../../public/assets/bullet-point.svg";
import EastIcon from "@mui/icons-material/East";
const AboutUsPage = () => {
  return (
    <AboutUsContainer>
      <AboutVineContainer>
        <AboutVineHeader>
          <Image src={WeWork} height={50} width={50} alt="vine-studio" />
          <h3>About vine </h3>
          <p>who we are;</p>
          <AboutVineP>
            ‘Vine’ is a Venture Studio that supports start-ups and businesses.
            The purpose of ‘Vine’ is to work with entrepreneurs to nurture and
            build businesses based on godly principles. We believe that
            entrepreneurs can leverage these principles to grow sustainable and
            successful indigenous businesses in Africa; a continent rife with
            challenges including inadequate systems and structures. <br />{" "}
            <br /> In a time when investor scrutiny is heightened and capital is
            scarce as a result of market uncertainties, we are focused on
            establishing structures that set up sound business models for long
            term success and make for strong investment attractiveness. These
            structures will revolve around three key pillars - integrity,
            efficiency, and transparency - and will enhance access to the right
            investors, partners, customers and other stakeholders.
          </AboutVineP>
        </AboutVineHeader>
      </AboutVineContainer>

      <Image src={AboutWidePic} alt="vine-studio" width={1280} />
      <AboutFocusContainer>
        <Image src={WeFocus} height={50} width={99} alt="vine-studio" />
        <h3>Where we focus</h3>
        <p>
          Our mission is to build a network of bonafide entrepreneurs who will
          dare to build with a desire to solve critical challenges that we face
          across the world and primarily in Africa. By fostering a collaborative
          environment for entrepreneurs in these focus areas, we hope to design
          solutions that can create much needed linkages for growth IN PEATH.
        </p>
        <AboutBulletContainer>
          <div>
            <Image src={BulletPoint} height={24} width={24} alt="vine-studio" />
            <span>P</span> <EastIcon /> Power
          </div>
          <div>
            <Image src={BulletPoint} height={24} width={24} alt="vine-studio" />
            <span>E</span> <EastIcon /> Education
          </div>
          <div>
            <Image src={BulletPoint} height={24} width={24} alt="vine-studio" />
            <span>A</span> <EastIcon /> Agriculture
          </div>
          <div>
            <Image src={BulletPoint} height={24} width={24} alt="vine-studio" />
            <span>T</span> <EastIcon /> Transportation
          </div>
          <div>
            <Image src={BulletPoint} height={24} width={24} alt="vine-studio" />
            <span>H</span> <EastIcon /> Healthcare
          </div>
        </AboutBulletContainer>
      </AboutFocusContainer>
      <AboutContactUsContainer>
        <Image src={BulletPoint} height={600} width={400} alt="vine-studio" />
        <div>
          <h3>Contact us</h3>
          <p>Be part of the first to enjoy vine</p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Company Name" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            placeholder="Write your message"
          ></textarea>
          <MsgBtn>Message</MsgBtn>
        </div>
      </AboutContactUsContainer>
    </AboutUsContainer>
  );
};

export default AboutUsPage;
