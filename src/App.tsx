import React, { useEffect, useRef, useState } from "react";
import { Animated, StatusBar } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Vidaloka_400Regular } from "@expo-google-fonts/vidaloka";

import { Background, Batman, BatmanAnimated, Container } from "./styles";

import backgroundImg from "./assets/background.png";
import batmanImg from "./assets/batman.png";

import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";

const App: React.FC = () => {
  const batmanScale = useRef(new Animated.Value(4)).current;
  const batmanPosition = useRef(new Animated.Value(0)).current;
  const [page, setPage] = useState<number>(0);

  const [fontsLoaded] = useFonts({ Vidaloka_400Regular });

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(batmanScale, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, 2400);

    return () => clearTimeout(timer);
  }, [batmanScale]);

  !fontsLoaded && <AppLoading />

  return (
    <>
      <StatusBar hidden />
      <Container>
        <Background source={backgroundImg} resizeMode="cover" />
        <BatmanAnimated
          style={{
            transform: [
              { scale: batmanScale },
              { translateY: batmanPosition }
            ],
          }}
        >
          <Batman source={batmanImg} resizeMode="cover" />
        </BatmanAnimated>

        {!page ? (
          <Welcome 
            batmanPosition={batmanPosition}
            setPage={setPage}
          />
        ) : (
          <SignUp />
        )
        }
      </Container>
    </>
  );
}

export default App;