import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  @media screen and (min-width: 52em) {
    display: none;
  }
  @media screen and (max-width: 52em) {
    padding: 8px 22px;
    /* border: 1px solid red; */
  }
`;
const HamburgerContainer = styled.div`
  display: flex;
  cursor: pointer;

  /* border: 1px solid red; */
`;

export { NavBarContainer, HamburgerContainer };