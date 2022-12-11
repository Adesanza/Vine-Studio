import styled from "styled-components";

interface ImageContainerProps {
  rounded?: string;
  height: string;
  width: string;
  mobileWidth?: string;
}
interface CustomHeader1Props {
  color?: string;
  mobFontSize: string;
  laptopFontSize: string;
}

interface DescriptionTextProps {
  color?: string;
  mobFontSize?: string;
  laptopFontSize?: string;
}
interface UtilsContainerProps {}

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
  background: #4b2264;
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

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  border-radius: ${({ rounded }) => (rounded ? rounded : "0rem")};
  height: ${({ height }) => height};
  width: ${({ mobileWidth }) => mobileWidth};
  overflow-y: hidden;
  margin: auto;
  background: #f2f2f2;

  @media screen and (min-width: 768px) {
    width: ${({ width }) => width};
  }
`;

const DescriptionText = styled.div<DescriptionTextProps>`
  font-size: 16px;
  color: #828282;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const UtilsContainer = styled.div<UtilsContainerProps>`
  display: flex
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;


  @media screen and (min-width: 768px){
    width: 35%;
    margin: auto;
  }
`;

const ErrorButtonContainer = styled.div<UtilsContainerProps>`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const MaintenanceButtonContainer = styled.div<UtilsContainerProps>`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;

const UtilsSubContainer = styled.div<UtilsContainerProps>`
  display: grid;
  margin-bottom: 2rem;
`;

const AnchorTagWithImage = styled.a<UtilsContainerProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
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

const titleText = styled.div<DescriptionTextProps>`
  font-size: 16px;
  color: #828282;
`;

const CustomHeading1 = styled.div<CustomHeader1Props>`
  position: relative;
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
  ImageContainer,
  DescriptionText,
  UtilsContainer,
  ErrorButtonContainer,
  MaintenanceButtonContainer,
  UtilsSubContainer,
  UtilsFullContainer,
  AnchorTagWithImage,
  ResponseContainerDiv,
  Screen,
  ScreenContainer,
  LogoText,
};
