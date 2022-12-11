import { LandingContainer } from "./Landing.styled";
import LandingImage from "../../public/assets/landing-img.svg";
import Image from "next/image";

type Props = {};

const Landing = (props: Props) => {
  return (
    <LandingContainer>
      Chinedu please pay in full so say to start seeing stuffs here
      <p>Biodun be fast and gimme approval so i start</p>
      <Image src={LandingImage} height={400} width={300} alt="vine-studio" />
    </LandingContainer>
  );
};

export default Landing;
