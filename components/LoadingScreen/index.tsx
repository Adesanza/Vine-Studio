import React from "react";
import { LogoText, Screen, ScreenContainer } from "../../styles/global.styled";

const LoadingScreen = () => {
  return (
    <Screen>
      <ScreenContainer>
        <div className="animate-flicker">
          <LogoText>Vine Studio</LogoText>
        </div>
      </ScreenContainer>
    </Screen>
  );
};

export default LoadingScreen;
