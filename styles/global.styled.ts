import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
`;

const FlexSpaceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const EmptyStateContainer = styled.div`
  margin-top: 1rem;
`;

const Screen = styled.div`
  position: relative;
  scroll-behavior: smooth;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #340f33;
  color: #fff;
  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ScreenContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .animate-flicker {
    -webkit-animation: flickerAnimation 2s infinite;
    -moz-animation: flickerAnimation 2s infinite;
    -o-animation: flickerAnimation 2s infinite;
    animation: flickerAnimation 2s infinite;
  }
`;

const UtilsFullContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem;
  color: #ea622b;

  @media screen and (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const ResponseContainerDiv = styled.div`
  padding: 1rem 3rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
    margin-top: 5rem;
  }
`;

const LogoText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
`;

export {
  FlexContainer,
  FlexSpaceContainer,
  EmptyStateContainer,
  UtilsFullContainer,
  ResponseContainerDiv,
  Screen,
  ScreenContainer,
  LogoText,
};
