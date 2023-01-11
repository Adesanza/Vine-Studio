import { FC } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;
const LandingMainBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 70px;
  width: 100%;

  background: #340f33;

  @media screen and (max-width: 52em) {
    margin: 75px 0 0 0;
    flex-direction: column;
    padding-bottom: 90px;
    > img {
      margin: auto;
    }
  }
`;
const LandingMainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  > h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 76px;
    color: #ffffff;
    margin: 0;
    > span {
      color: #ab3356;
    }
  }
  > p {
    color: #fff;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 33px;
    max-width: 550px;
  }
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
    margin-top: 47px;
    gap: 33px;
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
    background: #340f33 !important;
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

const WeWorkContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  > div {
    color: #262c55;
    > h5 {
      font-weight: 800;
      font-size: 24px;
      margin: 0;
    }
    > p {
      font-weight: 300;
      font-size: 20px;
      line-height: 33px;
    }
  }
`;
const HowWeWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;
const WeWorkHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  > h3 {
    color: #262c55;
    font-weight: 700;
    font-size: 38px;
    margin-top: 0;
    text-align: center;
  }
`;
const WeDoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  > h3 {
    color: #262c55;
    font-weight: 700;
    font-size: 38px;
    margin: 0;
    text-align: center;
  }
  > p {
    margin: 0;
  }
`;
const BulbContainer = styled.div`
  display: flex;
  gap: 80px;
  justify-content: space-between;
  padding: 0 50px;
`;
const WhereWeFocusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 78px;
  background: rgba(52, 15, 51, 0.03);
  > section {
    display: flex;
    flex-direction: column;
    > aside {
      color: #262c55;
      max-width: 630px;
      > h5 {
        font-weight: 700;
        font-size: 38px;
        margin: 0;
      }
    }
  }
`;
const BulletContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 30px;
  color: #262c55;
  > div {
    display: flex;
    padding: 8px 19px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(38, 44, 85, 0.05);
    border-radius: 5px;
    align-items: center;
    > img {
      margin-right: 21px;
    }
    > span {
      font-weight: 700;
      font-size: 24px;
    }
    > svg {
      margin: 0 8px;
    }
  }
`;
const WhatWeDoContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(38, 44, 85, 0.08);
  border-radius: 20px;
  margin: 50px 70px;
  padding-top: 50px;
`;

const TwoSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 20px;
`;
const StartUpContainer = styled.div`
  display: flex;
  > section {
    max-width: 450px;
    margin-left: 16px;
    > h4 {
      margin: 0;
    }
  }
`;
const BusinessContainer = styled.div`
  display: flex;
  > section {
    max-width: 450px;
    margin-left: 16px;
    > h4 {
      margin: 0;
    }
  }
`;
const VerticalHR = styled.div`
  border: 0.5px solid rgba(52, 15, 51, 0.4);
`;
const NewsLetterContainer = styled.div`
  display: flex;
  background: #340f33;
  > section {
    margin: 130px 0 130px 80px;
    color: #ffffff;
    > h3 {
      font-weight: 600;
      font-size: 60px;
      margin: 0;
    }
    > p {
      font-weight: 400;
      font-size: 23px;
      margin: 0;
    }
  }
`;
const SubscribeContainer = styled.div`
  display: flex;
  margin-top: 56px;

  > input {
    padding: 16px 20px;
    outline: none;
    width: 300px;
  }
`;
const SubscribeBtn = styled(Button)`
  && {
    background: #ab3356 !important;
    color: #fff;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
  }
`;

export {
  LandingContainer,
  VerticalHR,
  SubscribeBtn,
  SubscribeContainer,
  LandingMainBox,
  LandingMainContent,
  LandingMainLinkContainer,
  ApplyButtonContainer,
  ContactUsButtonContainer,
  HowWeWorkContainer,
  BulbContainer,
  WeWorkHeader,
  WhereWeFocusContainer,
  WhatWeDoContainer,
  NewsLetterContainer,
  WeWorkContentContainer,
  BulletContainer,
  WeDoHeader,
  TwoSubContainer,
  StartUpContainer,
  BusinessContainer,
};
