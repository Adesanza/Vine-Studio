import {
  ApplyButtonContainer,
  ContactUsButtonContainer,
  LandingContainer,
  LandingMainContent,
  LandingMainLinkContainer,
} from "./Landing.styled";
import LandingImage from "../../public/assets/landing-img.svg";
import Image from "next/image";

type Props = {};

const Landing = (props: Props) => {
  return (
    <LandingContainer>
      <LandingMainContent>
        <h1>
          We <span>support</span> start-ups and businesses
        </h1>
        <p>
          The purpose of ‘Vine’ is to work with entrepreneurs to nurture and
          build businesses based on godly principles. We believe that
          entrepreneurs can leverage these principles to grow sustainable and
          successful indigenous businesses in Africa.
        </p>
      </LandingMainContent>
      <LandingMainLinkContainer>
        <ApplyButtonContainer>apply</ApplyButtonContainer>
        <ContactUsButtonContainer>contact us</ContactUsButtonContainer>
      </LandingMainLinkContainer>
      {/* Chinedu please pay in full so say to start seeing stuffs here
      <p>Biodun be fast and gimme approval so i start</p> */}
      <Image src={LandingImage} height={400} width={350} alt="vine-studio" />
    </LandingContainer>
  );
};

export default Landing;
