import Image from "next/image";
import {
  HamburgerContainer,
  LandingContainer,
  NavBarContainer,
} from "./Landing.styled";
import Logo from "../../public/vine-studio-logo.svg";
import Hamburger from "../../public/assets/Hamburger.svg";
type Props = {};

const Landing = (props: Props) => {
  return (
    <LandingContainer>
      <NavBarContainer>
        <Image width={75} height={60} src={Logo} alt={"logo"} />

        <HamburgerContainer>
          <Image width={40} height={30} src={Hamburger} alt={"logo"} />
        </HamburgerContainer>
      </NavBarContainer>
      Chinedu please pay in full so say to start seeing stuffs here
      <p>Biodun be fast and gimme approval so i start</p>
    </LandingContainer>
  );
};

export default Landing;
