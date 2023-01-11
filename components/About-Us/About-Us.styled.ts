import { Button } from "@mui/material";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;
const AboutVineContainer = styled.div`
  display: flex;
  padding: 20px 100px;
`;
const AboutVineP = styled.p`
  max-width: 1090px;
  text-align: center;
  margin: 0 auto;
`;
const AboutVineHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  > h3 {
    color: #262c55;
    font-weight: 700;
    font-size: 38px;
    margin: 0 auto;
    text-align: center;
  }
  > p {
    margin: 0 auto;
  }
`;
const AboutFocusContainer = styled.p`
  max-width: 1090px;
  text-align: center;
  margin: 0 auto;
  > p {
    max-width: 800px;
  }
`;
const AboutBulletContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  background: #fff;
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

const AboutContactUsContainer = styled.div`
  display: flex;
  color: #fff;
  background: #340f33;
  margin-top: 50px;
  > div {
    display: flex;
    flex-direction: column;
    > h3 {
      font-weight: 700;
      font-size: 40px;
      margin-bottom: 0;
    }
    > p {
      font-weight: 400;
      font-size: 20px;
      margin-top: 0;
    }
    > input {
      width: 600px;
      outline: none;
      padding: 16px;
      border-radius: 8px;
      border: none;
      margin-bottom: 33px;
    }
    > textarea {
      outline: none;
      border-radius: 8px;
      padding: 16px;
    }
  }
`;
const MsgBtn = styled(Button)`
  && {
    margin: 33px 0;
    text-transform: none;
    color: #fff;
    background: #ab3356 !important;
    border-radius: 8px;
    padding: 16px 0;
    font-size: 20px;
  }
`;

export {
  AboutUsContainer,
  AboutVineContainer,
  AboutVineHeader,
  AboutVineP,
  AboutFocusContainer,
  AboutBulletContainer,
  AboutContactUsContainer,
  MsgBtn,
};
