import { Button } from "@mui/material";
import styled from "styled-components";

const LandingContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  width: 100%;
  flex-direction: column;
  background: #340f33;
  @media screen and (max-width: 52em) {
    margin: 75px 0 0 0;
    padding-bottom: 90px;
    > img {
      margin: auto;
    }
  }
`;
const LandingMainContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 52em) {
    padding: 52px 14px 32px;
    > h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 27px;
      line-height: 46px;
      color: #ffffff;
      margin: 0;
      > span {
        color: #ab3356;
      }
    }
    > p {
      color: #fff;
      margin: 0;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
    }
  }
`;
const LandingMainLinkContainer = styled.div`
  && {
    display: flex;

    @media screen and (max-width: 52em) {
      justify-content: space-around;
    }
  }
`;
const ApplyButtonContainer = styled(Button)`
  && {
    background: #ab3356 !important;
    border-radius: 6px;
    color: #fff;
    text-transform: capitalize;
    font-family: "Lato";
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    padding: 12px 47px;
  }
`;
const ContactUsButtonContainer = styled(Button)`
  && {
    background: rgba(255, 255, 255, 0.05);
    border: 0.5px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    color: #fff;
    text-transform: capitalize;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    padding: 12px 25px;
  }
`;

export {
  LandingContainer,
  LandingMainContent,
  LandingMainLinkContainer,
  ApplyButtonContainer,
  ContactUsButtonContainer,
};
