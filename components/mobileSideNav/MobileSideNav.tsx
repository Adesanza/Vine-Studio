import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import {
  StyledDrawer,
  StyledSideDrawer,
  CloseIconContainer,
  SideNavLinkContainer,
  SideNavLink,
  MobileAccordion,
  SideNavBox,
  SideNavBtnLogin,
  SideNavBtnApply,
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
              width={90}
              height={60}
              alt="a"
            />
          </Link>
          <CloseIcon onClick={closeRightDrawer} />
        </CloseIconContainer>
        <SideNavLinkContainer>
          <Link href="/about-us" passHref>
            <SideNavLink>About Vine</SideNavLink>
          </Link>
          <Link href="/contact-us" passHref>
            <SideNavLink>What we do </SideNavLink>
          </Link>
          <Link href="/career" passHref>
            <SideNavLink>The Team</SideNavLink>
          </Link>
          <Link href="/career" passHref>
            <SideNavLink>Our Portfolio</SideNavLink>
          </Link>
          <SideNavBox>
            <SideNavBtnLogin onClick={closeRightDrawer}>Login</SideNavBtnLogin>
            <SideNavBtnApply onClick={closeRightDrawer}>Apply</SideNavBtnApply>
          </SideNavBox>
        </SideNavLinkContainer>
      </StyledSideDrawer>
    </StyledDrawer>
  );
};

export default MobileSideNav;
