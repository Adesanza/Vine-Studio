import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import styled from "styled-components";
// import { HeaderNavBtn } from "../header/header.styled";
const StyledDrawer = styled(Drawer)`
  & .MuiPaper-root {
    width: 100%;
    height: 100%;
  }
`;
const StyledSideDrawer = styled.div`
  padding: 0;
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  margin: 1.5rem 1rem 1rem;
  & > .MuiSvgIcon-root {
    font-size: 2rem;
    cursor: pointer;
  }
`;

const SideNavLinkContainer = styled.div`
  padding: 1rem;
  margin-top: 1.43rem;
  @media screen and (max-width: 30rem) {
    padding: 0;
    margin: 0;
  }
`;

const SideNavLink = styled.a`
  display: block;
  font-weight: 300;
  font-size: 1rem;
  margin: 0 1.5625rem 3.125rem;
  color: #363435;
`;

const SideNavBtn = styled(Button)`
  && {
    display: block;
    background: #131313;
    border-radius: 0.25rem;
    padding: 1rem 7.5rem;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: none;
    margin: 0 1.5625rem;
  }
`;

const MobileAccordion = styled(Accordion)`
  && {
    padding: 0 0 2.1875rem;
    box-shadow: none;
    background: transparent;
    color: #363435;
    height: auto;
    > div {
      padding: 0;
    }
  }
`;

export {
  StyledDrawer,
  StyledSideDrawer,
  CloseIconContainer,
  SideNavLinkContainer,
  SideNavLink,
  SideNavBtn,
  MobileAccordion,
};
