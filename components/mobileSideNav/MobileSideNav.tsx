import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import {
  StyledDrawer,
  StyledSideDrawer,
  CloseIconContainer,
  SideNavLinkContainer,
  SideNavLink,
  SideNavBtn,
  MobileAccordion,
} from "./MobileSideNav.styled";
import Image from "next/image";
import Logo from "../../public/vine-studio-logo.svg";

const MobileSideNav = ({ showRightDrawer, closeRightDrawer }: any) => {
  return (
    <StyledDrawer open={showRightDrawer} anchor="left">
      <StyledSideDrawer>
        <CloseIconContainer>
          <Link href="/" passHref>
            <Image
              onClick={closeRightDrawer}
              src={Logo}
              width={50}
              height={40}
              alt="a"
            />
          </Link>
          <CloseIcon onClick={closeRightDrawer} />
        </CloseIconContainer>
        <SideNavLinkContainer>
          <Link href="/about-us" passHref>
            <SideNavLink>About us</SideNavLink>
          </Link>
          <Link href="/contact-us" passHref>
            <SideNavLink>Contact us</SideNavLink>
          </Link>
          <Link href="/career" passHref>
            <SideNavLink>Careers</SideNavLink>
          </Link>
          <SideNavBtn>Login</SideNavBtn>
          <SideNavBtn>Apply</SideNavBtn>
        </SideNavLinkContainer>
      </StyledSideDrawer>
    </StyledDrawer>
  );
};

export default MobileSideNav;
