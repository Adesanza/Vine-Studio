import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 90px 70px 40px;
  color: #262c55;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin: 0;
  }
`;
const CopyrightContainer = styled.div`
  display: flex;
  margin-top: auto;
  > p {
    margin: 0;
  }
`;
const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  > section > p {
    margin: 0;
  }
`;

export {
  FooterContainer,
  ContentContainer,
  CopyrightContainer,
  SocialsContainer,
};
