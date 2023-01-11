import Image from "next/image";
import React, { useState } from "react";
import {
  HamburgerContainer,
  MainLinkContainer,
  NavBarContainer,
  NavBox,
  NavBtnApply,
  NavBtnLogin,
  NavLink,
  WebNavBarContainer,
} from "./AppHeader.styled";
import Hamburger from "../../public/assets/Hamburger.svg";
import Logo from "../../public/vine-studio-logo.svg";
import MobileSideNav from "../mobileSideNav/MobileSideNav";
import {
  SideNavBox,
  SideNavBtnApply,
  SideNavBtnLogin,
} from "../mobileSideNav/MobileSideNav.styled";
import Link from "next/link";

type Props = {};

const AppHeader = (props: Props) => {
  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  //   const handleClick = (event: any) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };
  return (
    <div>
      <WebNavBarContainer>
        <Link href="/" passHref>
          <Image src={Logo} width={90} height={40} alt="a" />
        </Link>

        <MainLinkContainer>
          <Link href="/about-us" passHref>
            <NavLink>About Vine</NavLink>
          </Link>
          <Link href="/about-us" passHref>
            <NavLink>What we do </NavLink>
          </Link>
          <Link href="/about-us" passHref>
            <NavLink>The Team </NavLink>
          </Link>
          <Link href="/about-us" passHref>
            <NavLink>Our portfolio</NavLink>
          </Link>
          <NavBox>
            <NavBtnLogin>Login</NavBtnLogin>
            <NavBtnApply>Apply</NavBtnApply>
          </NavBox>
        </MainLinkContainer>
      </WebNavBarContainer>
      <NavBarContainer>
        <Image width={90} height={50} src={Logo} alt={"logo"} />

        <HamburgerContainer onClick={() => setShowRightDrawer(true)}>
          <Image width={40} height={30} src={Hamburger} alt={"logo"} />
        </HamburgerContainer>
        <MobileSideNav
          showRightDrawer={showRightDrawer}
          closeRightDrawer={() => setShowRightDrawer(false)}
        />
      </NavBarContainer>
    </div>
  );
};

export default AppHeader;
