import Image from "next/image";
import React, { useState } from "react";
import { HamburgerContainer, NavBarContainer } from "./AppHeader.styled";
import Hamburger from "../../public/assets/Hamburger.svg";
import Logo from "../../public/vine-studio-logo.svg";
import MobileSideNav from "../mobileSideNav/MobileSideNav";

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
      <NavBarContainer>
        <Image width={80} height={60} src={Logo} alt={"logo"} />

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
