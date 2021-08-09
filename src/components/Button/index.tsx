import React from "react";

import { Container, Icon, Title } from "./styles";
import TouchableOpacityModel from "../../models/components/TouchableOpacity";

import logoImg from "../../assets/logo.png";

const Button: React.FC<TouchableOpacityModel> = ({ title, isIconRight, ...rest }) => {
  return (
    <Container
      activeOpacity={0.8}
      {...rest}
    >
      <Title>{title}</Title>
      <Icon 
        source={logoImg}
        resizeMode="contain"
        style={{ tintColor: "#000" }}
        isRight={isIconRight}
      />
    </Container>
  );
}

export default Button;